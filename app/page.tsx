export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 sticky top-0 bg-white/70 backdrop-blur-md z-50">
        <h1 className="text-3xl font-bold text-pink-600">
          SellerHub
        </h1>

        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">
        
        <h2 className="text-6xl font-bold text-gray-800 leading-tight max-w-4xl">
          Kelola Reseller & Affiliate
          <span className="text-pink-600"> Lebih Mudah</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Platform modern untuk membantu UMKM mengelola reseller,
          affiliate, dropship, dan penjualan dalam satu dashboard.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
            Mulai Gratis
          </button>

          <button className="px-8 py-4 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-100 transition">
            Lihat Demo
          </button>
        </div>

      </section>

      {/* Features Section */}
<section className="mt-40 px-10 pb-20">

  <div className="text-center mb-16">
    <h3 className="text-4xl font-bold text-gray-800">
      Fitur Unggulan
    </h3>

    <p className="text-gray-600 mt-4">
      Semua yang dibutuhkan UMKM untuk mengelola reseller modern.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition">
      <h4 className="text-2xl font-bold text-pink-600 mb-4">
        Dashboard Analytics
      </h4>

      <p className="text-gray-600">
        Pantau penjualan reseller dan affiliate secara realtime.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition">
      <h4 className="text-2xl font-bold text-pink-600 mb-4">
        Affiliate Tracking
      </h4>

      <p className="text-gray-600">
        Kelola link affiliate dan komisi otomatis dengan mudah.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition">
      <h4 className="text-2xl font-bold text-pink-600 mb-4">
        Multi User Access
      </h4>

      <p className="text-gray-600">
        Support admin, reseller, affiliate, dan dropship dalam satu platform.
      </p>
    </div>

  </div>
</section>
    </main>
  );
}