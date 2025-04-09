import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menangani efek scroll untuk shadow header - menggunakan throttling
  const handleScroll = useCallback(() => {
    // Hanya set state jika berubah untuk mengurangi render
    const shouldBeScrolled = window.scrollY > 20;
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Menggunakan throttling untuk event scroll
    let scrollTimer: number;
    const throttledScroll = () => {
      if (!scrollTimer) {
        scrollTimer = window.setTimeout(() => {
          scrollTimer = 0;
          handleScroll();
        }, 100); // Throttle 100ms
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Panggil sekali saat komponen di-mount
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimer) window.clearTimeout(scrollTimer);
    };
  }, [handleScroll]);

  // Menutup menu mobile saat path berubah
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      {/* Efek strip warna di atas navbar */}
      <div className="h-1 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>
      
      {/* Desktop pattern overlay - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0 hidden md:block overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-300 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-5 w-20 h-20 rounded-full bg-primary blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="group relative text-2xl font-bold text-primary flex items-center transition-all duration-300">
              <div className="mr-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white overflow-hidden shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <span className="group-hover:text-orange-500 transition-colors duration-300">MannShop</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <button 
              className="block text-gray-800 p-2 hover:bg-orange-50 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} w-full absolute left-0 top-[72px] bg-white z-50 shadow-lg py-4 px-6`}>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <li className="w-full">
                <Link 
                  href="/" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-orange-200 hover:bg-orange-50 ${
                    location === '/' ? 'text-primary border-orange-200 bg-orange-50' : 'border-gray-100'
                  }`}
                >
                  Beranda
                  {location === '/' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  href="/digiflazz-registration" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-orange-200 hover:bg-orange-50 ${
                    location === '/digiflazz-registration' ? 'text-primary border-orange-200 bg-orange-50' : 'border-gray-100'
                  }`}
                >
                  Registrasi DigiFlazz
                  {location === '/digiflazz-registration' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  href="/mongodb-setup" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-orange-200 hover:bg-orange-50 ${
                    location === '/mongodb-setup' ? 'text-primary border-orange-200 bg-orange-50' : 'border-gray-100'
                  }`}
                >
                  Setup MongoDB
                  {location === '/mongodb-setup' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  href="/authenticator-setup" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-orange-200 hover:bg-orange-50 ${
                    location === '/authenticator-setup' ? 'text-primary border-orange-200 bg-orange-50' : 'border-gray-100'
                  }`}
                >
                  Setup Authenticator
                  {location === '/authenticator-setup' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  href="/script-editing" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-orange-200 hover:bg-orange-50 ${
                    location === '/script-editing' ? 'text-primary border-orange-200 bg-orange-50' : 'border-gray-100'
                  }`}
                >
                  Edit Script
                  {location === '/script-editing' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  href="/faq" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-orange-200 hover:bg-orange-50 ${
                    location === '/faq' ? 'text-primary border-orange-200 bg-orange-50' : 'border-gray-100'
                  }`}
                >
                  FAQ
                  {location === '/faq' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
