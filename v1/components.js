const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      background: rgba(3, 7, 18, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      transition: all 0.3s ease;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5%;
      max-width: 1400px;
      margin: 0 auto;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      color: #fff;
      text-decoration: none;
      letter-spacing: -1px;
    }
    .logo span {
      color: #00d2ff;
    }
    nav {
      display: flex;
      gap: 2rem;
    }
    nav a {
      color: #ccd6f6;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      transition: color 0.3s ease;
      position: relative;
    }
    nav a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #00d2ff;
      transition: width 0.3s ease;
    }
    nav a:hover {
      color: #00d2ff;
    }
    nav a:hover::after {
      width: 100%;
    }
    .cta-btn {
      background: linear-gradient(45deg, #00d2ff, #3a7bd5);
      color: #fff;
      padding: 0.6rem 1.5rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 210, 255, 0.4);
      color: white;
    }
    .cta-btn::after {
      display: none;
    }
    
    .disclaimer-banner {
      background: #030712;
      color: #ef4444;
      text-align: center;
      padding: 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(239, 68, 68, 0.2);
    }
    @media (max-width: 768px) {
      nav { display: none; } /* Simplified for demo */
    }
  </style>
  <div class="disclaimer-banner">
    THIS IS A DEMO WEBSITE PREPARED BY MATTYJACKS.COM AND IS NOT AUTHORIZED BY ITXMEN OR STEPHEN NOLAN. This is a sales pitch site.
  </div>
  <header>
    <a href="index.html" class="logo">ITX<span>MEN</span></a>
    <nav>
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html" class="cta-btn">Book Strategy Call</a>
    </nav>
  </header>
`;

class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    }
}
customElements.define('site-header', SiteHeader);

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      background: #030712;
      color: #8892b0;
      padding: 4rem 5% 2rem;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    footer {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }
    h3 {
      color: #fff;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }
    p {
      line-height: 1.6;
    }
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    .footer-links a {
      color: #8892b0;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .footer-links a:hover {
      color: #00d2ff;
    }
    .bottom-bar {
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
      text-align: center;
      font-size: 0.9rem;
    }
    .warning-text {
      color: #ff4757;
      font-weight: bold;
      margin-top: 1rem;
      font-size: 0.8rem;
      text-transform: uppercase;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      color: #fff;
      text-decoration: none;
      letter-spacing: -1px;
      display: inline-block;
      margin-bottom: 1rem;
    }
    .logo span {
      color: #00d2ff;
    }
  </style>
  <footer>
    <div>
      <a href="index.html" class="logo">ITX<span>MEN</span></a>
      <p>Transforming SMBs with strategic IT leadership. We align your technology with your business goals for scalable growth.</p>
    </div>
    <div>
      <h3>Quick Links</h3>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="services.html">Fractional IT Leadership</a>
        <a href="contact.html">Contact Us</a>
      </div>
    </div>
    <div>
      <h3>Connect</h3>
      <p>Prepare for the next stage of growth. Reach out to Stephen Nolan and the team.</p>
    </div>
  </footer>
  <div class="bottom-bar">
    <p>&copy; 2026 ITXMEN Demo Site.</p>
    <div class="warning-text">
      DISCLAIMER: THIS IS A DEMO WEBSITE PREPARED BY MATTYJACKS.COM AND IS NOT AUTHORIZED BY ITXMEN OR STEPHEN NOLAN. This is a sales pitch site.
    </div>
  </div>
`;

class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}
customElements.define('site-footer', SiteFooter);
