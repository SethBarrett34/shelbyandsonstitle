import { Link } from "@remix-run/react";
import Layout from "../components/Layout";
import AnimatedSection from "../components/ui/AnimatedSection";
import SectionHeader from "../components/ui/SectionHeader";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container-custom py-20 md:py-28">
          <div className="md:flex items-center">
            <div className="md:w-3/5 mb-10 md:mb-0 z-10 md:pr-16">
              <h1 className="title-large text-white mb-6 leading-tight">
                Your Trusted Partner in Real Estate Title Services
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Shelby & Sons Title Company provides reliable, professional title services 
                with decades of experience and a commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn bg-white text-primary hover:bg-accent-highlight">
                  Get a Free Quote
                </Link>
                <Link to="/services" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-2/5 relative">
              <div className="relative pl-8 pt-8">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                  alt="Modern office building" 
                  className="w-full h-auto relative z-10 rounded-lg shadow-elevated"
                />
                <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-b border-neutral-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <TrustBadge 
              label="30+ Years Experience" 
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } 
            />
            <TrustBadge 
              label="5,000+ Transactions" 
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } 
            />
            <TrustBadge 
              label="Licensed & Insured" 
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              } 
            />
            <TrustBadge 
              label="Same-Day Response" 
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              } 
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection>
        <section className="section bg-accent">
          <div className="container-custom">
            <SectionHeader
              title="Our Comprehensive Title Services"
              subtitle="We offer a complete range of title services to secure your real estate transactions and give you peace of mind."
              center={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={100}>
                <ServiceCard 
                  title="Title Search & Examination" 
                  description="Our thorough investigation of property records ensures a clear title and identifies any issues that could affect ownership."
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                  link="/services#title-search"
                />
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <ServiceCard 
                  title="Title Insurance" 
                  description="Protect your investment against future claims or undiscovered issues with our comprehensive title insurance policies."
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  }
                  link="/services#title-insurance"
                />
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <ServiceCard 
                  title="Closing Services" 
                  description="Experience a smooth, stress-free closing process with our expert document preparation and transaction closing services."
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                  link="/services#closing-services"
                />
              </AnimatedSection>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services" className="btn btn-primary">
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection>
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Why Choose Shelby & Sons?"
                  subtitle="Our commitment to excellence and personalized service sets us apart in the title industry."
                />
                
                <div className="space-y-6">
                  <AnimatedSection delay={100}>
                    <FeatureItem 
                      title="Experienced Professionals" 
                      description="Our team brings decades of combined experience in title services and real estate law."
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      }
                    />
                  </AnimatedSection>
                  
                  <AnimatedSection delay={200}>
                    <FeatureItem 
                      title="Personalized Service" 
                      description="We tailor our approach to meet your specific needs, ensuring you feel valued and understood."
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      }
                    />
                  </AnimatedSection>
                  
                  <AnimatedSection delay={300}>
                    <FeatureItem 
                      title="Transparent Process" 
                      description="We keep you informed at every step, with clear communication and no hidden fees."
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      }
                    />
                  </AnimatedSection>
                  
                  <AnimatedSection delay={400}>
                    <FeatureItem 
                      title="Technology-Driven" 
                      description="Our modern systems and digital tools make transactions faster, safer, and more efficient."
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                    />
                  </AnimatedSection>
                  
                  <div className="pt-4">
                    <Link to="/about" className="text-primary font-medium hover:text-primary-light inline-flex items-center transition duration-200">
                      Learn more about our team
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              <AnimatedSection delay={200} className="lg:pl-12">
                <div className="bg-accent-dark rounded-xl p-8 shadow-card">
                  <h3 className="title-small mb-6">Request a Consultation</h3>
                  <p className="mb-6 text-neutral-600">
                    Have questions about your title needs? Our experts are here to help. Schedule a consultation or get a custom quote.
                  </p>
                  
                  <div className="space-y-4">
                    <Link 
                      to="/quote" 
                      className="btn btn-primary w-full text-center"
                    >
                      Get a Free Quote
                    </Link>
                    
                    <Link 
                      to="/contact" 
                      className="btn btn-outline w-full text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-neutral-600 font-medium">Need immediate assistance?</p>
                    <p className="text-primary text-xl font-bold">(555) 123-4567</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="section bg-accent-dark">
          <div className="container-custom">
            <SectionHeader
              title="What Our Clients Say"
              subtitle="We pride ourselves on delivering exceptional service to every client."
              center={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={100}>
                <TestimonialCard 
                  quote="Shelby & Sons made our home buying process smooth and stress-free. Their team was professional and responsive throughout the entire process."
                  author="Sarah Johnson"
                  role="Homeowner"
                  rating={5}
                />
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <TestimonialCard 
                  quote="As a real estate agent, I appreciate their attention to detail and commitment to meeting deadlines. They're my go-to title company."
                  author="Michael Reynolds"
                  role="Real Estate Agent"
                  rating={5}
                />
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <TestimonialCard 
                  quote="Their expertise in commercial property transactions saved us from potential complications. A truly trustworthy partner."
                  author="David Chen"
                  role="Business Owner"
                  rating={5}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16 bg-primary text-white text-center">
          <div className="container-custom">
            <h2 className="title-medium mb-6">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact us today to discuss your title service needs or request a free quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/quote" className="btn bg-white text-primary hover:bg-accent-highlight">
                Get a Free Quote
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
}

interface TrustBadgeProps {
  label: string;
  icon: React.ReactNode;
}

function TrustBadge({ label, icon }: TrustBadgeProps) {
  return (
    <div className="flex items-center justify-center md:justify-start text-center md:text-left">
      <div className="text-primary mr-3">
        {icon}
      </div>
      <span className="font-medium text-sm md:text-base text-neutral-700">{label}</span>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="feature-card h-full flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-accent-highlight text-primary flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-5 flex-grow">{description}</p>
      <Link to={link} className="text-primary font-medium hover:text-primary-light inline-flex items-center mt-auto transition duration-200">
        Learn more
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureItem({ title, description, icon }: FeatureItemProps) {
  return (
    <div className="flex items-start">
      <div className="service-icon">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-heading font-bold mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <div className="testimonial-card h-full flex flex-col">
      <div className="flex-grow">
        <p className="text-neutral-600 mb-6 italic">{quote}</p>
      </div>
      <div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-neutral-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="font-bold">{author}</p>
        <p className="text-neutral-500 text-sm">{role}</p>
      </div>
    </div>
  );
}
