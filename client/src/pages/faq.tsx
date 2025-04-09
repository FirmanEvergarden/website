import React, { useEffect } from 'react';
import { activatePageAnimations } from '../lib/animationHelper';

const FAQ: React.FC = () => {
  // Aktifkan animasi saat komponen dimount
  useEffect(() => {
    activatePageAnimations();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h1>
            <p className="text-lg text-neutral-700">Jawaban dari pertanyaan umum seputar layanan kami</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Apa itu MannShop?</h3>
              <p className="text-neutral-700">MannShop adalah platform tutorial yang menyediakan panduan lengkap tentang cara mengintegrasikan WhatsApp Bot dengan layanan DigiFlazz untuk membangun bisnis penjualan produk digital seperti pulsa, paket data, dan voucher game.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Apakah saya harus membayar untuk menggunakan tutorial di MannShop?</h3>
              <p className="text-neutral-700">Sebagian tutorial dasar tersedia secara gratis. Untuk tutorial yang lebih lengkap dan mendalam, kami menyediakan paket berbayar dengan panduan step-by-step dan dukungan teknis.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Berapa modal awal untuk memulai bisnis dengan DigiFlazz?</h3>
              <p className="text-neutral-700">Modal awal untuk memulai bisnis dengan DigiFlazz cukup terjangkau. DigiFlazz memiliki beberapa paket deposit mulai dari Rp 50.000. Namun untuk memulai bisnis yang stabil, disarankan memiliki modal minimal Rp 500.000 - Rp 1.000.000.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Bagaimana cara mengintegrasikan Bot WhatsApp dengan DigiFlazz?</h3>
              <p className="text-neutral-700">Proses integrasi melibatkan beberapa langkah termasuk setup akun DigiFlazz, pembuatan database, konfigurasi bot WhatsApp, dan penulisan script. Semua langkah ini dijelaskan secara detail dalam tutorial kami.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Apakah saya perlu kemampuan coding?</h3>
              <p className="text-neutral-700">Kemampuan coding dasar akan membantu, tetapi tutorial kami dirancang agar dapat diikuti oleh pemula sekalipun. Kami menyediakan script siap pakai dan panduan step-by-step yang mudah diikuti.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Apa keuntungan menggunakan MongoDB?</h3>
              <p className="text-neutral-700">MongoDB adalah database NoSQL yang fleksibel, skalabel, dan mudah digunakan untuk menyimpan data transaksi. Keuntungannya termasuk performa tinggi, kemudahan penggunaan, dan gratis untuk penggunaan dasar.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Berapa lama waktu yang dibutuhkan untuk setup sistem?</h3>
              <p className="text-neutral-700">Dengan mengikuti tutorial kami, setup dasar bisa diselesaikan dalam 1-2 hari. Namun untuk pengembangan fitur lebih lanjut dan penyesuaian mungkin membutuhkan waktu tambahan tergantung kompleksitas yang diinginkan.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">Bagaimana jika saya mengalami kesulitan dalam mengikuti tutorial?</h3>
              <p className="text-neutral-700">Kami menyediakan dukungan teknis melalui WhatsApp untuk pengguna premium. Anda dapat menghubungi kami dengan pertanyaan spesifik dan tim kami akan membantu menyelesaikan masalah Anda.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-neutral-700">Masih punya pertanyaan? Jangan ragu untuk <a href="https://wa.me/6283861518933" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">menghubungi kami</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;