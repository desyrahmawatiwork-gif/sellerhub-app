export default function AffiliatePage() {
  const affiliates = [
    { name: "Desy Affiliate", code: "DESY10", clicks: 320, sales: 35, commission: "Rp 1.750.000" },
    { name: "Mitra Store", code: "MITRA15", clicks: 280, sales: 28, commission: "Rp 1.400.000" },
    { name: "Jakarta Partner", code: "JKT20", clicks: 190, sales: 19, commission: "Rp 950.000" },
  ];

  return (
    <main className="min-h-screen bg-pink-50 flex">
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-3xl font-bold text-pink-600 mb-10">SellerHub</h1>

        <nav className="flex flex-col gap-4 text-gray-700">
          <a href="/dashboard" className="hover:text-pink-600">Dashboard</a>
          <a href="/dashboard/reseller" className="hover:text-pink-600">Reseller</a>
          <a href="/dashboard/affiliate" className="text-pink-600 font-bold">Affiliate</a>
          <a href="/dashboard/orders" className="hover:text-pink-600">Orders</a>
          <a href="#" className="hover:text-pink-600">Analytics</a>
        </nav>
      </aside>

      <section className="flex-1 p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Affiliate Management
        </h2>

        <p className="text-gray-600 mb-10">
          Pantau kode affiliate, klik, penjualan, dan komisi partner.
        </p>

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-pink-100 text-gray-700">
              <tr>
                <th className="p-5">Nama</th>
                <th className="p-5">Kode</th>
                <th className="p-5">Clicks</th>
                <th className="p-5">Sales</th>
                <th className="p-5">Komisi</th>
              </tr>
            </thead>

            <tbody>
              {affiliates.map((affiliate, index) => (
                <tr key={index} className="border-b hover:bg-pink-50 transition">
                  <td className="p-5 font-medium text-gray-800">{affiliate.name}</td>
                  <td className="p-5">
                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                      {affiliate.code}
                    </span>
                  </td>
                  <td className="p-5 text-gray-600">{affiliate.clicks}</td>
                  <td className="p-5 text-gray-600">{affiliate.sales}</td>
                  <td className="p-5 text-pink-600 font-bold">{affiliate.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}