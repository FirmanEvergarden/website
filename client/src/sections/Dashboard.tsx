import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { activatePageAnimations, setupDashboardIllustration } from '../lib/animationHelper';

const Dashboard: React.FC = () => {
  // Aktifkan animasi dan setup ilustrasi dashboard
  useEffect(() => {
    // Aktifkan animasi saat komponen dimount
    activatePageAnimations();
    
    // Setup ilustrasi dashboard
    setupDashboardIllustration('dashboard-illustration');
  }, []);

  return (
    <section id="dashboard" className="min-h-[80vh] flex items-center py-12 md:py-24 relative overflow-hidden">
      {/* Background elements for desktop - hidden on mobile */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white to-orange-50 z-0"></div>
      
      {/* Pattern overlay for desktop */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 hidden md:block">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-200/30 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 section-content">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-neutral-800 leading-tight">
              Integrasikan <span className="text-primary">DigiFlazz</span> dengan <span className="text-primary">Bot Messaging</span> Anda
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-neutral-700 mb-6 md:mb-8">
              Panduan lengkap cara membuat Bot messaging yang terhubung dengan DigiFlazz untuk penjualan dan transaksi produk digital otomatis.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <Link
                href="/digiflazz-registration"
                className="px-4 sm:px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-primary/90 transition-all"
              >
                Mulai Sekarang <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <a 
                href="https://digiflazz.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 sm:px-6 py-3 bg-white text-primary border border-primary font-medium rounded-lg hover:bg-orange-50 transition-all hover:shadow-md"
              >
                Kunjungi DigiFlazz <i className="fas fa-external-link-alt ml-2"></i>
              </a>
            </div>
          </div>
          {/* Ilustrasi dashboard/aplikasi WhatsApp Bot untuk penjelasan visual */}
          <div className="w-full md:w-1/2 section-content">
            <div className="relative mx-auto max-w-[500px] z-20" id="dashboard-illustration">
              {/* Konten ilustrasi akan di-render menggunakan setupDashboardIllustration() */}
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 step-card section-content border border-gray-100 hover:border-orange-100">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" y1="8" x2="19" y2="14"></line>
                <line x1="22" y1="11" x2="16" y2="11"></line>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Registrasi Mudah</h3>
            <p className="text-sm md:text-base text-neutral-700">Proses langkah demi langkah untuk mendaftar di DigiFlazz dan mulai menjual produk digital.</p>
          </div>
          
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 step-card section-content border border-gray-100 hover:border-orange-100">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Bot Otomatis</h3>
            <p className="text-sm md:text-base text-neutral-700">Bot messaging 24/7 yang menangani pertanyaan dan transaksi pelanggan secara otomatis.</p>
          </div>
          
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 step-card section-content border border-gray-100 hover:border-orange-100">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Penyimpanan Data</h3>
            <p className="text-sm md:text-base text-neutral-700">Penyimpanan data transaksi yang aman dengan MongoDB untuk operasi bisnis yang andal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
