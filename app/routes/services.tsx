import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { useState, useEffect, useRef } from "react";
import type { MetaFunction } from "@remix-run/node";

// Define types for selected service
type SelectedService = {
  id: string;
  title: string;
  price: string;
  features: string[];
  category: string;
  recommended?: boolean;
  priority?: "recommended" | "rush" | "normal";
  priceDescription?: string; // Optional description next to price
  isLoading?: boolean; // Add loading state prop
};

// Define the category type
type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
};

// Define the categories
const categories: ServiceCategory[] = [
  {
    id: "llc-formation",
    name: "LLC Formation",
    description: "The essential service to establish your Montana LLC quickly and correctly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: "vehicle-registration",
    name: "Vehicle Registration",
    description: "Register your vehicles through your Montana LLC for potential tax savings and privacy benefits.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-2-2A1 1 0 0017 4H3z" />
      </svg>
    ),
  },
  {
    id: "additional-services",
    name: "Additional Services",
    description: "Add supplementary services for your LLC and vehicle registration needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
      </svg>
    ),
  },
];

// Define ServiceFeature component props
interface ServiceFeatureProps {
  text: string;
  highlighted?: boolean;
}

// ServiceFeature component - Enhanced with animations and better visual styling
const ServiceFeature = ({ text, highlighted = false }: ServiceFeatureProps) => (
  <li className="flex items-start gap-3 group" role="listitem"> 
    <svg 
      className={`w-5 h-5 ${highlighted ? 'text-primary' : 'text-green-600'} mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    > 
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className={`text-gray-700 transition-colors duration-300 ${highlighted ? 'font-semibold text-gray-900' : 'group-hover:text-gray-900'}`}>{text}</span>
  </li>
);

// Define ServiceCard component props
interface ServiceCardProps {
  id: string;
  title: string;
  price: string;
  features: string[];
  buttonText?: string;
  priority?: "recommended" | "rush" | "normal";
  category?: string;
  isSelected: boolean;
  onSelect: () => void;
  priceDescription?: string; // Optional description next to price
  isLoading?: boolean; // Add loading state prop
}

// Enhance ServiceCard component with modern design
const ServiceCard = ({
  id,
  title,
  price,
  features,
  buttonText = "Select Service",
  priority = "normal",
  category = "",
  isSelected,
  onSelect,
  priceDescription,
  isLoading = false
}: ServiceCardProps) => {
  const formatPrice = (price: string) => {
    if (!price) return "";
    return price.startsWith("$") ? price : `$${price}`;
  };

  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl transition-all duration-300
        ${isSelected ? 'border-2 border-primary ring-4 ring-primary/20' : 'border border-neutral-200'} 
        ${priority === "recommended" ? 'shadow-xl scale-[1.02]' : 'shadow-md hover:shadow-xl hover:-translate-y-1'}
        bg-white service-card
      `}
      data-priority={priority}
    >
      {priority === "recommended" && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-white py-2 px-4 text-center text-sm font-semibold tracking-wide">
          RECOMMENDED
        </div>
      )}
      
      {priority === "rush" && (
        <div className="absolute top-0 left-0 right-0 bg-secondary text-white py-2 px-4 text-center text-sm font-semibold tracking-wide">
          EXPEDITED
        </div>
      )}
      
      <div className={`p-6 ${priority === "recommended" || priority === "rush" ? 'pt-12' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold text-primary">{formatPrice(price)}</div>
            {priceDescription && <span className="text-sm text-gray-500">{priceDescription}</span>}
          </div>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          type="button"
          onClick={onSelect}
          disabled={isLoading}
          className={`
            relative overflow-hidden w-full py-3 px-4 rounded-lg font-medium transition-all duration-300
            ${isSelected
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-primary hover:bg-primary-dark text-white'}
            transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          `}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center">
              {isSelected ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Selected
                </>
              ) : (
                buttonText
              )}
            </span>
          )}
          
          {/* Animated background effect on hover */}
          <span className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-300 ease-in-out 
                         group-hover:w-full w-0"></span>
        </button>
      </div>
    </div>
  );
};

// AddToCartButton component - Enhanced with premium styling and interactions
const AddToCartButton = ({ onClick, isDisabled = false, loading = false }: { onClick: () => void, isDisabled?: boolean, loading?: boolean }) => (
  <button
    onClick={onClick}
    disabled={isDisabled || loading}
    className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
      isDisabled 
        ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
        : "bg-primary text-white hover:bg-primary-dark active:bg-primary-darker"
    }`}
    aria-label="Add selected services to cart"
  >
    {loading ? (
      <>
        <svg className="animate-spin h-5 w-5 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Processing...</span>
      </>
    ) : (
      <>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span className="font-bold">Continue to Checkout</span>
        <span className="absolute inset-0 h-full w-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </>
    )}
  </button>
);

// LoadingIndicator component - Shows when services are loading
const LoadingIndicator = ({ message = "Loading services..." }: { message?: string }) => (
  <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full animate-fade-in text-center">
      <div className="flex justify-center mb-4">
        <svg className="animate-spin h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <p className="text-lg font-medium text-gray-800">{message}</p>
    </div>
  </div>
);

// Define sample services
const services: SelectedService[] = [
  {
    id: "llc-formation",
    title: "Montana LLC Formation",
    price: "525",
    features: [
      "Approx 36-48 hours processing",
      "All Montana state fees included",
      "Includes Registered Agent Service",
      "Includes mail forwarding",
      "2hr rush available (on order form)"
    ],
    category: "llc-formation",
    recommended: true
  },
  {
    id: "first-vehicle-registration",
    title: "1st Vehicle Registration Service Fee",
    price: "350",
    features: [
      "Standard processing 10 days (approx)",
      "Includes title transfer preparation",
      "State fees calculated separately",
      "Free shipping of plates and registration",
      "Detailed instructions provided"
    ],
    category: "vehicle-registration"
  },
  {
    id: "additional-vehicle-registration",
    title: "Additional Vehicle Registration",
    price: "250",
    features: [
      "For 2nd or subsequent vehicles",
      "Same owner/LLC registration",
      "Processed with primary vehicle",
      "Includes title transfer preparation",
      "State fees calculated separately"
    ],
    category: "vehicle-registration"
  },
  {
    id: "ein-service",
    title: "EIN (Tax ID) Service",
    price: "75",
    features: [
      "Federal Tax ID Number acquisition",
      "Required for business banking",
      "24-48 hour processing",
      "Digital delivery of EIN confirmation",
      "Assistance with application process"
    ],
    category: "additional-services"
  },
  {
    id: "operating-agreement",
    title: "Operating Agreement",
    price: "99",
    features: [
      "Custom tailored to your LLC",
      "Professional legal document",
      "Defines ownership & operations",
      "Digital delivery",
      "Includes free revisions"
    ],
    category: "additional-services"
  },
  {
    id: "rush-processing",
    title: "Rush Processing",
    price: "150",
    features: [
      "Expedited 24-48 hour processing",
      "Priority handling of documents",
      "Faster state filing",
      "Available for all services",
      "Includes priority support"
    ],
    category: "additional-services",
    priority: "rush"
  }
];

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeCategory, setActiveCategory] = useState("formation");
  const [cartVisible, setCartVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [loadingServiceId, setLoadingServiceId] = useState<string | null>(null); // Track which service is being processed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const [pageLoading, setPageLoading] = useState(true);
  
  // Category labels for mobile dropdown
  const categoryLabels: Record<string, string> = {
    formation: "LLC Formation",
    registration: "Vehicle Registration",
    additional: "Additional Services",
    contact: "Contact Us"
  };

  // Load saved selections from localStorage (if any)
  useEffect(() => {
    const savedSelections = localStorage.getItem('selectedServices');
    if (savedSelections) {
      try {
        setSelectedServices(JSON.parse(savedSelections));
      } catch (e) {
        console.error("Error loading saved selections", e);
      }
    }
  }, []);

  // Save selections to localStorage when they change
  useEffect(() => {
    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
    // Show cart if services are selected
    setCartVisible(selectedServices.length > 0);
  }, [selectedServices]);
  
  const addToCart = (service: SelectedService) => {
    if (!selectedServices.some(item => item.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
    }
  };
  
  const removeFromCart = (id: string) => {
    setSelectedServices(selectedServices.filter(service => service.id !== id));
  };
  
  const isSelected = (id: string) => {
    return selectedServices.some(service => service.id === id);
  };

  // Helper function to easily add/remove services with loading state
  const handleSelectService = (service: SelectedService) => {
    setLoadingServiceId(service.id); // Set loading state
    setIsLoading(true);
    
    // Simulate processing time for better UX (can be removed in production)
    setTimeout(() => {
      if (isSelected(service.id)) {
        removeFromCart(service.id);
      } else {
        addToCart(service);
      }
      setIsLoading(false);
      setLoadingServiceId(null);
    }, 300);
  };
  
  const formatPrice = (price: string) => {
    return price.startsWith('$') ? price : `$${price}`;
  };
  
  const calculateTotal = () => {
    if (selectedServices.length === 0) return 0;
    return selectedServices.reduce((sum, service) => {
    const priceValue = parseInt(service.price.replace(/\D/g, ''));
    return sum + priceValue;
  }, 0);
  };

  const handleRemoveService = (id: string) => {
    removeFromCart(id);
  };

  // Handle scroll to category
  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      scrollToCategory(targetId);
    }
  };
  
  // Handle scroll events to update active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Add offset to trigger earlier
      
      const sections = ["formation", "registration", "additional", "contact"];
      
      // Find the section that is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offset = window.pageYOffset + top;
          
          if (scrollPosition >= offset && scrollPosition < offset + element.offsetHeight) {
            if (activeCategory !== sectionId) {
              setActiveCategory(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);
  
  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="services-page">
        {pageLoading && <LoadingIndicator />}
        
        {isLoading && <LoadingIndicator message="Processing your selection..." />}

        {/* Hero Section */}
        <div className="bg-primary services-hero relative overflow-hidden">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-white rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Montana Title & LLC Services</h1>
              <p className="text-xl opacity-90 mb-8">
                Streamline your business formation and vehicle registration with our trusted professional services. 
                Select the services you need below.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a 
                  href="#llc-formation" 
                  className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-medium transition-all hover:bg-opacity-90 hover:shadow-lg"
                  onClick={handleSmoothScroll}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  LLC Formation
                </a>
                <a 
                  href="#vehicle-registration" 
                  className="inline-flex items-center px-6 py-3 bg-white/20 text-white border border-white/40 rounded-lg font-medium transition-all hover:bg-white/30 hover:shadow-lg"
                  onClick={handleSmoothScroll}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-2-2A1 1 0 0017 4H3z" />
                  </svg>
                  Vehicle Registration
                </a>
                <a 
                  href="#additional-services" 
                  className="inline-flex items-center px-6 py-3 bg-white/20 text-white border border-white/40 rounded-lg font-medium transition-all hover:bg-white/30 hover:shadow-lg"
                  onClick={handleSmoothScroll}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                  Additional Services
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="services-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" fill="#ffffff" preserveAspectRatio="none">
            <path d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,133.3C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="bg-white py-10">
          {/* Trust Indicators */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-accent rounded-xl p-6 flex items-start transition-all hover:shadow-md">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Secure Transactions</h3>
                  <p className="text-sm text-gray-600">Protected by Stripe</p>
                </div>
              </div>
              
              <div className="bg-accent rounded-xl p-6 flex items-start transition-all hover:shadow-md">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Trusted Service</h3>
                  <p className="text-sm text-gray-600">Montana Licensed</p>
                </div>
              </div>
              
              <div className="bg-accent rounded-xl p-6 flex items-start transition-all hover:shadow-md">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Fast Processing</h3>
                  <p className="text-sm text-gray-600">Quick turnaround times</p>
                </div>
              </div>
              
              <div className="bg-accent rounded-xl p-6 flex items-start transition-all hover:shadow-md">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Experience</h3>
                  <p className="text-sm text-gray-600">10+ Years Industry Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-xl bg-accent/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-gray-600">LLCs Formed</div>
              </div>
              <div className="p-6 rounded-xl bg-accent/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-gray-600">Vehicles Registered</div>
              </div>
              <div className="p-6 rounded-xl bg-accent/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="p-6 rounded-xl bg-accent/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Services Content */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="sticky top-0 z-30 py-4 bg-white shadow-md mb-8 sticky-nav">
              <div className="flex justify-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className="category-button"
                    aria-selected={activeCategory === cat.id}
                  >
                    {cat.icon && <span className="mr-2">{cat.icon}</span>}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Display */}
            {categories.map((category) => (
              <div 
                key={category.id} 
                id={category.id} 
                className="mb-20 scroll-mt-32"
              >
                <div className="flex items-center mb-8">
                  <div className="h-px flex-grow bg-gray-200"></div>
                  <h2 className="text-2xl md:text-3xl font-bold mx-4 text-center uppercase tracking-wide text-gray-800">{category.name}</h2>
                  <div className="h-px flex-grow bg-gray-200"></div>
                </div>
                
                <div className="mb-6 max-w-3xl mx-auto text-center">
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>

                <div className="services-grid">
                  {services
                    .filter((service) => service.category === category.id)
                    .map((service) => (
                      <ServiceCard
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        price={service.price}
                        features={service.features}
                        priority={service.recommended ? "recommended" : (service.priority || "normal")}
                        category={service.category}
                        isSelected={isSelected(service.id)}
                        onSelect={() => handleSelectService(service)}
                        priceDescription={service.priceDescription}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Cart */}
        {selectedServices.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="bg-white rounded-xl shadow-2xl border-2 border-primary overflow-hidden">
              <div className="p-4 bg-primary text-white font-medium flex justify-between items-center">
                <h3 className="text-lg font-bold">Selected Services</h3>
                <div className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {selectedServices.length}
                </div>
              </div>
              
              <div className="p-4 max-h-60 overflow-y-auto custom-scrollbar">
                {selectedServices.map((service) => (
                  <div key={service.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-medium">{service.title}</div>
                      <div className="text-primary font-bold">{formatPrice(service.price)}</div>
                    </div>
                    <button
                      onClick={() => handleRemoveService(service.id)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4 font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-primary">{calculateTotal()}</span>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedServices([])}
                    className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Clear All
                  </button>
                  <Link
                    to="/checkout"
                    className="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-2 px-4 rounded-lg transition-colors font-medium"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
