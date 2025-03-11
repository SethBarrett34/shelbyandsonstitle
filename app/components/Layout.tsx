import { Link } from "@remix-run/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-serif text-2xl md:text-3xl font-bold">Shelby & Sons</span>
              <span className="ml-2 text-secondary font-serif text-xl">Title Company</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-1 md:space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/quote" className="btn btn-primary ml-2">
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shelby & Sons Title Company</h3>
            <p className="mb-4">Professional title services you can trust.</p>
            <p className="mb-4">123 Main Street<br />Anytown, State 12345</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent-dark transition duration-200">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent-dark transition duration-200">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent-dark transition duration-200">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent-dark transition duration-200">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-accent-dark transition duration-200">Get a Quote</Link></li>
              <li><Link to="/privacy" className="hover:text-accent-dark transition duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: By Appointment Only</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shelby & Sons Title Company. All rights reserved.</p>
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
      className="px-3 py-2 text-gray-700 hover:text-primary font-medium transition duration-200"
    >
      {children}
    </Link>
  );
}
