import React, { useState, useEffect } from 'react';
import { ShieldCheck, Wallet, Lock, HelpCircle, ChevronRight, Menu, X, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="https://i.ibb.co/fzY2Lh4J/t-logo.png" alt="Trezor Logo" className="h-10 w-auto mr-2" />
              <span className="text-2xl font-bold text-green-800">Trezor.io/start</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-green-800 hover:text-green-600 font-medium">Features</a>
              <a href="#setup" className="text-green-800 hover:text-green-600 font-medium">Setup Guide</a>
              <a href="#faq" className="text-green-800 hover:text-green-600 font-medium">FAQ</a>
              <a href="#contact" className="text-green-800 hover:text-green-600 font-medium">Contact</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 py-8">
              <a 
                href="#features" 
                className="text-xl text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#setup" 
                className="text-xl text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Setup Guide
              </a>
              <a 
                href="#faq" 
                className="text-xl text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="text-xl text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Secure Your Crypto with <span className="text-green-600">Trezor.io/start</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Begin your journey to ultimate cryptocurrency security with the Trezor hardware wallet. Visit Trezor.io/start today to protect your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#setup" 
                  className="bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Get Started <ChevronRight size={20} className="ml-2" />
                </a>
                <a 
                  href="#features" 
                  className="border-2 border-green-800 text-green-800 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-green-600 rounded-lg blur opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Trezor Hardware Wallet" 
                  className="relative rounded-lg shadow-xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Why Choose Trezor.io/start?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trezor.io/start offers the most secure and user-friendly way to set up your hardware wallet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-green-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Maximum Security</h3>
              <p className="text-gray-700">
                Trezor.io/start guides you through setting up your hardware wallet with industry-leading security protocols, keeping your crypto assets safe from online threats.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-green-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Wallet size={28} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Easy Setup Process</h3>
              <p className="text-gray-700">
                The Trezor.io/start platform provides a step-by-step setup guide that makes configuring your hardware wallet simple, even for beginners.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-green-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Lock size={28} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Full Control</h3>
              <p className="text-gray-700">
                With Trezor.io/start, you maintain complete control over your private keys and digital assets, ensuring true ownership of your cryptocurrency.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Setup Guide Section */}
      <section id="setup" className="py-20 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Trezor.io/start Setup Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to set up your Trezor hardware wallet and secure your cryptocurrency
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Getting Started with Trezor.io/start</h3>
                <p className="text-gray-700 mb-6">
                  Setting up your Trezor hardware wallet through Trezor.io/start is a straightforward process that ensures maximum security for your cryptocurrency assets. The platform guides you through each step with clear instructions and helpful visuals, making it accessible even for those new to hardware wallets.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-800 mb-2">Visit Trezor.io/start</h4>
                      <p className="text-gray-700">
                        Begin by navigating to the official Trezor.io/start website using a secure browser. This is your gateway to setting up your Trezor hardware wallet properly.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-800 mb-2">Connect Your Device</h4>
                      <p className="text-gray-700">
                        Connect your Trezor hardware wallet to your computer using the provided USB cable. The Trezor.io/start platform will automatically detect your device.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-800 mb-2">Install Trezor Suite</h4>
                      <p className="text-gray-700">
                        Trezor.io/start will prompt you to download and install Trezor Suite, the official software for managing your hardware wallet. This application provides a secure environment for all your cryptocurrency operations.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-800 mb-2">Create or Recover Wallet</h4>
                      <p className="text-gray-700">
                        Through Trezor.io/start, you'll be guided to either create a new wallet or recover an existing one using your recovery seed. This step is crucial for securing your digital assets.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-800 mb-2">Secure Your Recovery Seed</h4>
                      <p className="text-gray-700">
                        Trezor.io/start emphasizes the importance of securely storing your recovery seed. This is your backup to access your funds if your device is lost or damaged.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Why Trezor.io/start Matters</h3>
                <p className="text-gray-700 mb-6">
                  Using Trezor.io/start for your hardware wallet setup ensures you're following the official, secure process designed by Trezor's security experts. This minimizes the risk of phishing attacks and ensures your cryptocurrency remains protected.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-800 p-4 mb-6">
                  <p className="text-green-800 font-medium">
                    Remember: Trezor.io/start is the only official setup portal for Trezor devices. Always verify you're on the legitimate website before proceeding with any setup steps.
                  </p>
                </div>
                
                <p className="text-gray-700">
                  With Trezor.io/start, you're not just setting up a device – you're establishing a fortress for your digital assets that protects against online threats while giving you complete control over your cryptocurrency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Trezor.io/start
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">What is Trezor.io/start?</h3>
                <p className="text-gray-700">
                  Trezor.io/start is the official setup portal for Trezor hardware wallets. It provides a secure, step-by-step guide to initialize your device, create or recover wallets, and ensure your cryptocurrency is properly secured.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Is Trezor.io/start safe to use?</h3>
                <p className="text-gray-700">
                  Yes, Trezor.io/start is the official setup website created by SatoshiLabs, the company behind Trezor hardware wallets. Always ensure you're on the legitimate website by checking the URL and security certificates.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Do I need to use Trezor.io/start every time?</h3>
                <p className="text-gray-700">
                  You only need to use Trezor.io/start for the initial setup of your device. After setup, you can use Trezor Suite for day-to-day management of your cryptocurrency assets.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">What if I lose my Trezor device?</h3>
                <p className="text-gray-700">
                  If you lose your Trezor device, you can recover all your funds using the recovery seed that you created during the Trezor.io/start setup process. This is why securely storing your recovery seed is crucial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Cryptocurrency?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit Trezor.io/start today and follow our simple setup guide to protect your digital assets with the most trusted hardware wallet solution.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-green-800 hover:bg-green-100 font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer id="contact" className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="https://i.ibb.co/fzY2Lh4J/t-logo.png" alt="Trezor Logo" className="h-8 w-auto mr-2" />
                <span className="text-xl font-bold">Trezor.io/start</span>
              </div>
              <p className="text-green-200 mb-4">
                The official setup portal for Trezor hardware wallets. Secure your cryptocurrency with confidence.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-green-200 hover:text-white transition-colors">Features</a></li>
                <li><a href="#setup" className="text-green-200 hover:text-white transition-colors">Setup Guide</a></li>
                <li><a href="#faq" className="text-green-200 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Support Center</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors">Security Tips</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-green-200">Email: support@trezor.io</li>
                <li className="text-green-200">Twitter: @Trezor</li>
                <li className="text-green-200">Reddit: r/TREZOR</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 Trezor.io/start. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="text-green-200 hover:text-white transition-colors mx-2">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors mx-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}

export default App;