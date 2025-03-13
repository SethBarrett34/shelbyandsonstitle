import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Services() {
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
          <div className="hero-content text-center">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Where the rubber meets the road.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              The cost of starting an LLC in Montana is competitive, with affordable state filing fees and reasonable ongoing maintenance costs. We provide transparent pricing for our services, so you know exactly what to expect when you apply for an LLC in Montana.
            </p>
            <div className="bg-primary-light text-white p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-heading font-bold mb-3">Fleet Discounts</h2>
              <p className="text-lg">Shelby and Sons offers fleet rates for our volume-based clients.</p>
            </div>
            <div className="text-center mb-8">
              <p className="text-2xl font-bold text-primary">(406) 616-2776</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Categories Navigation */}
      <section className="py-4 bg-accent sticky top-20 z-30 shadow-sm border-y border-neutral-200">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#formation" className="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-lg font-medium transition-colors duration-200 shadow-sm">
              LLC Formation
            </a>
            <a href="#registration" className="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-lg font-medium transition-colors duration-200 shadow-sm">
              Vehicle Registration
            </a>
            <a href="#additional" className="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-lg font-medium transition-colors duration-200 shadow-sm">
              Additional Services
            </a>
            <a href="#contact" className="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-lg font-medium transition-colors duration-200 shadow-sm">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      {/* LLC Formation */}
      <section id="formation" className="section bg-accent">
        <div className="container">
          <h2 className="section-title text-center">Montana LLC Formation</h2>
          
          <div className="max-w-md mx-auto">
            <div className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-heading font-bold">Montana LLC Formation</h3>
                <div className="text-2xl font-bold text-primary">$525</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                <ServiceFeature text="Approximately 36 to 48 hours" />
                <ServiceFeature text="All Montana state fees included" />
                <ServiceFeature text="2hr rush available (on order form)" />
                <ServiceFeature text="Includes Registered Agent Service" />
                <ServiceFeature text="Includes mail forwarding" />
              </ul>
              
              <p className="italic text-neutral-600 mb-6">This is all you need to get started and is preselected during the signup process.</p>
              
              <a href="#" className="button button-primary w-full block text-center">Purchase LLC</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vehicle Registration */}
      <section id="registration" className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center">Vehicle Registration Services</h2>
          <p className="section-subtitle text-center mx-auto mb-12">Complete vehicle registration services for your Montana LLC</p>
          
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="1st Vehicle Registration Service Fee" 
              price="$350"
              features={[
                "First vehicle service fee",
                "Standard processing 10 days (approx)",
                "Montana State fees NOT included",
                "Clock starts when we receive original documents",
                "Rush processing available on order form"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="2nd or 3rd Vehicle Registration Service Fee" 
              price="$250"
              features={[
                "Vehicles registered after the first are at the discounted rate",
                "Montana state fees NOT included"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Vanity Plates" 
              price="$150"
              features={[
                "Montana State fees NOT included",
                "Vanity plates are personalized license plates with personalized sequences of letters and/or numbers"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Temporary Plates" 
              price="$75"
              features={[
                "Rush orders available for an additional $125",
                "Allows the vehicle to be legally driven while the permanent license plate is being processed",
                "Copies of original documents required"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Rush Registration/Plates and Title" 
              price="$450"
              features={[
                "In addition to service fee",
                "Approx 72hrs or 3 business days plus priority shipping for plates and registration",
                "3 to 4 weeks for title processing"
              ]}
              buttonText="Purchase"
              highlightService={true}
            />
            
            <ServiceCard 
              title="Rush Registration and Plates" 
              price="$300"
              features={[
                "In addition to service fee",
                "Approx 72hrs or 3 business days plus priority shipping for plates and registration"
              ]}
              buttonText="Purchase"
            />
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section id="additional" className="section bg-accent">
        <div className="container">
          <h2 className="section-title text-center">Additional Services</h2>
          <p className="section-subtitle text-center mx-auto mb-12">Comprehensive support for your Montana LLC and vehicle registration needs</p>
          
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Change of Registered Agent" 
              price="$300"
              features={[
                "Need to change your registered agent?",
                "Choose Shelby & Sons as your Registered Agent"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Duplicate Title" 
              price="$85"
              features={[
                "Is your current title damaged?",
                "Lost or Stolen Title?"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Rush Title" 
              price="$300"
              features={[
                "In addition to service fee",
                "Does not Include registration and plates",
                "3 to 4 weeks for title processing"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="EIN - Employer Identification Number" 
              price="$85"
              features={[
                "IRS EIN available upon request",
                "Banking purposes",
                "Financing purposes"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Break/Bond Title" 
              price="$600"
              features={[
                "State registration not included",
                "Montana requires a lost title bond to register a vehicle, boat, RV, mobile home, or trailer if the title is not available"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Foreign Vehicle Title Registration" 
              price="$600"
              features={[
                "Registration of foreign vehicle",
                "For vehicles not titled in the United States",
                "Montana State fees NOT included"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Annual Business Maintenance" 
              price="$225"
              features={[
                "Includes Continuation of Registered Agent service",
                "Annual reports to the Montana Secretary of State",
                "Due every January"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="Operating Agreement" 
              price="$225"
              features={[
                "Used for percentage of ownership",
                "Sometimes needed for financing"
              ]}
              buttonText="Purchase"
            />
            
            <ServiceCard 
              title="LLC Corporate Book Package" 
              price="$375"
              features={[
                "Includes Operating Agreement",
                "Includes EIN",
                "Includes Corporate Book & Seal"
              ]}
              buttonText="Purchase"
              highlightService={true}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <div className="card max-w-3xl mx-auto bg-accent-highlight">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Contact Us</h2>
            
            <p className="mb-6">
              Contact us to learn more about how we can assist you with:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Forming an LLC in Montana</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana LLC filing requirements</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana LLC articles of organization</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana foreign LLC registration</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana registered agent services</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana LLC fees and costs</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana registration of a kit car</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana vehicle LLC registration</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoiding sales tax on car purchases</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Montana ATV registration for non-residents</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Call us today</p>
              <p className="text-2xl font-bold text-primary mb-6">(406) 616-2776</p>
              <Link to="/contact" className="button button-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Form Your Montana LLC?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Get started today with our streamlined Montana LLC formation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#formation" className="button bg-white text-primary hover:bg-accent-highlight">
              Form Your LLC Now
            </a>
            <Link to="/contact" className="button button-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ServiceFeatureProps {
  text: string;
}

function ServiceFeature({ text }: ServiceFeatureProps) {
  return (
    <div className="flex items-start">
      <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span>{text}</span>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlightService?: boolean;
}

function ServiceCard({ title, price, features, buttonText, highlightService = false }: ServiceCardProps) {
  return (
    <div className={`card h-full flex flex-col ${highlightService ? 'border-primary border-2' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-heading font-bold">{title}</h3>
        <div className="text-2xl font-bold text-primary">{price}</div>
      </div>
      
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <ServiceFeature key={index} text={feature} />
        ))}
      </ul>
      
      <a href="#" className={`button ${highlightService ? 'button-primary' : 'bg-accent hover:bg-accent-highlight text-primary'} w-full block text-center mt-auto`}>
        {buttonText}
      </a>
    </div>
  );
}
