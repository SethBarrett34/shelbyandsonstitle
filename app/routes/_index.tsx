import { Link } from "@remix-run/react";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section - maintains the original site's focus on buildings and property */}
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
            <h1 className="hero-title">Your Trusted Partner in Title Services</h1>
            <p className="hero-subtitle">
              Shelby & Sons Title Company provides reliable, professional title services 
              with a commitment to excellence and customer satisfaction.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="button button-primary">
                Get a Free Quote
              </Link>
              <Link to="/contact" className="button button-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner - similar to the original site's showcase section */}
      <section className="relative py-0">
        <div className="w-full h-96 overflow-hidden">
          <img 
            src="/images/building.jpg" 
            alt="Professional office building" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl font-heading font-bold mb-4">Professional Title Services</h2>
              <p className="text-xl max-w-2xl mx-auto">
                Providing exceptional title and escrow services for real estate transactions since 1985
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - modernized version of the original site's welcome area */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Welcome to Shelby & Sons Title Company</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="section-subtitle mx-auto">
              With over 35 years of experience, we provide the professional service and personal attention your transaction deserves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/images/office-interior.jpg" 
                alt="Our professional office" 
                className="rounded-lg shadow-lg w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
                }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Commitment to Excellence</h3>
              <p className="mb-4 text-neutral-600">
                At Shelby & Sons Title Company, we take pride in our reputation for providing professional, accurate, and timely title services. We understand that buying or selling property is one of the most significant financial decisions you'll make, and our team is dedicated to making the process smooth and stress-free.
              </p>
              <p className="mb-6 text-neutral-600">
                From title searches and examinations to closings and escrow services, we offer comprehensive solutions for all your real estate transaction needs. Our experienced team of professionals is committed to delivering exceptional service with meticulous attention to detail.
              </p>
              <Link to="/about" className="button button-primary">
                About Our Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - similar to the original site's services section but modernized */}
      <section className="section bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Title Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="section-subtitle mx-auto">
              We offer comprehensive title services to secure your real estate transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <img 
                src="/images/title-search.jpg" 
                alt="Title Search" 
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1554224155-8d04cb21ed6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Title Search & Examination</h3>
                <p className="text-neutral-600 mb-4">
                  Our thorough investigation of property records ensures a clear title and identifies any issues that could affect ownership.
                </p>
                <Link to="/services#title-search" className="text-primary font-medium hover:text-primary-light">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="/images/title-insurance.jpg" 
                alt="Title Insurance" 
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Title Insurance</h3>
                <p className="text-neutral-600 mb-4">
                  Protect your investment against future claims or potential undiscovered issues with our comprehensive title insurance policies.
                </p>
                <Link to="/services#title-insurance" className="text-primary font-medium hover:text-primary-light">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="/images/closing.jpg" 
                alt="Closing Services" 
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Closing Services</h3>
                <p className="text-neutral-600 mb-4">
                  Our professional team handles document preparation and transaction closings with meticulous attention to detail.
                </p>
                <Link to="/services#closing-services" className="text-primary font-medium hover:text-primary-light">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services" className="button button-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section - similar to the original's about us section, but with more visual appeal */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Professional Team</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="section-subtitle mx-auto">
              Meet the experienced professionals dedicated to serving your title needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="relative mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                <img 
                  src="/images/team-member-1.jpg" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
                  }}
                />
              </div>
              <h3 className="text-xl font-heading font-bold mb-1">John Shelby</h3>
              <p className="text-primary font-medium mb-3">President</p>
              <p className="text-neutral-600 mb-4">
                With over 30 years of experience in the title industry, John leads our team with expertise and dedication.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="relative mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                <img 
                  src="/images/team-member-2.jpg" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80';
                  }}
                />
              </div>
              <h3 className="text-xl font-heading font-bold mb-1">Sarah Shelby</h3>
              <p className="text-primary font-medium mb-3">Vice President</p>
              <p className="text-neutral-600 mb-4">
                Sarah's attention to detail and commitment to client satisfaction ensures smooth transactions.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="relative mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                <img 
                  src="/images/team-member-3.jpg" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
                  }}
                />
              </div>
              <h3 className="text-xl font-heading font-bold mb-1">Michael Shelby</h3>
              <p className="text-primary font-medium mb-3">Title Officer</p>
              <p className="text-neutral-600 mb-4">
                Michael's expertise in title research and examination ensures thorough and accurate title reports.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/about" className="button button-primary">
              Meet Our Entire Team
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - modernized from the original site */}
      <section className="section bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Client Testimonials</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="section-subtitle mx-auto">
              What our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-neutral-600 mb-6">
                "Shelby & Sons made our home buying process seamless and stress-free. Their team was professional and responsive throughout every step of the transaction."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden mr-4">
                  <img 
                    src="/images/testimonial-1.jpg" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80';
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-neutral-500 text-sm">Homeowner</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-neutral-600 mb-6">
                "As a real estate agent, I appreciate Shelby & Sons' attention to detail and commitment to meeting deadlines. They're my go-to recommendation for title services."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden mr-4">
                  <img 
                    src="/images/testimonial-2.jpg" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold">Michael Reynolds</p>
                  <p className="text-neutral-500 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-neutral-600 mb-6">
                "Their expertise in commercial property transactions saved us from potential complications. Shelby & Sons is a truly trustworthy partner for any real estate transaction."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden mr-4">
                  <img 
                    src="/images/testimonial-3.jpg" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold">David Chen</p>
                  <p className="text-neutral-500 text-sm">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - modernized from the original's location area */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="section-title">Visit Our Office</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-3">Office Hours</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-3">Contact Information</h3>
                <address className="not-italic text-neutral-600 mb-4">
                  <p className="mb-2">123 Main Street, Suite 300</p>
                  <p>Anytown, State 12345</p>
                </address>
                <p className="flex items-center mb-2 text-neutral-600">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 123-4567
                </p>
                <p className="flex items-center text-neutral-600">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@shelbyandsons.com
                </p>
              </div>
              
              <Link to="/contact" className="button button-primary">
                Contact Us
              </Link>
            </div>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Replace with actual Google Maps embed or image */}
              <img 
                src="/images/map.jpg" 
                alt="Office Location Map" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x400&maptype=roadmap&key=YOUR_API_KEY';
                  // Note: In a real implementation, you would use a valid Google Maps API key
                }}
              />
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
