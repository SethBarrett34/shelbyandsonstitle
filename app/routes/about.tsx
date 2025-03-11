import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="title-large mb-6">About Shelby & Sons Title Company</h1>
            <p className="text-lg md:text-xl">
              A trusted partner in real estate transactions for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-medium mb-6">Our Story</h2>
              <p className="mb-4">
                Founded in 1998 by James Shelby, Shelby & Sons Title Company began with a simple mission: 
                to provide clients with professional, reliable title services built on a foundation of 
                integrity and attention to detail.
              </p>
              <p className="mb-4">
                What started as a small family business has grown into one of the region's most trusted 
                title companies, now employing a team of experienced professionals who share our founder's 
                commitment to excellence.
              </p>
              <p>
                Though we've grown over the years, we remain true to our roots—a family-owned business that 
                treats every client with personal attention and care. Today, the second generation of the 
                Shelby family continues this tradition of service excellence.
              </p>
            </div>
            <div className="bg-accent-dark rounded-lg p-8 text-center">
              <div className="text-5xl mb-4 text-primary">25+</div>
              <p className="text-xl font-bold mb-2">Years of Experience</p>
              <p className="text-gray-600">
                Serving homebuyers, sellers, and real estate professionals since 1998
              </p>
              
              <div className="mt-8 text-5xl mb-4 text-primary">10,000+</div>
              <p className="text-xl font-bold mb-2">Successful Closings</p>
              <p className="text-gray-600">
                Helping clients achieve their real estate goals with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              These principles guide everything we do at Shelby & Sons Title Company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              title="Integrity" 
              description="We operate with honesty and transparency in every interaction, earning trust through ethical practices."
              icon="⚖️"
            />
            
            <ValueCard 
              title="Excellence" 
              description="We strive for exceptional service in every detail, going above and beyond to exceed expectations."
              icon="🏆"
            />
            
            <ValueCard 
              title="Reliability" 
              description="Our clients count on our consistent performance, timeliness, and follow-through."
              icon="🤝"
            />
            
            <ValueCard 
              title="Expertise" 
              description="We maintain deep knowledge of title services and real estate law to provide informed guidance."
              icon="📚"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">Meet Our Leadership Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Experienced professionals dedicated to providing exceptional title services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Robert Shelby" 
              title="President & CEO"
              bio="With over 30 years in the title industry, Robert has led Shelby & Sons since 2010, continuing the tradition of excellence established by his father."
            />
            
            <TeamMember 
              name="Elizabeth Shelby" 
              title="Chief Operating Officer"
              bio="Elizabeth brings 20 years of operational experience to ensure our processes run smoothly and efficiently for every client."
            />
            
            <TeamMember 
              name="Michael Johnson" 
              title="Senior Title Attorney"
              bio="As our legal expert, Michael has resolved complex title issues for over 15 years, protecting our clients' interests."
            />
            
            <TeamMember 
              name="Sarah Williams" 
              title="Closing Manager"
              bio="Sarah's attention to detail and client-focused approach has made her an invaluable leader of our closing team for the past 12 years."
            />
            
            <TeamMember 
              name="David Chen" 
              title="Escrow Officer"
              bio="David's 10 years of experience in managing escrow accounts ensures the secure handling of all transaction funds."
            />
            
            <TeamMember 
              name="Jennifer Lopez" 
              title="Client Relations Manager"
              bio="Jennifer's commitment to exceptional customer service helps maintain our strong relationships with clients and partners."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-accent-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">Why Choose Shelby & Sons?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                As a locally owned and operated business, we have deep knowledge of regional property 
                records, legal requirements, and market conditions that national companies may lack.
              </p>
            </div>
            
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                We take the time to understand your specific needs and tailor our approach accordingly. 
                You're never just a transaction number to us.
              </p>
            </div>
            
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">Technology & Tradition</h3>
              <p className="text-gray-600">
                We combine modern technology for efficiency with traditional values of personal service, 
                giving you the best of both worlds.
              </p>
            </div>
            
            <div className="card h-full">
              <h3 className="text-xl font-serif font-bold mb-3">Transparent Communication</h3>
              <p className="text-gray-600">
                We believe in clear, regular updates throughout the process, ensuring you're informed 
                and comfortable every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="title-medium mb-4">Our Professional Affiliations</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We maintain active memberships in these professional organizations to stay current with industry standards and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">American Land Title Association</h3>
              <p className="text-gray-600">Member since 2000</p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">State Bar Association</h3>
              <p className="text-gray-600">Professional member</p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">Chamber of Commerce</h3>
              <p className="text-gray-600">Active local business member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="title-medium mb-6">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Experience the Shelby & Sons difference for your next real estate transaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-accent-dark">
              Contact Our Team
            </Link>
            <Link to="/services" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="card text-center h-full flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
}

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
}

function TeamMember({ name, title, bio }: TeamMemberProps) {
  return (
    <div className="card h-full flex flex-col">
      <div className="bg-accent-dark w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-primary text-4xl font-bold">{name.charAt(0)}</span>
      </div>
      <div className="text-center mb-4">
        <h3 className="text-xl font-serif font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium">{title}</p>
      </div>
      <p className="text-gray-600 flex-grow">{bio}</p>
    </div>
  );
}
