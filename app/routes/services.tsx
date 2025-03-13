import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import AnimatedSection from "~/components/ui/AnimatedSection";
import SectionHeader from "~/components/ui/SectionHeader";

export default function Services() {
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
        
        <div className="container-custom py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title-large text-white mb-4">Our Title Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive title solutions for every real estate transaction
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Navigation */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#title-search" className="px-4 py-2 bg-accent hover:bg-accent-highlight rounded-lg text-primary font-medium transition duration-200">
              Title Search
            </a>
            <a href="#title-insurance" className="px-4 py-2 bg-accent hover:bg-accent-highlight rounded-lg text-primary font-medium transition duration-200">
              Title Insurance
            </a>
            <a href="#closing-services" className="px-4 py-2 bg-accent hover:bg-accent-highlight rounded-lg text-primary font-medium transition duration-200">
              Closing Services
            </a>
            <a href="#escrow-services" className="px-4 py-2 bg-accent hover:bg-accent-highlight rounded-lg text-primary font-medium transition duration-200">
              Escrow Services
            </a>
            <a href="#additional-services" className="px-4 py-2 bg-accent hover:bg-accent-highlight rounded-lg text-primary font-medium transition duration-200">
              Additional Services
            </a>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <AnimatedSection>
        <section id="title-search" className="section bg-accent pt-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader
                  title="Title Search & Examination"
                  subtitle="A thorough investigation to ensure a clear title and protect your investment."
                />
                
                <p className="mb-6 text-neutral-600">
                  Our comprehensive title search and examination process is designed to identify any issues that could affect your ownership rights. We conduct a meticulous review of public records to verify the property's legal status.
                </p>
                
                <div className="space-y-4 mb-8">
                  <ServiceFeature text="Complete investigation of property records" />
                  <ServiceFeature text="Identify liens, judgments, and encumbrances" />
                  <ServiceFeature text="Research historical property ownership" />
                  <ServiceFeature text="Verify boundary and survey information" />
                  <ServiceFeature text="Detect potential title defects" />
                </div>
                
                <Link to="/quote" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Document research" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <section id="title-insurance" className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Insurance protection" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <SectionHeader
                  title="Title Insurance"
                  subtitle="Protection for homeowners and lenders against future claims or potential undiscovered issues."
                />
                
                <p className="mb-6 text-neutral-600">
                  Title insurance provides essential protection against financial loss due to defects in the title that may not be discovered during the initial title search. We offer both owner's and lender's policies to ensure comprehensive coverage.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold mb-4">We offer two types of title insurance:</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-accent p-6 rounded-lg">
                      <h4 className="text-lg font-heading font-bold mb-2">Owner's Title Insurance</h4>
                      <p className="text-neutral-600">
                        Protects the homebuyer against issues with the title that may arise after the purchase. This one-time premium provides coverage for as long as you or your heirs own the property.
                      </p>
                    </div>
                    
                    <div className="bg-accent p-6 rounded-lg">
                      <h4 className="text-lg font-heading font-bold mb-2">Lender's Title Insurance</h4>
                      <p className="text-neutral-600">
                        Required by most mortgage lenders to protect their investment. This policy ensures the lender has a valid, enforceable lien on the property.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/quote" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <section id="closing-services" className="section bg-accent">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader
                  title="Closing Services"
                  subtitle="Expert handling of the entire closing process, ensuring a smooth transaction."
                />
                
                <p className="mb-6 text-neutral-600">
                  Our professional closing services facilitate the final steps of your real estate transaction. We handle all the necessary documentation, coordinate between parties, and ensure a seamless transfer of ownership.
                </p>
                
                <div className="space-y-4 mb-8">
                  <ServiceFeature text="Document preparation and review" />
                  <ServiceFeature text="Coordination with all parties involved" />
                  <ServiceFeature text="Calculation of closing costs and prorations" />
                  <ServiceFeature text="Collection and disbursement of funds" />
                  <ServiceFeature text="Recording of deeds and documents" />
                  <ServiceFeature text="Final title policy issuance" />
                </div>
                
                <Link to="/quote" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                  alt="Closing a real estate deal" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <section id="escrow-services" className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Secure transactions" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <SectionHeader
                  title="Escrow Services"
                  subtitle="Secure handling of funds and documents throughout the transaction process."
                />
                
                <p className="mb-6 text-neutral-600">
                  Our escrow services provide a neutral third-party to handle the exchange of money and documents during your real estate transaction. We ensure that all conditions of the sale are met before funds are disbursed.
                </p>
                
                <div className="space-y-4 mb-8">
                  <ServiceFeature text="Secure holding of earnest money deposits" />
                  <ServiceFeature text="Collection and disbursement of funds" />
                  <ServiceFeature text="Management of document exchange" />
                  <ServiceFeature text="Ensuring all closing conditions are met" />
                  <ServiceFeature text="Detailed final statements and accounting" />
                </div>
                
                <Link to="/quote" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <section id="additional-services" className="section bg-accent">
          <div className="container-custom">
            <SectionHeader
              title="Additional Services"
              subtitle="Comprehensive solutions for all your real estate transaction needs."
              center={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <AnimatedSection delay={100}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-highlight text-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Document Preparation</h3>
                  <p className="text-neutral-600">
                    Professional preparation of deeds, mortgages, and other legal documents required for your transaction.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-highlight text-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">1031 Exchange Services</h3>
                  <p className="text-neutral-600">
                    Qualified intermediary services for tax-deferred exchanges of investment properties.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-highlight text-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Construction Disbursing</h3>
                  <p className="text-neutral-600">
                    Management of funds disbursement for construction projects, ensuring proper allocation and usage.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-highlight text-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Property Surveys</h3>
                  <p className="text-neutral-600">
                    Coordination of property surveys to establish boundaries, identify improvements, and ensure accuracy.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={500}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-highlight text-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Wire Transfer Services</h3>
                  <p className="text-neutral-600">
                    Secure electronic transfer of funds for transactions, ensuring timely and safe financial exchanges.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={600}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-highlight text-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Title Consultation</h3>
                  <p className="text-neutral-600">
                    Expert advice on title matters, helping you navigate complex issues and make informed decisions.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16 bg-primary text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="title-medium mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6">
                  Contact us today to discuss your title service needs or request a free quote.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/quote" className="btn bg-white text-primary hover:bg-accent-highlight">
                    Get a Free Quote
                  </Link>
                  <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="md:text-right">
                <p className="text-white/80 mb-2">Have questions? Call us:</p>
                <p className="text-2xl md:text-3xl font-bold">(555) 123-4567</p>
                <p className="text-white/80 mt-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
}

interface ServiceFeatureProps {
  text: string;
}

function ServiceFeature({ text }: ServiceFeatureProps) {
  return (
    <div className="flex items-center">
      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-neutral-700">{text}</span>
    </div>
  );
}
