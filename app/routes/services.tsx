import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="title-large mb-6">Our Title Services</h1>
            <p className="text-lg md:text-xl">
              Shelby & Sons Title Company offers comprehensive title services to protect 
              your real estate investments and ensure smooth property transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              With decades of experience in the title industry, our team provides professional 
              services tailored to meet the unique needs of each client, whether you're a 
              homebuyer, seller, real estate professional, or lender.
            </p>
          </div>

          {/* Title Search & Examination */}
          <div id="title-search" className="py-10 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="title-medium text-primary mb-4">Title Search & Examination</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="mb-4">
                  Our thorough title search and examination process involves a comprehensive 
                  investigation of property records to identify any potential issues that could 
                  affect your ownership rights.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Our Process Includes:</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Searching public records for the property's ownership history</li>
                  <li>Identifying any existing liens, judgments, or encumbrances</li>
                  <li>Verifying property boundaries and easements</li>
                  <li>Checking for unpaid taxes or assessments</li>
                  <li>Identifying any restrictions that may affect property use</li>
                </ul>
                
                <p>
                  Our meticulous approach helps uncover potential title issues early in the 
                  transaction process, allowing them to be resolved before closing.
                </p>
              </div>
            </div>
          </div>

          {/* Title Insurance */}
          <div id="title-insurance" className="py-10 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="title-medium text-primary mb-4">Title Insurance</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="mb-4">
                  Title insurance provides protection against financial loss from defects in title 
                  to real property and from the invalidity or unenforceability of mortgage loans.
                </p>
                
                <h3 className="text-xl font-bold mb-3">We Offer:</h3>
                <div className="space-y-6 mb-6">
                  <div>
                    <h4 className="text-lg font-bold">Owner's Title Insurance</h4>
                    <p>
                      Protects your ownership interest in the property against title defects, 
                      unknown heirs, forged documents, and other covered risks.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold">Lender's Title Insurance</h4>
                    <p>
                      Required by most mortgage lenders, this policy protects the lender's 
                      interest in the property up to the amount of the mortgage loan.
                    </p>
                  </div>
                </div>
                
                <p>
                  Unlike other types of insurance that protect against future events, title insurance 
                  protects against past events that could affect your property ownership. This 
                  one-time premium provides protection for as long as you or your heirs own the property.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Services */}
          <div id="closing-services" className="py-10 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="title-medium text-primary mb-4">Closing Services</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="mb-4">
                  Our professional closing services facilitate the final steps of real estate transactions,
                  ensuring all legal requirements are met and all parties fulfill their obligations.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Our Closing Services Include:</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Preparation and review of closing documents</li>
                  <li>Coordination with all parties involved (buyers, sellers, lenders, agents)</li>
                  <li>Calculation of closing costs and prorations</li>
                  <li>Collection and disbursement of funds</li>
                  <li>Recording of deeds and mortgage documents</li>
                  <li>Final title policy issuance</li>
                </ul>
                
                <p>
                  We provide a comfortable environment for closing and ensure that all aspects of the 
                  transaction are explained clearly. Our experienced closing officers guide you through 
                  each document, answering questions and addressing concerns to ensure a smooth closing experience.
                </p>
              </div>
            </div>
          </div>

          {/* Escrow Services */}
          <div id="escrow-services" className="py-10 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="title-medium text-primary mb-4">Escrow Services</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="mb-4">
                  As a neutral third party, Shelby & Sons provides secure escrow services to hold and 
                  manage funds during the real estate transaction process.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Our Escrow Services Include:</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Secure handling of earnest money deposits</li>
                  <li>Management of funds throughout the transaction</li>
                  <li>Verification that all conditions of the sale are met</li>
                  <li>Proper disbursement of funds according to the agreement</li>
                </ul>
                
                <p>
                  Our escrow services provide peace of mind to all parties by ensuring that funds 
                  are properly managed and disbursed only when all conditions of the transaction have been satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">Additional Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Beyond our core title and closing services, we offer these specialized solutions to meet your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">1031 Exchange Facilitation</h3>
              <p className="text-gray-600 mb-4">
                Our team can assist with tax-deferred 1031 exchanges, helping investors defer capital 
                gains taxes when selling investment property and purchasing like-kind replacement property.
              </p>
            </div>
            
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">Commercial Services</h3>
              <p className="text-gray-600 mb-4">
                We offer specialized title and closing services for commercial real estate transactions, 
                understanding the unique requirements and complexity these transactions involve.
              </p>
            </div>
            
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">Refinance Services</h3>
              <p className="text-gray-600 mb-4">
                Our streamlined refinance process makes it easy to update your mortgage, with 
                competitive rates on title insurance and efficient closing services.
              </p>
            </div>
            
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">Document Preparation</h3>
              <p className="text-gray-600 mb-4">
                We prepare various real estate documents including deeds, affidavits, and other legal 
                instruments required for property transactions.
              </p>
            </div>
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
