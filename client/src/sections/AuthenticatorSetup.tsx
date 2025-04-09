import React from 'react';

const AuthenticatorSetup: React.FC = () => {
  return (
    <section id="authenticator-setup" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-orange-100 text-primary rounded-full text-sm font-medium mb-4">Tutorial 3</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengkoneksikan DigiFlazz ke Google Authenticator</h2>
            <p className="text-lg text-neutral-700">Cara menghubungkan akun DigiFlazz dengan Google Authenticator dan cara melihat Production Key (API Key).</p>
          </div>
          
          {/* Steps */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow p-6 step-card section-content">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Aktifkan Google Authenticator di DigiFlazz</h3>
                  <p className="text-neutral-700 mb-4">Langkah-langkah:</p>
                  <ol className="list-decimal pl-5 space-y-2 text-neutral-700">
                    <li>Login ke akun DigiFlazz kamu di <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://digiflazz.com</a></li>
                    <li>Masuk ke menu Akun &gt; Keamanan</li>
                    <li>Di bagian Two Factor Authentication (2FA), klik tombol Aktifkan</li>
                    <li>Akan muncul QR Code</li>
                  </ol>
                  
                  <div className="mt-4 flex flex-col md:flex-row items-center gap-4 bg-neutral-100 p-4 rounded-lg">
                    <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        <rect x="0" y="0" width="100" height="100" fill="#ffffff" />
                        <g fill="#000000">
                          {/* Simple QR code pattern */}
                          <rect x="10" y="10" width="20" height="20" />
                          <rect x="70" y="10" width="20" height="20" />
                          <rect x="10" y="70" width="20" height="20" />
                          <rect x="40" y="40" width="20" height="20" />
                          <rect x="40" y="10" width="10" height="10" />
                          <rect x="10" y="40" width="10" height="10" />
                          <rect x="70" y="40" width="10" height="10" />
                          <rect x="40" y="70" width="10" height="10" />
                          <rect x="60" y="60" width="10" height="10" />
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Buka aplikasi Google Authenticator di HP kamu</h4>
                      <ol className="list-decimal pl-5 space-y-1 text-neutral-700">
                        <li>Tambahkan akun dengan cara:</li>
                        <li>Klik tombol +</li>
                        <li>Pilih Pindai barcode</li>
                        <li>Arahkan kamera ke QR Code dari DigiFlazz</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-neutral-700">
                      5. Setelah kode ditambahkan, akan muncul 6 digit kode OTP<br />
                      6. Masukkan kode OTP tersebut ke form DigiFlazz lalu klik Aktifkan
                    </p>
                    <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                      <p className="font-medium text-neutral-800">Catatan:</p>
                      <p className="text-neutral-700">Setiap login dan akses data sensitif, kamu akan diminta memasukkan kode dari Google Authenticator.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-800 text-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-4">Cara Mengambil Production Key (API Key) DigiFlazz</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-neutral-100">Login ke Akun DigiFlazz</p>
                    <p className="text-neutral-400 text-sm mt-1">Buka <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-orange-200 hover:underline">https://digiflazz.com</a>, lalu masuk menggunakan email dan password kamu.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-neutral-100">Masuk ke Menu API</p>
                    <p className="text-neutral-400 text-sm mt-1">Setelah login, klik menu API dari sidebar kiri atau melalui dashboard.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-neutral-100">Klik "Tampilkan Production Key"</p>
                    <p className="text-neutral-400 text-sm mt-1">Kamu akan melihat tombol bertuliskan "Tampilkan Production Key" di bagian API Key. Klik tombol tersebut.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-neutral-100">Masukkan OTP dari Google Authenticator</p>
                    <div className="space-y-2 text-neutral-400 text-sm mt-1">
                      <p>Buka aplikasi Google Authenticator di HP kamu.</p>
                      <p>Cari akun DigiFlazz.</p>
                      <p>Ambil 6 digit kode OTP yang muncul.</p>
                      <p>Masukkan kode OTP tersebut di kolom verifikasi pada website DigiFlazz.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    5
                  </div>
                  <div>
                    <p className="text-neutral-100">Lihat dan Salin Production Key</p>
                    <div className="space-y-2 text-neutral-400 text-sm mt-1">
                      <p>Setelah OTP benar, Production Key akan ditampilkan.</p>
                      <p>Salin key tersebut.</p>
                      <p>Gunakan langsung di kode program kamu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="/script-editing" 
              className="px-6 py-3 bg-primary text-white flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Lanjut ke Cara Recode Script <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticatorSetup;
