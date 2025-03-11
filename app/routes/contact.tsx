import { useState } from "react";
import Layout from "~/components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 500);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="title-large mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Have questions or need assistance? Our team is here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="title-medium mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <ContactInfo 
                  icon="📍"
                  title="Office Address"
                  line1="123 Main Street, Suite 100"
                  line2="Anytown, State 12345"
                />
                
                <ContactInfo 
                  icon="📞"
                  title="Phone"
                  line1="Main: (555) 123-4567"
                  line2="Toll-free: (800) 123-4567"
                />
                
                <ContactInfo 
                  icon="📧"
                  title="Email"
                  line1="info@shelbyandsonstitle.com"
                  line2="closing@shelbyandsonstitle.com"
                />
                
                <ContactInfo 
                  icon="🕒"
                  title="Business Hours"
                  line1="Monday - Friday: 9:00 AM - 5:00 PM"
                  line2="Saturday & Sunday: Closed"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Join Our Team</h3>
                <p className="text-gray-600 mb-4">
                  Interested in career opportunities with Shelby & Sons Title Company?
                  Please send your resume and cover letter to careers@shelbyandsonstitle.com.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="title-medium mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-300 text-green-700 px-6 py-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. A member of our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Your Name*
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject*
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Title Services">Title Services</option>
                        <option value="Closing Services">Closing Services</option>
                        <option value="Title Insurance">Title Insurance</option>
                        <option value="Quote Request">Quote Request</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-accent">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 flex items-center">
            <div>
              <h2 className="title-medium mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-4">
                We're conveniently located in downtown Anytown, with easy access from major highways 
                and public transportation. Free parking is available for clients.
              </p>
              <p className="text-gray-600">
                If you're planning to visit us, we recommend scheduling an appointment to ensure that 
                a member of our team is available to assist you.
              </p>
            </div>
          </div>
          <div className="h-80 lg:h-auto bg-gray-300 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-700">
                Map placeholder - In a real application, this would display an interactive map 
                showing the company's location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ContactInfoProps {
  icon: string;
  title: string;
  line1: string;
  line2?: string;
}

function ContactInfo({ icon, title, line1, line2 }: ContactInfoProps) {
  return (
    <div className="flex">
      <div className="text-3xl text-primary mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{line1}</p>
        {line2 && <p className="text-gray-600">{line2}</p>}
      </div>
    </div>
  );
}
