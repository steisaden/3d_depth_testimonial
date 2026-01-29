import * as THREE from 'three';
import { Text } from 'three-text/three';

class GlassTestimonialCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.baseUrl = import.meta.env.BASE_URL || '/';
    this.fontPath = `${this.baseUrl}fonts/kenpixel.ttf`;
    this.textMaterial = null;
    this._buildToken = 0;
    this.init();
  }

  static get observedAttributes() {
    return ['name', 'number', 'text', 'link', 'img'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (this.isConnected && this.scene) {
        this.build3DScene();
      }
    }
  }

  connectedCallback() {
    // already initialized in constructor
  }

  disconnectedCallback() {
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.textGroup) {
      this.disposeTextGroup(this.textGroup);
    }
    if (this._animId) cancelAnimationFrame(this._animId);
  }

  async init() {
    this.renderDOM();

    GlassTestimonialCard.configureText();
    this.initThreeJS();
    this.initTilt();
  }

  renderDOM() {
    const name = this.getAttribute('name') || 'Design';
    const number = this.getAttribute('number') || '01';
    const text = this.getAttribute('text') || 'Create stunning, modern interfaces that captivate users with depth and clarity.';
    const link = this.getAttribute('link') || '#';
    const img = this.getAttribute('img') || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

    const style = `
      <style>
        :host {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          --text-color: #fff;
          --card-bg: rgba(255, 255, 255, 0.05); 
          --card-border-bright: rgba(255, 255, 255, 0.4);
          --card-border-dim: rgba(255, 255, 255, 0.1);
          margin: 20px;
        }

        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 320px;
          height: 440px;
          transform-style: preserve-3d;
          transform: perspective(1000px);
        }

        .canvas-container {
             position: absolute;
             top: 0; left: 0;
             width: 100%; height: 100%;
             pointer-events: none; 
             z-index: 4; /* Middle Layer: Above Base & Text, Below Quote & Image */
             transform: translateZ(30px); 
        }

        .glass-box {
          position: absolute;
          background: var(--card-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-top: 1px solid var(--card-border-bright);
          border-left: 1px solid var(--card-border-bright);
          border-right: 1px solid var(--card-border-dim);
          border-bottom: 1px solid var(--card-border-dim);
          border-radius: 15px;
          box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.1s;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          color: var(--text-color);
        }

        .base-card {
           width: 260px;
           height: 380px;
           z-index: 1; 
           transform: translateZ(0px);
        }
        
        .quote-box {
            width: 80px;
            height: 80px;
            top: 60px; 
            left: -30px; 
            z-index: 5; /* Highest Layer */
            transform: translateZ(40px);
        }
        
        .quote-icon {
            width: 36px;
            height: 36px;
            object-fit: contain;
            filter: brightness(0) invert(1);
        }

        .image-box {
            width: 110px;
            height: 110px;
            top: -40px;
            right: -30px; 
            z-index: 5; /* Highest Layer */
            transform: translateZ(60px);
            padding: 8px;
        }
        
        .image-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        .text-box {
            width: 280px;
            min-height: 140px;
            bottom: 20px;
            left: 20px;
            z-index: 3; /* Lower Layer: Sits BEHIND the Canvas */
            display: flex;
            flex-direction: column;
            justify-content: flex-end; 
            align-items: center;
            padding: 20px;
            text-align: center;
            transform: translateZ(20px); /* MOVED BACK: Sits behind Canvas (Z=30) */
        }
        
        .text-box p {
            opacity: 0; 
            height: 80px; 
            margin: 0 0 15px 0;
        }

        .text-box a {
            display: inline-block;
            padding: 8px 20px;
            background: #fff;
            color: #111;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            position: relative; 
            opacity: 1;
            margin-top: auto;
        }
      </style>
    `;

    const quoteIcon = `
        <img class="quote-icon" src="${this.baseUrl}icons/quote.png" alt="Quote mark" />
    `;

    this.shadowRoot.innerHTML = `
      ${style}
      <div class="container">
        <div class="canvas-container"></div>
        <div class="glass-box base-card" data-depth="0"></div>
        <div class="glass-box quote-box" data-depth="40">
            ${quoteIcon}
        </div>
        <div class="glass-box image-box" data-depth="60">
            <img src="${img}" alt="${name}" />
        </div>
        <div class="glass-box text-box" data-depth="20">
            <p>${text} <!-- Spacer --></p>
            <a href="${link}">Read More</a>
        </div>
      </div>
    `;
  }

  initThreeJS() {
    const container = this.shadowRoot.querySelector('.canvas-container');
    const width = 320;
    const height = 440;

    const scene = new THREE.Scene();

    // Camera Z adjusted for visibility
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.z = 640;
    camera.position.y = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(30, 60, 40);
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(0xffe4e1, 0.5);
    fillLight.position.set(-30, -20, 30);
    scene.add(fillLight);

    this.textMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff0f0,
      roughness: 0.75,
      metalness: 0.02,
      emissive: 0xffffff,
      emissiveIntensity: 0.05
    });

    this.build3DScene();

    const animate = () => {
      if (!this.isConnected) return;
      this._animId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }

  static configureText() {
    if (GlassTestimonialCard._hbConfigured) return;
    const baseUrl = import.meta.env.BASE_URL || '/';
    Text.setHarfBuzzPath(`${baseUrl}hb/hb.wasm`);
    GlassTestimonialCard._hbConfigured = true;
  }

  disposeTextGroup(group) {
    group.traverse((child) => {
      if (child.isMesh && child.geometry) {
        child.geometry.dispose();
      }
    });
  }

  async build3DScene() {
    const token = ++this._buildToken;

    const number = this.getAttribute('number') || '01';
    const name = this.getAttribute('name') || 'Design';
    const text = this.getAttribute('text') || 'Create stunning, modern interfaces.';

    const group = new THREE.Group();

    try {
      const numberMesh = await this.createTextMesh(number, {
        size: 30,
        depth: 2,
        x: -90,
        y: 170,
        z: 25
      });

      const titleMesh = await this.createTextMesh(name, {
        size: 20,
        depth: 1.2,
        x: 0,
        y: 60,
        z: 30
      });

      const bodyMesh = await this.createTextMesh(text, {
        size: 12,
        depth: 0.4,
        lineHeight: 1.2,
        letterSpacing: 0.08,
        layout: { width: 320, align: 'center' },
        maxHeight: 120,
        x: 20,
        y: -100,
        z: 10
      });

      if (token !== this._buildToken) {
        this.disposeTextGroup(group);
        return;
      }

      group.add(numberMesh, titleMesh, bodyMesh);

      if (this.textGroup) {
        this.scene.remove(this.textGroup);
        this.disposeTextGroup(this.textGroup);
      }

      this.textGroup = group;
      this.scene.add(group);
    } catch (e) {
      console.error('Failed to build three-text geometry', e);
      this.disposeTextGroup(group);
    }
  }

  async createTextMesh(text, options) {
    const {
      size,
      depth,
      lineHeight,
      letterSpacing,
      layout,
      maxHeight,
      x,
      y,
      z
    } = options;

    const result = await Text.create({
      text,
      font: this.fontPath,
      size,
      depth,
      lineHeight,
      letterSpacing,
      layout
    });

    const geometry = result.geometry;
    geometry.computeBoundingBox();
    const box = geometry.boundingBox;
    geometry.translate(
      -0.5 * (box.max.x + box.min.x),
      -0.5 * (box.max.y + box.min.y),
      0
    );

    const mesh = new THREE.Mesh(geometry, this.textMaterial);
    if (maxHeight) {
      const height = box.max.y - box.min.y;
      if (height > 0) {
        const scale = Math.min(1, maxHeight / height);
        mesh.scale.setScalar(scale);
      }
    }
    mesh.position.set(x, y, z);
    return mesh;
  }

  initTilt() {
    const container = this.shadowRoot.querySelector('.container');
    const elementsToTilt = this.shadowRoot.querySelectorAll('.glass-box');

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      elementsToTilt.forEach(el => {
        const depth = parseFloat(el.getAttribute('data-depth')) || 0;
        const moveX = ((x - centerX) / centerX) * (depth / 4);
        const moveY = ((y - centerY) / centerY) * (depth / 4);
        el.style.transform = `translateZ(${depth}px) translateX(${moveX}px) translateY(${moveY}px)`;
      });

      if (this.camera) {
        this.camera.position.x = ((x - centerX) / centerX) * 20;
        this.camera.position.y = ((y - centerY) / centerY) * -20;
        this.camera.lookAt(0, 0, 0);
      }
    });

    container.addEventListener('mouseleave', () => {
      container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      elementsToTilt.forEach(el => {
        const depth = parseFloat(el.getAttribute('data-depth')) || 0;
        el.style.transform = `translateZ(${depth}px) translateX(0) translateY(0)`;
      });
      if (this.camera) {
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.lookAt(0, 0, 0);
      }
    });
  }
}

customElements.define('glass-testimonial-card', GlassTestimonialCard);
