import React, { useEffect } from 'react';
import { activatePageAnimations } from '../lib/animationHelper';

const Terms: React.FC = () => {
  // Aktifkan animasi saat komponen dimount
  useEffect(() => {
    activatePageAnimations();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Syarat & Ketentuan</h1>
            <p className="text-lg text-neutral-700">Terakhir diperbarui: 9 April 2025</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Dengan menggunakan platform MannShop, Anda menyetujui untuk terikat oleh syarat dan ketentuan penggunaan berikut. Harap baca ketentuan ini dengan seksama sebelum mengakses atau menggunakan layanan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Penerimaan Ketentuan</h2>
            <p>
              Dengan mengakses dan menggunakan layanan MannShop, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh ketentuan ini. Jika Anda tidak setuju dengan ketentuan ini, harap tidak menggunakan layanan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Layanan yang Disediakan</h2>
            <p>
              MannShop adalah platform tutorial yang memberikan panduan cara mengintegrasikan WhatsApp Bot dengan layanan DigiFlazz dan membangun bisnis penjualan produk digital. Kami menyediakan konten tutorial, panduan, dan sumber daya pendidikan.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Akun dan Pembayaran</h2>
            <p>
              Beberapa layanan kami mungkin tersedia dengan biaya tertentu. Untuk layanan berbayar, pembayaran harus dilakukan sesuai dengan harga dan ketentuan yang tertera pada saat pembelian. Semua pembayaran bersifat final dan tidak dapat dikembalikan kecuali ditentukan lain.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Hak Kekayaan Intelektual</h2>
            <p>
              Semua materi yang tersedia di MannShop, termasuk tetapi tidak terbatas pada teks, grafik, logo, gambar, video, dan kode, dilindungi oleh hak cipta dan hak kekayaan intelektual lainnya. Anda diizinkan untuk mengakses dan menggunakan konten untuk penggunaan pribadi dan non-komersial. Penyebaran ulang, modifikasi, atau penggunaan komersial tanpa izin tertulis dari kami dilarang.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Batasan Penggunaan</h2>
            <p>
              Anda setuju untuk tidak:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melakukan tindakan yang melanggar hukum atau mengancam integritas layanan kami</li>
              <li>Menggunakan layanan untuk tujuan yang melanggar hukum</li>
              <li>Mencoba untuk merusak atau mengganggu keamanan, integritas, atau kinerja layanan kami</li>
              <li>Menyalin, mendistribusikan, atau mengungkapkan bagian apa pun dari layanan kami tanpa izin tertulis</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Penafian Jaminan</h2>
            <p>
              Layanan kami disediakan "sebagaimana adanya" tanpa jaminan apa pun, baik tersurat maupun tersirat. Kami tidak menjamin bahwa layanan kami akan selalu tersedia, bebas dari kesalahan, atau bahwa cacat akan diperbaiki.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Batasan Tanggung Jawab</h2>
            <p>
              Sejauh diizinkan oleh hukum, MannShop tidak akan bertanggung jawab atas kerugian langsung, tidak langsung, insidental, konsekuensial, atau khusus yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan layanan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Ganti Rugi</h2>
            <p>
              Anda setuju untuk mengganti rugi dan melindungi MannShop dan afiliasinya dari segala klaim, kerugian, kewajiban, dan biaya (termasuk biaya hukum) yang timbul dari pelanggaran Anda terhadap ketentuan ini.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Perubahan pada Ketentuan</h2>
            <p>
              Kami berhak untuk memodifikasi ketentuan ini kapan saja. Perubahan akan berlaku segera setelah diposting di situs. Penggunaan Anda yang berkelanjutan terhadap layanan kami setelah perubahan tersebut merupakan penerimaan Anda terhadap ketentuan yang diubah.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Hukum yang Berlaku</h2>
            <p>
              Ketentuan ini akan diatur dan ditafsirkan sesuai dengan hukum Indonesia, tanpa memperhatikan konflik ketentuan hukumnya.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami melalui <a href="https://wa.me/6283861518933" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">WhatsApp</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;