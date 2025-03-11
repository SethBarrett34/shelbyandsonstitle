import { useState } from "react";
import Layout from "~/components/Layout";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyCity: "",
    propertyState: "",
    propertyZip: "",
    transactionType: "Residential Purchase",
    purchasePrice: "",
    loanAmount: "",
    closingDate: "",
    additionalInfo: "",
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="title-large mb-6">Request a Free Quote</h1>
            <p className="text-lg md:text-xl">
              Fill out the form below to receive a customized quote for your title services needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          {formSubmitted ? (
            <div className="bg-green-100 border border-green-300 text-green-700 px-8 py-12 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Quote Request!</h2>
              <p className="text-lg mb-6">
                We've received your information and will prepare a customized quote for your title services. 
                A member of our team will contact you within 1 business day.
              </p>
              <p>
                If you have any immediate questions, please contact us at (555) 123-4567.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-gray-600">
                  Please provide the details below, and we'll prepare a comprehensive quote for your title services. 
                  Required fields are marked with an asterisk (*).
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="card">
                  <h2 className="text-xl font-serif font-bold mb-6">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                
                {/* Property Information */}
                <div className="card">
                  <h2 className="text-xl font-serif font-bold mb-6">Property Information</h2>
                  
                  <div>
                    <label htmlFor="propertyAddress" className="block mb-2 font-medium">
                      Property Address*
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label htmlFor="propertyCity" className="block mb-2 font-medium">
                        City*
                      </label>
                      <input
                        type="text"
                        id="propertyCity"
                        name="propertyCity"
                        value={formData.propertyCity}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="propertyState" className="block mb-2 font-medium">
                        State*
                      </label>
                      <input
                        type="text"
                        id="propertyState"
                        name="propertyState"
                        value={formData.propertyState}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="propertyZip" className="block mb-2 font-medium">
                        ZIP Code*
                      </label>
                      <input
                        type="text"
                        id="propertyZip"
                        name="propertyZip"
                        value={formData.propertyZip}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Transaction Details */}
                <div className="card">
                  <h2 className="text-xl font-serif font-bold mb-6">Transaction Details</h2>
                  
                  <div>
                    <label htmlFor="transactionType" className="block mb-2 font-medium">
                      Transaction Type*
                    </label>
                    <select
                      id="transactionType"
                      name="transactionType"
                      value={formData.transactionType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      <option value="Residential Purchase">Residential Purchase</option>
                      <option value="Residential Refinance">Residential Refinance</option>
                      <option value="Commercial Purchase">Commercial Purchase</option>
                      <option value="Commercial Refinance">Commercial Refinance</option>
                      <option value="New Construction">New Construction</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="purchasePrice" className="block mb-2 font-medium">
                        Purchase/Property Value*
                      </label>
                      <input
                        type="text"
                        id="purchasePrice"
                        name="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={handleChange}
                        required
                        placeholder="$"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="loanAmount" className="block mb-2 font-medium">
                        Loan Amount (if applicable)
                      </label>
                      <input
                        type="text"
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="$"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="closingDate" className="block mb-2 font-medium">
                      Anticipated Closing Date (if known)
                    </label>
                    <input
                      type="date"
                      id="closingDate"
                      name="closingDate"
                      value={formData.closingDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="card">
                  <h2 className="text-xl font-serif font-bold mb-6">Additional Information</h2>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block mb-2 font-medium">
                      Any other details that might help us prepare your quote
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-8"
                  >
                    Submit Quote Request
                  </button>
                  
                  <p className="mt-4 text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">Why Choose Shelby & Sons for Your Title Needs?</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're committed to providing exceptional service at competitive rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center h-full">
              <div className="text-4xl mb-4 text-primary">💯</div>
              <h3 className="text-xl font-serif font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Our quotes are transparent and competitive, with no hidden fees or surprises.
              </p>
            </div>
            
            <div className="card text-center h-full">
              <div className="text-4xl mb-4 text-primary">⏱️</div>
              <h3 className="text-xl font-serif font-bold mb-3">Fast Response</h3>
              <p className="text-gray-600">
                We guarantee a quote response within one business day of your request.
              </p>
            </div>
            
            <div className="card text-center h-full">
              <div className="text-4xl mb-4 text-primary">🔍</div>
              <h3 className="text-xl font-serif font-bold mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Each quote is tailored to your specific needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
