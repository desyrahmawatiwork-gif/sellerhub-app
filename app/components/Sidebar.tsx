import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-10">SellerHub</h1>

      <nav className="flex flex-col gap-4 text-gray-700">
        <Link href="/dashboard" className="hover:text-pink-600">
          Dashboard
        </Link>

        <Link href="/dashboard/reseller" className="hover:text-pink-600">
          Reseller
        </Link>

        <Link href="/dashboard/affiliate" className="hover:text-pink-600">
          Affiliate
        </Link>

        <Link href="/dashboard/orders" className="hover:text-pink-600">
          Orders
        </Link>

        <Link href="/dashboard/analytics" className="hover:text-pink-600">
          Analytics
        </Link>
      </nav>
    </aside>
  );
}