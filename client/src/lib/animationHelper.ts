/**
 * Helper untuk menangani animasi elemen dengan class section-content
 * Akan otomatis memanggil class visible saat element muncul di viewport
 */
export function activatePageAnimations() {
  // Fungsi untuk menambahkan class visible ke elemen section-content saat terlihat
  const addVisibleClass = () => {
    const sectionContents = document.querySelectorAll('.section-content');
    
    if (sectionContents.length === 0) return;
    
    sectionContents.forEach((element, index) => {
      // Tambahkan delay untuk membuat staggered effect yang ringan
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 100); // 100ms delay antara elemen
    });
  };

  // Panggil addVisibleClass setelah page load
  setTimeout(addVisibleClass, 150);
}

/**
 * Helper untuk membuat element visual berdasarkan kode
 * Digunakan khusus untuk ilustrasi dashboard
 */
export function setupDashboardIllustration(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Membuat ilustrasi dashboard yang lebih menarik dengan ikon dan "data"
  container.innerHTML = `
    <div class="w-full h-auto rounded-xl shadow-md bg-white p-6 md:p-8 border border-gray-100">
      <!-- Navbar ilustrasi aplikasi - lebih lengkap dengan ikon -->
      <div class="w-full h-10 md:h-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg mb-4 md:mb-6 flex items-center shadow-sm">
        <div class="flex items-center gap-1 ml-3">
          <div class="w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>
          <span class="text-sm md:text-base font-medium text-primary">WhatsApp Bot</span>
        </div>
        <div class="flex items-center gap-2 ml-auto mr-3">
          <div class="w-8 h-6 md:w-10 md:h-7 bg-white/80 rounded-md flex items-center justify-center">
            <div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
          </div>
          <div class="w-8 h-6 md:w-10 md:h-7 bg-white/80 rounded-md flex items-center justify-center">
            <div class="w-3 h-3 md:w-4 md:h-4 bg-orange-400 rounded-sm"></div>
          </div>
        </div>
      </div>
      
      <!-- Konten utama ilustrasi aplikasi -->
      <div class="flex gap-3 md:gap-5">
        <!-- Panel sidebar ilustrasi dengan ikon-ikon -->
        <div class="w-1/3 h-48 md:h-52 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg p-3 shadow-sm">
          <div class="flex flex-col gap-3">
            <div class="w-full h-8 bg-white/80 rounded-md flex items-center pl-2 shadow-sm">
              <div class="w-5 h-5 rounded-full bg-primary/20 mr-2 flex-shrink-0 flex items-center justify-center">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div class="w-16 h-3 bg-gray-200 rounded-sm"></div>
            </div>
            <div class="w-full h-8 bg-white/80 rounded-md flex items-center pl-2 shadow-sm">
              <div class="w-5 h-5 rounded-full bg-primary/20 mr-2 flex-shrink-0 flex items-center justify-center">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div class="w-14 h-3 bg-gray-200 rounded-sm"></div>
            </div>
            <div class="w-full h-8 bg-primary/10 rounded-md flex items-center pl-2 shadow-sm">
              <div class="w-5 h-5 rounded-full bg-primary mr-2 flex-shrink-0 flex items-center justify-center">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div class="w-12 h-3 bg-primary/20 rounded-sm"></div>
            </div>
          </div>
        </div>
        
        <!-- Panel konten dan tombol ilustrasi -->
        <div class="w-2/3 flex flex-col gap-3 md:gap-4">
          <div class="w-full flex items-center">
            <div class="text-sm text-gray-500 font-medium">Transaksi</div>
            <div class="ml-auto bg-orange-100 text-primary text-xs px-2 py-1 rounded-full font-medium">DigiFlazz API</div>
          </div>
          
          <!-- Panel data/tabel -->
          <div class="w-full h-24 md:h-28 bg-gray-50 rounded-lg p-2 shadow-sm">
            <div class="flex border-b border-gray-200 py-1">
              <div class="w-1/4 h-4 bg-gray-200 rounded-sm"></div>
              <div class="w-2/4 h-4 bg-gray-200 rounded-sm mx-auto"></div>
              <div class="w-1/4 h-4 bg-gray-200 rounded-sm ml-auto"></div>
            </div>
            <div class="flex py-1 mt-1">
              <div class="w-1/4 h-3 bg-gray-100 rounded-sm"></div>
              <div class="w-2/4 h-3 bg-gray-100 rounded-sm mx-auto"></div>
              <div class="w-1/4 h-3 bg-gray-100 rounded-sm ml-auto"></div>
            </div>
            <div class="flex py-1 mt-1">
              <div class="w-1/4 h-3 bg-gray-100 rounded-sm"></div>
              <div class="w-2/4 h-3 bg-gray-100 rounded-sm mx-auto"></div>
              <div class="w-1/4 h-3 bg-gray-100 rounded-sm ml-auto"></div>
            </div>
          </div>
          
          <!-- Tombol aksi -->
          <div class="flex gap-2 md:gap-3 mt-1">
            <div class="w-1/3 h-10 bg-primary rounded-lg shadow pulse-animation flex items-center justify-center">
              <div class="h-3 w-12 bg-white/30 rounded-full"></div>
            </div>
            <div class="w-1/3 h-10 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center">
              <div class="h-3 w-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}