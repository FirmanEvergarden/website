import { useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/ui/scroll-to-top";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy loading pages untuk performa lebih baik
const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/not-found"));
const DigiflazzRegistrationPage = lazy(() => import("./pages/digiflazz-registration"));
const MongoDBSetupPage = lazy(() => import("./pages/mongodb-setup"));
const AuthenticatorSetupPage = lazy(() => import("./pages/authenticator-setup"));
const ScriptEditingPage = lazy(() => import("./pages/script-editing"));
const FAQ = lazy(() => import("./pages/faq"));
const Privacy = lazy(() => import("./pages/privacy"));
const Terms = lazy(() => import("./pages/terms"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="inline-block">
      <div className="w-10 h-10 border-[3px] border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

// Title untuk setiap halaman
const pageTitles: Record<string, string> = {
  '/': 'Beranda | MannShop - Panduan Bot & DigiFlazz',
  '/digiflazz-registration': 'Registrasi DigiFlazz | MannShop',
  '/mongodb-setup': 'Setup MongoDB | MannShop',
  '/authenticator-setup': 'Setup Google Authenticator | MannShop',
  '/script-editing': 'Cara Recode Script | MannShop',
  '/faq': 'FAQ | MannShop',
  '/privacy': 'Kebijakan Privasi | MannShop',
  '/terms': 'Syarat & Ketentuan | MannShop',
};

function RouterWithLayout() {
  // Scroll to top dan update title pada route change
  const [location] = useLocation();
  useEffect(() => {
    // Scroll ke atas halaman
    window.scrollTo(0, 0);
    
    // Update document title berdasarkan route
    document.title = pageTitles[location] || 'MannShop - Panduan Bot & DigiFlazz';
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
      <Header />
      <main className="flex-grow pt-20 md:pt-24 pb-16 page-transition">
        <Suspense fallback={<LoadingFallback />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/digiflazz-registration" component={DigiflazzRegistrationPage} />
            <Route path="/mongodb-setup" component={MongoDBSetupPage} />
            <Route path="/authenticator-setup" component={AuthenticatorSetupPage} />
            <Route path="/script-editing" component={ScriptEditingPage} />
            <Route path="/faq" component={FAQ} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Preload halaman utama untuk meningkatkan performa navigasi
    const preloadRoutes = () => {
      const routes = [
        '/digiflazz-registration',
        '/mongodb-setup',
        '/authenticator-setup',
        '/script-editing'
      ];
      
      // Preload dengan prioritas rendah
      setTimeout(() => {
        routes.forEach(route => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          link.as = 'document';
          document.head.appendChild(link);
        });
      }, 2000); // Delay 2 detik untuk prioritas rendah
    };
    
    // Jalankan preload jika browser mendukung
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preloadRoutes);
    } else {
      setTimeout(preloadRoutes, 3000);
    }
    
    // Initialize AOS dengan pengaturan performance tinggi
    const aos = (window as any).AOS;
    if (aos) {
      aos.init({
        duration: 300, // Animasi lebih cepat lagi
        easing: 'ease', // Easing paling sederhana
        once: true,
        disable: 'phone', // Nonaktifkan di phone
        startEvent: 'DOMContentLoaded',
        disableMutationObserver: true, // Nonaktifkan observer untuk performa
        throttleDelay: 150, // Throttle lebih tinggi
        offset: 60, // Trigger point lebih dekat
        delay: 0 // Tidak ada delay
      });
    }

    // Fix untuk hot module replacement
    if (import.meta.hot) {
      import.meta.hot.dispose(() => {
        if (aos) {
          aos.refresh();
        }
      });
    }

    // Cleanup
    return () => {
      // Hapus event listener yang tidak digunakan
      if (aos) {
        const nodes = document.querySelectorAll('[data-aos]');
        nodes.forEach(node => {
          node.removeAttribute('data-aos');
        });
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterWithLayout />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
