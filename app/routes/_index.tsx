import { Link } from "@remix-run/react";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-pattern">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Your Trusted Partner in Real Estate Title Services</h1>
            <p className="hero-subtitle">
              Shelby & Sons Title Company provides reliable, professional title services 
              with decades of experience and a commitment to excellence.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="button button-primary">
                Get a Free Quote
              </Link>
              <Link to="/services" className="button button-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-4 border-b border-neutral-200">
        <div className="container">
          <div className="grid grid-4 gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">30+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">5,000+ Transactions</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Same-Day Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-accent">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Our Title Services</h2>
            <p className="section-subtitle mx-auto">
              We offer comprehensive title services to secure your real estate transactions.
            </p>
          </div>
          
          <div className="grid grid-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-accent-highlight rounded-lg text-primary flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Title Search</h3>
              <p className="text-neutral-600 mb-4">
                Thorough investigation of property records to ensure clear title.
              </p>
              <Link to="/services#title-search" className="text-primary font-medium hover:text-primary-light">
                Learn more →
              </Link>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-accent-highlight rounded-lg text-primary flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Title Insurance</h3>
              <p className="text-neutral-600 mb-4">
                Protection against future claims or potential undiscovered issues.
              </p>
              <Link to="/services#title-insurance" className="text-primary font-medium hover:text-primary-light">
                Learn more →
              </Link>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-accent-highlight rounded-lg text-primary flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Closing Services</h3>
              <p className="text-neutral-600 mb-4">
                Professional handling of document preparation and transaction closing.
              </p>
              <Link to="/services#closing-services" className="text-primary font-medium hover:text-primary-light">
                Learn more →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services" className="button button-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="section-title">Why Choose Shelby & Sons?</h2>
              <p className="section-subtitle">
                Our commitment to excellence and personalized service sets us apart in the title industry.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-2">Experienced Professionals</h3>
                    <p className="text-neutral-600">
                      Our team brings decades of combined experience in title services and real estate law.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-2">Personalized Service</h3>
                    <p className="text-neutral-600">
                      We tailor our approach to meet your specific needs, ensuring you feel valued and understood.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-2">Transparent Process</h3>
                    <p className="text-neutral-600">
                      We keep you informed at every step, with clear communication and no hidden fees.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/about" className="text-primary font-medium hover:text-primary-light inline-flex items-center">
                  Learn more about our team
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="card bg-accent-highlight">
                <h3 className="text-xl font-heading font-bold mb-4">Request a Consultation</h3>
                <p className="mb-6">
                  Have questions about your title needs? Our experts are here to help. Schedule a consultation or get a custom quote.
                </p>
                
                <div className="space-y-4">
                  <Link to="/quote" className="button button-primary w-full block text-center">
                    Get a Free Quote
                  </Link>
                  
                  <Link to="/contact" className="button button-outline border-primary text-primary hover:bg-primary hover:text-white w-full block text-center">
                    Contact Us
                  </Link>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="font-medium mb-1">Need immediate assistance?</p>
                  <p className="text-primary text-xl font-bold">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-accent">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              We pride ourselves on delivering exceptional service to every client.
            </p>
          </div>
          
          <div className="grid grid-3 gap-6">
            <div className="card">
              <p className="italic text-neutral-600 mb-4">
                "Shelby & Sons made our home buying process smooth and stress-free. Their team was professional and responsive throughout the entire process."
              </p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-4 h-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold">Sarah Johnson</p>
              <p className="text-neutral-500 text-sm">Homeowner</p>
            </div>
            
            <div className="card">
              <p className="italic text-neutral-600 mb-4">
                "As a real estate agent, I appreciate their attention to detail and commitment to meeting deadlines. They're my go-to title company."
              </p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-4 h-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold">Michael Reynolds</p>
              <p className="text-neutral-500 text-sm">Real Estate Agent</p>
            </div>
            
            <div className="card">
              <p className="italic text-neutral-600 mb-4">
                "Their expertise in commercial property transactions saved us from potential complications. A truly trustworthy partner."
              </p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-4 h-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold">David Chen</p>
              <p className="text-neutral-500 text-sm">Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss your title service needs or request a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="button bg-white text-primary hover:bg-accent-highlight">
              Get a Free Quote
            </Link>
            <Link to="/contact" className="button button-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
