import React from 'react';
import StepCard from '../components/StepCard';

const DigiflazzRegistration: React.FC = () => {
  const registrationSteps = [
    {
      number: 1,
      title: 'Kunjungi Website Resmi DigiFlazz',
      content: (
        <p className="text-neutral-700 mb-4">
          Buka <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://digiflazz.com</a> melalui browser.
        </p>
      )
    },
    {
      number: 2,
      title: 'Klik Tombol "Daftar"',
      content: (
        <p className="text-neutral-700 mb-4">Biasanya tombol Daftar berada di pojok kanan atas halaman utama.</p>
      )
    },
    {
      number: 3,
      title: 'Pilih Tipe Akun: Buyer',
      content: (
        <>
          <p className="text-neutral-700 mb-4">Pada halaman pendaftaran:</p>
          <div className="p-4 bg-neutral-100 rounded-lg mb-4">
            <p className="font-medium">Pilih Tipe Akun: <span className="text-primary">Buyer</span></p>
            <p className="text-neutral-700 mt-2 italic">Buyer cocok untuk Anda yang ingin melakukan pembelian produk digital seperti pulsa, paket data, token listrik, dll.</p>
          </div>
        </>
      )
    },
    {
      number: 4,
      title: 'Isi Data Pribadi',
      content: (
        <>
          <p className="text-neutral-700 mb-4">Lengkapi informasi berikut:</p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700">
            <li>Nama Lengkap</li>
            <li>Email Aktif</li>
            <li>Nomor HP Aktif</li>
            <li>Password (buat kombinasi kuat)</li>
            <li>Centang Saya menyetujui syarat & ketentuan</li>
            <li>Klik Daftar</li>
          </ul>
        </>
      )
    },
    {
      number: 5,
      title: 'Verifikasi Email',
      content: (
        <p className="text-neutral-700 mb-4">Cek email masuk dari DigiFlazz, lalu klik tautan verifikasi untuk mengaktifkan akun Anda.</p>
      )
    },
    {
      number: 6,
      title: 'Login ke Dashboard DigiFlazz',
      content: (
        <p className="text-neutral-700 mb-4">
          Setelah verifikasi, login ke <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://digiflazz.com</a> menggunakan email dan password yang didaftarkan.
        </p>
      )
    },
    {
      number: 7,
      title: 'Lengkapi Data Perusahaan',
      content: (
        <>
          <p className="text-neutral-700 mb-4">Masuk ke menu Akun &gt; Profil &gt; Perusahaan, isi data berikut:</p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700">
            <li>Nama Perusahaan: (isi sesuai nama usaha kamu)</li>
            <li>Alamat Lengkap: (alamat usaha)</li>
            <li>Nama Pemilik/Perwakilan: (namamu)</li>
            <li>Nomor HP Perusahaan</li>
            <li>Email Perusahaan</li>
          </ul>
        </>
      )
    },
    {
      number: 8,
      title: 'Pilih Software > Software Lain > NodeJS',
      content: (
        <>
          <p className="text-neutral-700 mb-4">Masih di halaman profil:</p>
          <ol className="list-decimal pl-5 space-y-2 text-neutral-700">
            <li>Klik menu Software atau API</li>
            <li>Pilih Software Lain</li>
            <li>Ketik atau pilih NodeJS (menandakan kamu akan menggunakan NodeJS untuk mengakses API DigiFlazz)</li>
          </ol>
        </>
      )
    },
    {
      number: 9,
      title: 'Simpan Perubahan',
      content: (
        <p className="text-neutral-700">Setelah semua data diisi, klik Simpan atau Update Profil.</p>
      )
    }
  ];

  return (
    <section id="digiflazz-registration" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto section-content">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-orange-100 text-primary rounded-full text-sm font-medium mb-4">Tutorial 1</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mendaftar DigiFlazz sebagai Buyer</h2>
            <p className="text-lg text-neutral-700">Panduan langkah demi langkah untuk mendaftar dan mengatur akun DigiFlazz Anda, termasuk pengisian data perusahaan.</p>
          </div>
          
          {/* Steps */}
          <div className="space-y-8">
            {registrationSteps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                className={index % 2 === 0 ? "transform-gpu" : ""}
              >
                {step.content}
              </StepCard>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="/mongodb-setup" 
              className="px-6 py-3 bg-primary text-white flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Lanjut ke Tutorial MongoDB <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigiflazzRegistration;
