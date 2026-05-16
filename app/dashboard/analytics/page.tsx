export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-pink-50 flex">
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-3xl font-bold text-pink-600 mb-10">
          SellerHub
        </h1>

        <nav className="flex flex-col gap-4 text-gray-700">
          <a href="/dashboard" className="hover:text-pink-600">
            Dashboard
          </a>

          <a href="/dashboard/reseller" className="hover:text-pink-600">
            Reseller
          </a>

          <a href="/dashboard/affiliate" className="hover:text-pink-600">
            Affiliate
          </a>

          <a href="/dashboard/orders" className="hover:text-pink-600">
            Orders
          </a>

          <a
            href="/dashboard/analytics"
            className="text-pink-600 font-bold"
          >
            Analytics
          </a>
        </nav>
      </aside>

      <section className="flex-1 p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Analytics Overview
        </h2>

        <p className="text-gray-600 mb-10">
          Statistik penjualan reseller dan affiliate secara realtime.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <p className="text-gray-500">Monthly Revenue</p>
            <h3 className="text-4xl font-bold text-pink-600 mt-3">
              Rp 24JT
            </h3>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md">
            <p className="text-gray-500">Total Orders</p>
            <h3 className="text-4xl font-bold text-pink-600 mt-3">
              420
            </h3>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md">
            <p className="text-gray-500">Conversion Rate</p>
            <h3 className="text-4xl font-bold text-pink-600 mt-3">
              68%
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Top Products
          </h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-2">
                <span>Starter Kit</span>
                <span className="text-pink-600 font-bold">85%</span>
              </div>

              <div className="w-full bg-pink-100 rounded-full h-4">
                <div className="bg-pink-500 h-4 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Bundle Duo</span>
                <span className="text-pink-600 font-bold">70%</span>
              </div>

              <div className="w-full bg-pink-100 rounded-full h-4">
                <div className="bg-pink-500 h-4 rounded-full w-[70%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Trial Pack</span>
                <span className="text-pink-600 font-bold">45%</span>
              </div>

              <div className="w-full bg-pink-100 rounded-full h-4">
                <div className="bg-pink-500 h-4 rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}