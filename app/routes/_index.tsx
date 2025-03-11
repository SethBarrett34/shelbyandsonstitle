import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="title-large mb-6">Your Trusted Partner in Title Services</h1>
            <p className="text-lg md:text-xl mb-8">
              Shelby & Sons Title Company provides reliable, professional title services 
              for residential and commercial real estate transactions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="btn bg-white text-primary hover:bg-accent-dark">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">Our Title Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We offer comprehensive title services to secure your real estate transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Title Search & Examination" 
              description="Thorough investigation of property records to ensure clear title."
              icon="🔍"
              link="/services#title-search"
            />
            
            <ServiceCard 
              title="Title Insurance" 
              description="Protection against future claims or potential undiscovered issues."
              icon="🛡️"
              link="/services#title-insurance"
            />
            
            <ServiceCard 
              title="Closing Services" 
              description="Professional handling of document preparation and transaction closing."
              icon="📝"
              link="/services#closing-services"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-medium mb-6">Why Choose Shelby & Sons?</h2>
              <div className="space-y-6">
                <FeatureItem 
                  title="Experienced Professionals" 
                  description="Our team brings decades of experience in title services."
                />
                
                <FeatureItem 
                  title="Personalized Service" 
                  description="We tailor our approach to meet your specific needs."
                />
                
                <FeatureItem 
                  title="Efficient Process" 
                  description="Streamlined procedures to save you time and hassle."
                />
                
                <FeatureItem 
                  title="Transparent Communication" 
                  description="Clear, regular updates throughout the entire process."
                />
                
                <Link to="/about" className="inline-block mt-4 text-primary font-medium hover:text-primary-light">
                  Learn more about us →
                </Link>
              </div>
            </div>
            
            <div className="bg-accent-dark rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="title-small mb-2">Request a Consultation</h3>
                <p className="text-gray-600">
                  Have questions about your title needs? We're here to help!
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full text-center"
                >
                  Contact Us Today
                </Link>
                
                <div className="mt-6 text-center text-gray-600">
                  <p>Or call us at</p>
                  <p className="text-primary text-xl font-bold">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-accent-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We pride ourselves on delivering exceptional service to every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Shelby & Sons made our home buying process so much easier. Their team was professional and responsive through every step."
              author="Sarah Johnson"
              role="Homeowner"
            />
            
            <TestimonialCard 
              quote="As a real estate agent, I appreciate their attention to detail and commitment to meeting deadlines. Highly recommended!"
              author="Michael Reynolds"
              role="Real Estate Agent"
            />
            
            <TestimonialCard 
              quote="Their expertise in commercial property transactions saved us from potential complications. A trustworthy partner."
              author="David Chen"
              role="Business Owner"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="title-medium mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss your title service needs or request a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn bg-white text-primary hover:bg-accent-dark">
              Get a Free Quote
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="card hover:shadow-lg transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-primary font-medium hover:text-primary-light">
        Learn more →
      </Link>
    </div>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div>
      <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="card h-full flex flex-col">
      <div className="text-4xl text-primary mb-4">"</div>
      <p className="text-gray-600 flex-grow mb-4">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}
