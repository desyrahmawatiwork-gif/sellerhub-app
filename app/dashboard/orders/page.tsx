export default function OrdersPage() {
  const orders = [
    { id: "#001", customer: "Ayu Store", product: "Starter Kit", total: "Rp 450.000", status: "Paid" },
    { id: "#002", customer: "Mitra Store", product: "Bundle Duo", total: "Rp 320.000", status: "Process" },
    { id: "#003", customer: "Jakarta Dropship", product: "Trial Pack", total: "Rp 210.000", status: "Pending" },
  ];

  return (
    <main className="min-h-screen bg-pink-50 flex">
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-3xl font-bold text-pink-600 mb-10">SellerHub</h1>

        <nav className="flex flex-col gap-4 text-gray-700">
          <a href="/dashboard" className="hover:text-pink-600">Dashboard</a>
          <a href="/dashboard/reseller" className="hover:text-pink-600">Reseller</a>
          <a href="#" className="hover:text-pink-600">Affiliate</a>
          <a href="/dashboard/orders" className="text-pink-600 font-bold">Orders</a>
          <a href="#" className="hover:text-pink-600">Analytics</a>
        </nav>
      </aside>

      <section className="flex-1 p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Orders Management
        </h2>

        <p className="text-gray-600 mb-10">
          Pantau pesanan reseller, affiliate, dan dropship secara realtime.
        </p>

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-pink-100 text-gray-700">
              <tr>
                <th className="p-5">Order ID</th>
                <th className="p-5">Customer</th>
                <th className="p-5">Produk</th>
                <th className="p-5">Total</th>
                <th className="p-5">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-pink-50 transition">
                  <td className="p-5 font-bold text-gray-800">{order.id}</td>
                  <td className="p-5 text-gray-600">{order.customer}</td>
                  <td className="p-5 text-gray-600">{order.product}</td>
                  <td className="p-5 text-pink-600 font-bold">{order.total}</td>
                  <td className="p-5">
                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                      {order.status}
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