import { Link } from "@remix-run/react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          {/* Logo - Left Side */}
          <Link to="/" className="logo">
            <img 
              src="/images/Asset-5shelby-sons-title-logo-web-sml.png" 
              alt="Shelby & Sons Title Company Logo" 
              className="logo-image"
              width={225}
              height={60}
            />
          </Link>
          
          {/* Desktop Navigation - Right Side */}
          <nav className="nav">
            <ul className="flex items-center gap-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog-montana">Blog Montana</Link></li>
              <li><Link to="/license-plate-gallery">License Plate Gallery</Link></li>
              <li>
                <Link to="/form-llc" className="cta-button bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-all">
                  Form LLC
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="py-4 border-t border-gray-700">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li><Link to="/" className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/services" className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                <li><Link to="/blog-montana" className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>Blog Montana</Link></li>
                <li><Link to="/license-plate-gallery" className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>License Plate Gallery</Link></li>
                <li className="pt-2">
                  <Link 
                    to="/form-llc"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-light"
                  >
                    Form LLC
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div>
            <Link to="/" className="footer-logo">
              <img 
                src="/images/Asset-2shelby-sons-title-company.svg" 
                alt="Shelby & Sons Title Company Logo" 
                className="footer-logo-image"
              />
            </Link>
            <p className="mb-4">Our experts are available Monday to Friday from 9am to 6pm to assist you with the process. Our registration form is available online for your convenience.</p>
            
            <div className="mb-6">
              <h3>Contact Us</h3>
              <address className="not-italic mb-2">
                4594 Hillcrest Ct<br />
                Helena, MT 59602
              </address>
              <p className="mb-1">Phone: (406)616-2776</p>
              <p>Email: info@shelbyandsonstitle.com</p>
            </div>
            
            <div className="flex space-x-3 mb-6">
              <a href="https://www.facebook.com/people/Shelby-and-Sons-Title-Company-LLC/61555944510952/" className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white hover:bg-primary">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/jtamol406/" className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white hover:bg-primary">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="https://www.yelp.com/biz/shelby-and-sons-title-company-no-title" className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white hover:bg-primary">
                <span className="sr-only">Yelp</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.803 12.003l-4.324 1.515c-.83.29-1.058 1.133-.847 1.7.21.566.914.962 1.744.672l4.323-1.514c.83-.291 1.058-1.133.847-1.7-.21-.567-.913-.962-1.743-.673zm-3.985 3.785l3.568 2.837c.73.582 1.45.395 1.755-.187.305-.583.124-1.412-.606-1.994l-3.57-2.837c-.73-.582-1.45-.395-1.754.187-.305.582-.125 1.412.607 1.994zm.65-10.125l3.617-2.76c.73-.582.909-1.411.604-1.994-.305-.582-1.026-.769-1.755-.187l-3.618 2.76c-.73.582-.91 1.412-.604 1.995.305.582 1.026.768 1.755.186zm-7.33 7.164c-.305-.583-1.026-.769-1.756-.186l-3.618 2.76c-.73.582-.908 1.411-.603 1.994.304.582 1.025.768 1.755.186l3.618-2.76c.73-.582.909-1.411.604-1.994zm6.364-4.035l4.324-1.515c.83-.29 1.058-1.133.847-1.7-.21-.566-.914-.962-1.744-.672l-4.324 1.515c-.83.29-1.058 1.133-.847 1.7.21.567.914.962 1.744.672z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@shelblfdhlp" className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white hover:bg-primary">
                <span className="sr-only">TikTok</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog-montana">Blog Montana</Link></li>
              <li><Link to="/license-plate-gallery">License Plate Gallery</Link></li>
              <li><Link to="/form-llc">Form LLC</Link></li>
            </ul>
          </div>
          
          <div>
            <h3>Services</h3>
            <ul>
              <li><Link to="/services#title-search">Title Search</Link></li>
              <li><Link to="/services#title-insurance">Title Insurance</Link></li>
              <li><Link to="/services#escrow-services">Escrow Services</Link></li>
              <li><Link to="/services#closing-services">Closing Services</Link></li>
              <li><Link to="/services#additional-services">Additional Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3>Hours</h3>
            <ul>
              <li>Monday: 9:00 AM - 5:00 PM</li>
              <li>Tuesday: 9:00 AM - 5:00 PM</li>
              <li>Wednesday: 9:00 AM - 5:00 PM</li>
              <li>Thursday: 9:00 AM - 5:00 PM</li>
              <li>Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday - Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Shelby & Sons Title Company. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
