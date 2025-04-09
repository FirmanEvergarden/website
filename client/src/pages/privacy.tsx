import React, { useEffect } from 'react';
import { activatePageAnimations } from '../lib/animationHelper';

const Privacy: React.FC = () => {
  // Aktifkan animasi saat komponen dimount
  useEffect(() => {
    activatePageAnimations();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Kebijakan Privasi</h1>
            <p className="text-lg text-neutral-700">Terakhir diperbarui: 9 April 2025</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Kebijakan Privasi ini menjelaskan bagaimana MannShop mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan saat menggunakan layanan tutorial kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami mungkin mengumpulkan informasi berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informasi kontak seperti nama, alamat email, dan nomor telepon</li>
              <li>Informasi teknis seperti alamat IP, jenis browser, dan sistem operasi</li>
              <li>Informasi penggunaan seperti halaman yang dikunjungi dan waktu akses</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bagaimana Kami Menggunakan Informasi Anda</h2>
            <p>
              Kami menggunakan informasi yang dikumpulkan untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Menyediakan, memelihara, dan meningkatkan layanan kami</li>
              <li>Mengirimkan informasi penting tentang layanan kami</li>
              <li>Memahami dan menganalisis bagaimana Anda menggunakan layanan kami</li>
              <li>Memberikan dukungan pelanggan</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Perlindungan Data</h2>
            <p>
              Kami menerapkan tindakan keamanan yang wajar untuk melindungi informasi pribadi Anda. Namun, perlu diingat bahwa tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Berbagi Informasi</h2>
            <p>
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi identifikasi pribadi Anda kepada pihak lain. Kami mungkin membagikan informasi umum yang tidak mengidentifikasi secara pribadi dengan mitra bisnis untuk analisis dan pengembangan layanan.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookie</h2>
            <p>
              Situs kami menggunakan cookie untuk menyimpan informasi tentang preferensi pengunjung dan halaman yang dikunjungi. Ini membantu kami menganalisis data tentang lalu lintas situs web dan meningkatkan situs kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tautan ke Situs Lain</h2>
            <p>
              Tutorial kami mungkin berisi tautan ke situs web lain. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs tersebut. Perlu diketahui bahwa situs eksternal ini tidak dioperasikan oleh kami. Kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi dari situs-situs ini.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Perubahan pada Kebijakan Privasi Ini</h2>
            <p>
              Kami mungkin memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini. Perubahan akan berlaku segera setelah diposting di situs web.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui <a href="https://wa.me/6283861518933" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">WhatsApp</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;