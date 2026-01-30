import * as THREE from 'three';
import { Text } from 'three-text/three';

class GlassTestimonialCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.baseUrl = import.meta.env.BASE_URL || '/';
        this.fontPath = `${this.baseUrl}fonts/kenpixel.ttf`;
        this.textMaterial = null;

        // Create reused gradient texture for 3D shadows
        this.gradientTexture = this.createGradientTexture();

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

    // Create a canvas texture for the gradient shadow (Blue -> Pink)
    createGradientTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128; // Square for simple mapping
        const ctx = canvas.getContext('2d');

        // Gradient matching the background blobs
        // #2196f3 (Blue) -> #e91e63 (Pink/Red)
        const grad = ctx.createLinearGradient(0, 0, 128, 128); // Diagonal gradient
        grad.addColorStop(0, '#2196f3');
        grad.addColorStop(1, '#e91e63'); // or #f0f based on the other blob

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);

        const tex = new THREE.CanvasTexture(canvas);
        return tex;
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
             z-index: 4; 
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
        
        /* Updated: Quote Box sits HIGHER now to let the icon float */
        .quote-box {
            width: 80px;
            height: 80px;
            top: 60px; 
            left: -30px; 
            z-index: 5; 
            transform: translateZ(60px); /* Increased Z to hover higher */
            overflow: visible; /* Allow icon to float out if moved */
        }
        
        .quote-icon-svg {
            width: 42px; /* Slightly larger */
            height: 42px;
            /* No filter: invert needed, we use SVG fill */
            filter: drop-shadow(0 5px 15px rgba(233, 30, 99, 0.4)); /* Glow matching the gradient */
            transform: translateY(-5px); /* Hover slightly above center */
        }

        .image-box {
            width: 110px;
            height: 110px;
            top: -40px;
            right: -30px; 
            z-index: 5; 
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
            z-index: 3; 
            display: flex;
            flex-direction: column;
            justify-content: flex-end; 
            align-items: center;
            padding: 20px;
            text-align: center;
            transform: translateZ(20px); 
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

        // INLINE SVG with GRADIENT definition
        // Reuse the exact path from the original quote icon logic (assumed standard quote mark)
        // Or simpler: Use the path d from a standard quote icon. 
        // Since I can't read the png file, I will use a standard quote path.
        const quotePath = "M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z";

        const quoteIcon = `
        <svg class="quote-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="iconMethodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2196f3;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#e91e63;stop-opacity:1" />
                </linearGradient>
            </defs>
            <path d="${quotePath}" fill="url(#iconMethodGradient)" />
        </svg>
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

        // Camera
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

        // Shadow Material (Basic + Texture Gradient)
        this.shadowMaterial = new THREE.MeshBasicMaterial({
            map: this.gradientTexture,
            transparent: true,
            opacity: 0.6, // Semi-transparent shadow
            side: THREE.DoubleSide
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
            // 1. Number Mesh ("01") + Shadow
            const numberMesh = await this.createTextMesh(number, {
                size: 30, depth: 2, x: -90, y: 150, z: 45, isMain: true
            });

            // 2. Title Mesh ("Design") + Shadow
            const titleMesh = await this.createTextMesh(name, {
                size: 25, depth: 1.2, x: 0, y: 40, z: 50, isMain: true
            });

            // 3. Body Text (No shadow usually needed for small body text readability)
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
            size, depth, lineHeight, letterSpacing, layout, maxHeight, x, y, z,
            isMain // Flag to trigger shadow generation
        } = options;

        const result = await Text.create({
            text,
            font: this.fontPath,
            size,
            depth,
            lineHeight,
            letterSpacing,
            layout,
            // Fully Rounded "Marshmallow" Settings
            bevelEnabled: true,
            bevelThickness: size * 0.2,
            bevelSize: size * 0.05,
            bevelSegments: 12
        });

        const geometry = result.geometry;
        geometry.computeBoundingBox();
        const box = geometry.boundingBox;

        // FIX: Remap UVs so the gradient texture spans the full text width
        // This ensures the Blue->Pink gradient flows across the whole word, not just per-letter
        const uvAttribute = geometry.attributes.uv;
        const posAttribute = geometry.attributes.position;
        if (uvAttribute && posAttribute) {
            const minX = box.min.x;
            const minY = box.min.y;
            const width = box.max.x - box.min.x;
            const height = box.max.y - box.min.y;

            for (let i = 0; i < uvAttribute.count; i++) {
                const x = posAttribute.getX(i);
                const y = posAttribute.getY(i);

                // Map X/Y position to 0..1 UV space
                const u = (x - minX) / width;
                const v = (y - minY) / height;

                uvAttribute.setXY(i, u, v);
            }
            uvAttribute.needsUpdate = true;
        }

        geometry.translate(
            -0.5 * (box.max.x + box.min.x),
            -0.5 * (box.max.y + box.min.y),
            0
        );

        // Main Mesh
        const mesh = new THREE.Mesh(geometry, this.textMaterial);

        // Scale Logic
        if (maxHeight) {
            const height = box.max.y - box.min.y;
            if (height > 0) {
                const scale = Math.min(1, maxHeight / height);
                mesh.scale.setScalar(scale);
            }
        }

        mesh.position.set(x, y, z);

        // Shadow Logic: Check if this is a "Main" text (Title/Number) that wants a shadow
        if (isMain) {
            // Clone the geometry? Alternatively, just reuse it if we don't modify it. 
            // Three.js meshes can share geometry.
            const shadowMesh = new THREE.Mesh(geometry, this.shadowMaterial);

            // Offset for shadow: Below (-y) and Behind (-z) and Slightly right (+x)
            shadowMesh.position.set(x + 5, y - 10, z - 10);

            // If the main mesh was scaled, scale shadow too
            shadowMesh.scale.copy(mesh.scale);

            // Return a Group containing both? Or just add shadow to scene?
            // Returning a Group is safer for animation logic.
            const wrapper = new THREE.Group();
            wrapper.add(shadowMesh);
            wrapper.add(mesh);
            return wrapper;
        }

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
