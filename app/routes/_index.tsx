import { Link } from "@remix-run/react";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video"
          >
            <source src="/videos/montana-driving.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="logo-title-container">
              <img 
                src="/images/Asset-2shelby-sons-title-company.svg" 
                alt="Shelby & Sons Title Company Logo" 
                className="hero-logo"
              />
              <h1 className="hero-title">Montana LLC & Vehicle Registration Specialists</h1>
            </div>
            <p className="hero-subtitle">
              Save on taxes by registering your vehicles in Montana and forming an LLC with Shelby & Sons Title Company.
            </p>
            <div className="button-group">
              <Link to="/services/llc-formation" className="primary-button">
                Form Your LLC
              </Link>
              <Link to="/services/vehicle-registration" className="outline-button">
                Register Your Vehicle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner with Benefits */}
      <section className="benefits-banner">
        <img 
          src="/images/montana-landscape.jpg" 
          alt="Montana landscape with mountains and road" 
          className="banner-image"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
          }}
        />
        <div className="overlay">
          <div className="benefits-content">
            <h2 className="benefits-title">Montana Tax Advantages</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="benefit-label">No Sales Tax</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="benefit-label">Lower Insurance</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                  </svg>
                </div>
                <span className="benefit-label">Permanent Registration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <div className="services-title-container">
            <h2 className="services-title">Our Specialized Services</h2>
            <div className="services-divider"></div>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="card-image-container">
                <img 
                  src="/images/llc-formation.jpg" 
                  alt="LLC Formation" 
                  className="card-image"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
                  }}
                />
                <div className="popular-badge">
                  Popular
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Montana LLC Formation</h3>
                <p className="card-description">
                  Form your Montana LLC quickly and efficiently. We handle all paperwork, state filings, and provide a registered agent service.
                </p>
                <Link to="/services/llc-formation" className="card-button">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="card-image-container">
                <img 
                  src="/images/vehicle-registration.jpg" 
                  alt="Vehicle Registration" 
                  className="card-image"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1563720223523-491761d3c6c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
                  }}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">Vehicle Registration</h3>
                <p className="card-description">
                  Register your vehicles in Montana to take advantage of no sales tax, lower insurance rates, and permanent registration options.
                </p>
                <Link to="/services/vehicle-registration" className="card-button">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="card-image-container">
                <img 
                  src="/images/rv-registration.jpg" 
                  alt="RV Registration" 
                  className="card-image"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
                  }}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">RV & Motorhome Registration</h3>
                <p className="card-description">
                  Substantial savings on luxury RVs and motorhomes through Montana registration. We handle all documentation for a smooth process.
                </p>
                <Link to="/services/rv-registration" className="card-button">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-container">
            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className="star-icon" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="testimonial-text">
              "Setting up my Montana LLC for my vehicle fleet was a breeze with Shelby & Sons. Their knowledge of Montana's business laws and vehicle registration requirements saved me time and money. Highly recommended!"
            </p>
            <div className="testimonial-author">
              <div className="author-image-container">
                <img 
                  src="/images/testimonial-2.jpg" 
                  alt="Client" 
                  className="author-image"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
                  }}
                />
              </div>
              <div className="author-info">
                <p className="author-name">Michael Reynolds</p>
                <p className="author-title">Business Owner</p>
              </div>
            </div>
            <div>
              <Link to="/testimonials" className="more-link">
                Read More Success Stories
                <svg className="more-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Take Advantage of Montana Benefits?</h2>
          <p className="cta-text">
            Contact us today to discuss how our Montana LLC formation and vehicle registration services can save you money.
          </p>
          <div className="button-container">
            <Link to="/services/llc-formation" className="primary-button">
              Form Your Montana LLC
            </Link>
            <Link to="/services/vehicle-registration" className="outline-button">
              Register Your Vehicle
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
