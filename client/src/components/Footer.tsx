import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 text-primary inline-block">
              MannShop
            </Link>
            <p className="text-neutral-400 mb-4">Platform terintegrasi WhatsApp dan DigiFlazz untuk memudahkan bisnis pulsa dan produk digital Anda.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Tutorial</h3>
            <ul className="space-y-2">
              <li><Link href="/digiflazz-registration" className="text-neutral-400 hover:text-white transition-colors">Registrasi DigiFlazz</Link></li>
              <li><Link href="/mongodb-setup" className="text-neutral-400 hover:text-white transition-colors">Setup MongoDB</Link></li>
              <li><Link href="/authenticator-setup" className="text-neutral-400 hover:text-white transition-colors">Setup Google Authenticator</Link></li>
              <li><Link href="/script-editing" className="text-neutral-400 hover:text-white transition-colors">Panduan Edit Script</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-neutral-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><a href="https://wa.me/6283861518933" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">Kontak Kami <i className="fab fa-whatsapp ml-1"></i></a></li>
              <li><Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-500">&copy; {new Date().getFullYear()} MannShop. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
