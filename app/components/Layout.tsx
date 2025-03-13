import { Link } from "@remix-run/react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-accent">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center mr-3">
              <span className="text-white font-serif text-xl font-bold">S</span>
            </div>
            <div>
              <div className="text-primary font-heading text-xl md:text-2xl font-bold">Shelby & Sons</div>
              <div className="text-neutral-600 font-heading text-sm tracking-wider">TITLE COMPANY</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link 
              to="/quote" 
              className="ml-4 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-300 shadow-sm"
            >
              Get a Quote
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-accent focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <Link 
                to="/quote"
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-2 py-3 bg-primary text-white text-center rounded-lg hover:bg-primary-light transition-colors duration-300"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary font-serif text-lg font-bold">S</span>
                </div>
                <span className="text-white font-heading text-xl font-bold">Shelby & Sons</span>
              </div>
            </Link>
            <p className="text-neutral-300 mb-6">Your trusted partner in title services with decades of experience and a commitment to excellence.</p>
            <div className="flex space-x-4 mb-6">
              <SocialLink icon="facebook" />
              <SocialLink icon="linkedin" />
              <SocialLink icon="twitter" />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/services#title-search">Title Search</FooterLink>
              <FooterLink to="/services#title-insurance">Title Insurance</FooterLink>
              <FooterLink to="/services#escrow">Escrow Services</FooterLink>
              <FooterLink to="/services#closing">Closing Services</FooterLink>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-neutral-300 mb-4">
              <p>123 Main Street</p>
              <p>Suite 300</p>
              <p>Anytown, State 12345</p>
            </address>
            <p className="text-neutral-300 mb-2">Phone: (555) 123-4567</p>
            <p className="text-neutral-300">Email: info@shelbyandsons.com</p>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-10 pt-6 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shelby & Sons Title Company. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-neutral-400 hover:text-white transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className="px-3 py-2 rounded-lg text-neutral-700 hover:text-primary hover:bg-accent-highlight font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ to, children, onClick }: MobileNavLinkProps) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="py-3 px-4 block rounded-lg text-neutral-700 hover:text-primary hover:bg-accent-highlight font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <li>
      <Link to={to} className="text-neutral-300 hover:text-white transition-colors duration-200">
        {children}
      </Link>
    </li>
  );
}

interface SocialLinkProps {
  icon: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
}

function SocialLink({ icon }: SocialLinkProps) {
  let iconSvg;
  
  switch (icon) {
    case 'facebook':
      iconSvg = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
      break;
    case 'twitter':
      iconSvg = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      );
      break;
    case 'linkedin':
      iconSvg = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
      break;
    default:
      iconSvg = null;
  }
  
  return (
    <a 
      href="#" 
      className="w-9 h-9 rounded-full bg-neutral-700 flex items-center justify-center text-white hover:bg-primary transition-colors duration-200"
      aria-label={`Follow us on ${icon}`}
    >
      {iconSvg}
    </a>
  );
}
