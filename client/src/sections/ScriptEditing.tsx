import React from 'react';
import CodeBlock from '../components/CodeBlock';

const ScriptEditing: React.FC = () => {
  return (
    <section id="script-editing" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-orange-100 text-primary rounded-full text-sm font-medium mb-4">Tutorial 4</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Recode Script</h2>
            <p className="text-lg text-neutral-700">Penjelasan lengkap dan mudah dipahami untuk pemula tentang cara mengedit config.js, khususnya untuk menghindari kesalahan umum saat memodifikasi format teks atau kode.</p>
          </div>
          
          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 section-content">
            <h3 className="text-2xl font-semibold mb-4">Penjelasan Recode / Edit config.js untuk Pemula</h3>
            <p className="text-neutral-700 mb-6">Saat kamu mengedit file config.js, kamu harus berhati-hati dengan penulisan karakter spesial agar kode tetap bisa dijalankan dengan baik.</p>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold mb-2">1. Jangan Menghapus Tanda Backtick (`) atau Kutipan</h4>
                <p className="text-neutral-700 mb-3">Contoh:</p>
                <CodeBlock>
                  let pesan = `Halo, selamat datang di bot kami!`;
                </CodeBlock>
                <p className="text-neutral-700 mt-3">Jangan dihapus karakter backtick (`) karena itu penting untuk membungkus teks.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold mb-2">2. Jika Ingin Menambahkan Karakter ` di Dalam Pesan</h4>
                <p className="text-neutral-700 mb-3">Gunakan backslash (\) sebelum tanda ` untuk menghindari error.</p>
                <div className="mb-3">
                  <p className="text-neutral-700 mb-1">Contoh salah (akan error):</p>
                  <CodeBlock isError>
                    let pesan = `Gunakan tombol `Beli Sekarang``;
                  </CodeBlock>
                </div>
                <div>
                  <p className="text-neutral-700 mb-1">Contoh benar:</p>
                  <CodeBlock isSuccess>
                    let pesan = `Gunakan tombol \`Beli Sekarang\``;
                  </CodeBlock>
                </div>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold mb-2">3. Buat Baris Baru dengan \n</h4>
                <p className="text-neutral-700 mb-3">Kalau kamu ingin menambahkan enter/baris baru di dalam teks:</p>
                <CodeBlock>
                  let pesan = `Halo!\nSilakan pilih menu:\n1. Cek Saldo\n2. Isi Pulsa`;
                </CodeBlock>
                <p className="text-neutral-700 mt-3">Hasilnya saat dikirim bot:</p>
                <div className="p-3 bg-neutral-100 rounded-lg">
                  Halo!<br />
                  Silakan pilih menu:<br />
                  1. Cek Saldo<br />
                  2. Isi Pulsa
                </div>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold mb-2">4. Menyisipkan Variabel di Dalam Teks</h4>
                <p className="text-neutral-700 mb-3">Kalau kamu pakai backtick (`) kamu bisa menyisipkan variabel menggunakan ${"{}"}</p>
                <CodeBlock>
                  let nama = "Fikri";<br />
                  let pesan = `Halo ${"{nama}"}, selamat datang!`;
                </CodeBlock>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold mb-2">5. Hindari Karakter Aneh</h4>
                <p className="text-neutral-700 mb-3">Jangan tempel tanda kutip atau karakter asing tanpa alasan</p>
                <p className="text-neutral-700">Jika error setelah edit, cek ulang: mungkin ada backtick (`) atau kutip ('atau") yang hilang</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold mb-2">6. Gunakan Format Rapi</h4>
                <p className="text-neutral-700 mb-3">Contoh format config.js yang rapi:</p>
                <CodeBlock>
                  {`module.exports = {
  namaBot: "BotKu",
  pesanSelamatDatang: \`Halo, selamat datang di BotKu!
Ketik *menu* untuk melihat fitur.

Gunakan tombol \\\`Beli Sekarang\\\` jika ingin transaksi.\`,
}`}
                </CodeBlock>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="/" 
              className="px-6 py-3 bg-primary text-white flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Kembali ke Dashboard <i className="fas fa-home"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptEditing;
