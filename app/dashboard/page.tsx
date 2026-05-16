import Sidebar from "@/app/components/Sidebar";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-pink-50 flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Dashboard Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-gray-500">Total Reseller</h3>
            <p className="text-4xl font-bold text-pink-600 mt-4">120</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-gray-500">Total Sales</h3>
            <p className="text-4xl font-bold text-pink-600 mt-4">Rp 24JT</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-gray-500">Affiliate Active</h3>
            <p className="text-4xl font-bold text-pink-600 mt-4">45</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Recent Orders
            </h3>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between border-b pb-3">
                <span>Order #001 - Reseller A</span>
                <span className="text-pink-600 font-bold">Rp 450K</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Order #002 - Reseller B</span>
                <span className="text-pink-600 font-bold">Rp 320K</span>
              </div>

              <div className="flex justify-between">
                <span>Order #003 - Affiliate C</span>
                <span className="text-pink-600 font-bold">Rp 210K</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Top Affiliate
            </h3>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between border-b pb-3">
                <span>Desy Affiliate</span>
                <span className="text-pink-600 font-bold">35 Sales</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Mitra Store</span>
                <span className="text-pink-600 font-bold">28 Sales</span>
              </div>

              <div className="flex justify-between">
                <span>Reseller Jakarta</span>
                <span className="text-pink-600 font-bold">19 Sales</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}