import Sidebar from "@/app/components/Sidebar";

export default function ResellerPage() {
  const resellers = [
    { name: "Mitra Store", type: "Reseller", orders: 28, commission: "Rp 1.400.000", status: "Active" },
    { name: "Desy Affiliate", type: "Affiliate", orders: 35, commission: "Rp 1.750.000", status: "Active" },
    { name: "Jakarta Dropship", type: "Dropship", orders: 19, commission: "Rp 950.000", status: "Pending" },
  ];

  return (
    <main className="min-h-screen bg-pink-50 flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Reseller Management
        </h2>

        <p className="text-gray-600 mb-10">
          Kelola data reseller, affiliate, dan dropship dalam satu dashboard.
        </p>

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-pink-100 text-gray-700">
              <tr>
                <th className="p-5">Nama</th>
                <th className="p-5">Tipe</th>
                <th className="p-5">Total Order</th>
                <th className="p-5">Komisi</th>
                <th className="p-5">Status</th>
              </tr>
            </thead>

            <tbody>
              {resellers.map((reseller, index) => (
                <tr key={index} className="border-b hover:bg-pink-50 transition">
                  <td className="p-5 font-medium text-gray-800">{reseller.name}</td>
                  <td className="p-5 text-gray-600">{reseller.type}</td>
                  <td className="p-5 text-gray-600">{reseller.orders}</td>
                  <td className="p-5 text-pink-600 font-bold">{reseller.commission}</td>
                  <td className="p-5">
                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                      {reseller.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}