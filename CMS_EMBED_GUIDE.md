# CMS Embed Guide

This guide explains how to add the **Glass Testimonial Card** to your Wix, Squarespace, or WordPress site.

## 1. Quick Start Code

Copy the following code block. You will paste this into your CMS "Custom Code" or "Embed HTML" section.

```html
<!-- Import the Component (Place this once per page, or in the footer) -->
<script>
class GlassTestimonialCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'number', 'text', 'link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'Design';
    const number = this.getAttribute('number') || '01';
    const text = this.getAttribute('text') || 'Create stunning, modern interfaces that captivate users with depth and clarity.';
    const link = this.getAttribute('link') || '#';

    const style = `
      <style>
        :host {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          --text-color: #fff;
          --card-bg: rgba(255, 255, 255, 0.1);
          --card-border: rgba(255, 255, 255, 0.5);
        }

        .card {
          position: relative;
          width: 280px;
          height: 400px;
          margin: 30px;
          box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
          border-radius: 15px;
          background: var(--card-bg);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid var(--card-border);
          border-left: 1px solid var(--card-border);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          transition: transform 0.1s;
          /* Ensure font inherited or set */
          color: var(--text-color);
        }

        .content {
          padding: 20px;
          text-align: center;
          transform: translateY(100px);
          opacity: 0;
          transition: 0.5s;
        }

        .card:hover .content {
          transform: translateY(0px);
          opacity: 1;
        }

        .content h2 {
          position: absolute;
          top: -80px;
          right: 30px;
          font-size: 8em;
          color: rgba(255, 255, 255, 0.05);
          pointer-events: none;
          margin: 0;
        }

        .content h3 {
          font-size: 1.8em;
          color: var(--text-color);
          z-index: 1;
          margin: 0 0 5px 0;
        }

        .content p {
          font-size: 1em;
          color: var(--text-color);
          font-weight: 300;
          margin: 10px 0 15px 0;
          line-height: 1.4;
        }

        .content a {
          position: relative;
          display: inline-block;
          padding: 8px 20px;
          margin-top: 15px;
          background: var(--text-color);
          color: #000;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 500;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      </style>
    `;

    this.shadowRoot.innerHTML = `
      ${style}
      <div class="card">
        <div class="content">
          <h2>${number}</h2>
          <h3>${name}</h3>
          <p>${text}</p>
          <a href="${link}">Read More</a>
        </div>
      </div>
    `;

    this.initTilt();
  }

  initTilt() {
    const card = this.shadowRoot.querySelector('.card');
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -20;
      const rotateY = ((x - centerX) / centerX) * 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }
}

customElements.define('glass-testimonial-card', GlassTestimonialCard);
</script>

<!-- Add the Font (Place in Header if possible) -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 2. Using the Card

Wherever you want a card to appear, paste this HTML code:

```html
<glass-testimonial-card 
  name="Your Name" 
  number="01" 
  text="Your testimonial text goes here." 
  link="#"
></glass-testimonial-card>
```

> [!IMPORTANT]
> **Background Required**: The "Glass" effect relies on transparency. If your page background is white, you won't see the effect well. Use a dark background or one with colors/images behind the card.

## 3. Customization

You can change the text by editing the attributes:
- `name`: The title/name on the card.
- `number`: The large background number (e.g., "01").
- `text`: The main paragraph.
- `link`: URL for the "Read More" button.
