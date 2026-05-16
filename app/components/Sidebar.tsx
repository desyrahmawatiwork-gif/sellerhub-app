export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-10">SellerHub</h1>

      <nav className="flex flex-col gap-4 text-gray-700">
        <a href="/dashboard" className="hover:text-pink-600">Dashboard</a>
        <a href="/dashboard/reseller" className="hover:text-pink-600">Reseller</a>
        <a href="/dashboard/affiliate" className="hover:text-pink-600">Affiliate</a>
        <a href="/dashboard/orders" className="hover:text-pink-600">Orders</a>
        <a href="/dashboard/analytics" className="hover:text-pink-600">Analytics</a>
      </nav>
    </aside>
  );
}