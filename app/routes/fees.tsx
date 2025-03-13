import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Fees() {
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
            <h1 className="hero-title">Services & Fees</h1>
            <p className="hero-subtitle">Where the rubber meets the road.</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-lg mb-6">
              The cost of starting an LLC in Montana is competitive, with affordable state filing fees and reasonable ongoing maintenance costs. We provide transparent pricing for our services, so you know exactly what to expect when you apply for an LLC in Montana.
            </p>
            
            <div className="bg-accent rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-heading font-bold mb-2">Fleet Discounts</h2>
              <p className="mb-4">Shelby and Sons offers fleet rates for our volume-based clients.</p>
              <p className="text-primary text-xl font-bold">(406) 616-2776</p>
            </div>
          </div>
          
          {/* Services & Fees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Montana LLC Formation */}
            <ServiceCard
              title="Montana LLC Formation"
              price="$525"
              details={[
                "Approximately 36 to 48 hours",
                "All Montana state fees included.",
                "2hr rush available (on order form).",
                "Includes Registered Agent Service.",
                "Includes mail forwarding.",
                "This is all you need to get started and is preselected during the signup process."
              ]}
              purchaseText="LLC"
            />
            
            {/* 1st Vehicle Registration */}
            <ServiceCard
              title="1st Vehicle Registration Service Fee"
              price="$350"
              details={[
                "First vehicle service fee.",
                "Standard processing 10 days (approx).",
                "Montana State fees NOT included.",
                "Clock starts when we receive original documents.",
                "Rush processing available on order form."
              ]}
              purchaseText="Purchase"
            />
            
            {/* 2nd or 3rd Vehicle */}
            <ServiceCard
              title="2nd or 3rd Vehicle Registration Service Fee"
              price="$250"
              details={[
                "Vehicles registered after the first are at the discounted rate.",
                "Montana state fees NOT included."
              ]}
              purchaseText="Purchase"
            />
            
            {/* Vanity Plates */}
            <ServiceCard
              title="Vanity Plates"
              price="$150"
              details={[
                "Montana State fees NOT included.",
                "Vanity plates are personalized license plates with personalized sequences of letters and/or numbers."
              ]}
              purchaseText="Purchase"
            />
            
            {/* Temporary Plates */}
            <ServiceCard
              title="Temporary Plates"
              price="$75"
              details={[
                "Rush orders available for an additional $125.",
                "Allows the vehicle to be legally driven while the permanent license plate is being processed.",
                "Copies of original documents required."
              ]}
              purchaseText="Purchase"
            />
            
            {/* Rush Registration/Plates and Title */}
            <ServiceCard
              title="Rush Registration/Plates and Title"
              price="$450"
              details={[
                "In addition to service fee",
                "Approx 72hrs or 3 business days plus priority shipping for plates and registration",
                "3 to 4 weeks for title processing"
              ]}
              purchaseText="Purchase"
            />
            
            {/* Change of Registered Agent */}
            <ServiceCard
              title="Change of Registered Agent"
              price="$300"
              details={[
                "Need to change your registered agent?",
                "Choose Shelby & Sons as your Registered Agent."
              ]}
              purchaseText="Purchase"
            />
            
            {/* Rush Registration and Plates */}
            <ServiceCard
              title="Rush Registration and Plates"
              price="$300"
              details={[
                "In addition to service fee",
                "Approx 72hrs or 3 business days plus priority shipping for plates and registration"
              ]}
              purchaseText="Purchase"
            />
            
            {/* Duplicate Title */}
            <ServiceCard
              title="Duplicate Title"
              price="$85"
              details={[
                "Is your current title damaged?",
                "Lost or Stolen Title?"
              ]}
              purchaseText="Purchase"
            />
            
            {/* Rush Title */}
            <ServiceCard
              title="Rush Title"
              price="$300"
              details={[
                "In addition to service fee",
                "Does not Include registration and plates",
                "3 to 4 weeks for title processing"
              ]}
              purchaseText="Purchase"
            />
            
            {/* EIN */}
            <ServiceCard
              title="EIN - Employer Identification Number"
              price="$85"
              details={[
                "IRS EIN available upon request",
                "Banking purposes",
                "Financing purposes"
              ]}
              purchaseText="Purchase"
            />
            
            {/* Break/Bond Title */}
            <ServiceCard
              title="Break/Bond Title"
              price="$600"
              details={[
                "State registration not included.",
                "Montana requires a lost title bond to register a vehicle, boat, RV, mobile home, or trailer if the title is not available."
              ]}
              purchaseText="Purchase"
            />
            
            {/* Foreign Vehicle Title Registration */}
            <ServiceCard
              title="Foreign Vehicle Title Registration"
              price="$600"
              details={[
                "Registration of foreign vehicle.",
                "For vehicles not titled in the United States.",
                "Montana State fees NOT included."
              ]}
              purchaseText="Purchase"
            />
            
            {/* Annual Business Maintenance */}
            <ServiceCard
              title="Annual Business Maintenance"
              price="$225"
              details={[
                "Includes Continuation of Registered Agent service.",
                "Annual reports to the Montana Secretary of State.",
                "Due every January."
              ]}
              purchaseText="Purchase"
            />
            
            {/* Operating Agreement */}
            <ServiceCard
              title="Operating Agreement"
              price="$225"
              details={[
                "Used for percentage of ownership.",
                "Sometimes needed for financing"
              ]}
              purchaseText="Purchase"
            />
            
            {/* LLC Corporate Book Package */}
            <ServiceCard
              title="LLC Corporate Book Package"
              price="$375"
              details={[
                "Includes Operating Agreement",
                "Includes EIN",
                "Includes Corporate Book & Seal"
              ]}
              purchaseText="Purchase"
            />
          </div>
          
          {/* Contact Section */}
          <div className="bg-accent rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Contact us to learn more about how we can assist you with:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Forming an LLC in Montana</li>
                <li>Montana LLC filing requirements</li>
                <li>Montana LLC articles of organization</li>
                <li>Montana foreign LLC registration</li>
                <li>Montana registered agent services</li>
                <li>Montana LLC fees and costs</li>
                <li>Montana registration of a kit car</li>
                <li>Montana vehicle LLC registration</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li>Avoiding sales tax on car purchases</li>
                <li>Montana ATV registration for non-residents</li>
                <li>Montana boat registration</li>
                <li>Montana RV registration</li>
                <li>Montana trailer registration</li>
                <li>Montana motorcycle registration</li>
                <li>Montana vehicle registration renewal</li>
                <li>Montana vehicle title transfer</li>
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/contact" className="button button-primary">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Start your Montana LLC formation process today. Our team is ready to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="button bg-white text-primary hover:bg-accent-highlight">
              Contact Us
            </Link>
            <a href="tel:+14066162776" className="button button-outline">
              Call (406) 616-2776
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Service Card Component
interface ServiceCardProps {
  title: string;
  price: string;
  details: string[];
  purchaseText: string;
}

function ServiceCard({ title, price, details, purchaseText }: ServiceCardProps) {
  return (
    <div className="card h-full flex flex-col">
      <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
      <div className="text-primary text-2xl font-bold mb-4">{price}</div>
      
      <ul className="mb-6 space-y-2 flex-grow">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      
      <a href="#" className="button button-primary w-full text-center mt-auto">
        {purchaseText}
      </a>
    </div>
  );
}
