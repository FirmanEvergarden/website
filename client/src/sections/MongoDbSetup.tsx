import React from 'react';
import StepCard from '../components/StepCard';
import CodeBlock from '../components/CodeBlock';

const MongoDbSetup: React.FC = () => {
  const mongoDBSteps = [
    {
      number: 1,
      title: 'Kunjungi Situs MongoDB',
      content: (
        <div>
          <p className="text-neutral-700 mb-4">
            Buka <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://www.mongodb.com</a><br />
            Klik tombol Sign Up di pojok kanan atas.
          </p>
          <div className="rounded-lg bg-neutral-100 p-4 flex items-center justify-center">
            <svg className="w-full h-auto" viewBox="0 0 800 300">
              <rect width="100%" height="100%" rx="10" ry="10" fill="#f3f4f6" />
              <rect x="20" y="20" width="200" height="40" rx="5" ry="5" fill="#116149" />
              <rect x="660" y="20" width="120" height="40" rx="20" ry="20" fill="#00ed64" />
              <text x="700" y="45" fontFamily="Arial" fontSize="18" textAnchor="middle" fill="#000">Sign Up</text>
              <rect x="20" y="100" width="760" height="180" rx="5" ry="5" fill="#ffffff" />
              <circle cx="120" cy="140" r="50" fill="#13aa52" />
              <path d="M120 100 L120 180" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
              <path d="M120 180 L100 160" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
              <rect x="220" y="120" width="500" height="20" rx="5" ry="5" fill="#e0e0e0" />
              <rect x="220" y="160" width="400" height="20" rx="5" ry="5" fill="#e0e0e0" />
              <rect x="220" y="200" width="300" height="40" rx="5" ry="5" fill="#00ed64" />
              <text x="350" y="225" fontFamily="Arial" fontSize="18" textAnchor="middle" fill="#000">Get Started Free</text>
            </svg>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: 'Daftar Akun MongoDB',
      content: (
        <>
          <p className="text-neutral-700 mb-4">Isi formulir pendaftaran:</p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700">
            <li>Nama Lengkap</li>
            <li>Email Aktif</li>
            <li>Password</li>
            <li>Klik Sign Up</li>
          </ul>
          <p className="text-neutral-700 mt-4">Atau daftar dengan akun Google/GitHub jika lebih praktis.</p>
        </>
      )
    },
    {
      number: 3,
      title: 'Verifikasi Email',
      content: (
        <p className="text-neutral-700">Cek email masuk dari MongoDB dan klik tautan verifikasi.</p>
      )
    },
    {
      number: 4,
      title: 'Buat Project Baru',
      content: (
        <>
          <p className="text-neutral-700 mb-4">Setelah login:</p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700">
            <li>Klik New Project</li>
            <li>Beri nama project (misalnya: BotWhatsApp)</li>
            <li>Klik Next</li>
          </ul>
        </>
      )
    },
    {
      number: 5,
      title: 'Buat Cluster Gratis',
      content: (
        <>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700 mb-4">
            <li>Pilih Shared Cluster (Free)</li>
            <li>Lokasi server: Pilih region terdekat (misal: Singapore)</li>
            <li>Klik Create Cluster</li>
          </ul>
          <p className="text-neutral-700 mt-4">Tunggu beberapa menit sampai cluster aktif.</p>
        </>
      )
    },
    {
      number: 6,
      title: 'Buat Username Database',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-neutral-700">
          <li>Masuk ke Database Access (menu kiri)</li>
          <li>Klik Add New Database User</li>
          <li>Username: bebas (misal: botuser)</li>
          <li>Password: bebas, simpan dengan baik</li>
          <li>Role: pilih Read and Write to Any Database</li>
          <li>Klik Add User</li>
        </ul>
      )
    },
    {
      number: 7,
      title: 'Izinkan IP Akses',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-neutral-700">
          <li>Masuk ke Network Access</li>
          <li>Klik Add IP Address</li>
          <li>Pilih Allow Access from Anywhere (0.0.0.0/0)</li>
          <li>Klik Confirm</li>
        </ul>
      )
    },
    {
      number: 8,
      title: 'Ambil Connection String (URI)',
      content: (
        <>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700 mb-4">
            <li>Masuk ke Database &gt; Connect &gt; Drivers</li>
            <li>Pilih Node.js</li>
            <li>Salin Connection URI seperti ini:</li>
          </ul>
          <CodeBlock>
            mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
          </CodeBlock>
          <p className="text-neutral-700 mt-4">Ganti &lt;username&gt; dan &lt;password&gt; dengan yang tadi kamu buat.</p>
        </>
      )
    }
  ];

  return (
    <section id="mongodb-setup" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-orange-100 text-primary rounded-full text-sm font-medium mb-4">Tutorial 2</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Membuat Akun MongoDB</h2>
            <p className="text-lg text-neutral-700">Tutorial lengkap membuat akun MongoDB dan mengatur koneksi dengan NodeJS (MongoDB Driver).</p>
          </div>
          
          {/* Steps */}
          <div className="space-y-8">
            {mongoDBSteps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                className=""
              >
                {step.content}
              </StepCard>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="/authenticator-setup" 
              className="px-6 py-3 bg-primary text-white flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Lanjut ke Setup Google Authenticator <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MongoDbSetup;
