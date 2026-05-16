"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";

export default function ResellerPage() {
  const [resellers, setResellers] = useState([
    {
      name: "Mitra Store",
      type: "Reseller",
      orders: 28,
      commission: "Rp 1.400.000",
      status: "Active",
    },
    {
      name: "Desy Affiliate",
      type: "Affiliate",
      orders: 35,
      commission: "Rp 1.750.000",
      status: "Active",
    },
    {
      name: "Jakarta Dropship",
      type: "Dropship",
      orders: 19,
      commission: "Rp 950.000",
      status: "Pending",
    },
  ]);

  const [name, setName] = useState("");
  const [type, setType] = useState("Reseller");
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  function handleAddReseller() {
    if (name.trim() === "") {
      alert("Nama reseller wajib diisi");
      return;
    }

    let resellerStatus = "Active";

    if (type === "Affiliate") {
      resellerStatus = "Pending";
    }

    if (type === "Dropship") {
      resellerStatus = "Review";
    }

    const newReseller = {
      name: name,
      type: type,
      orders: 0,
      commission: "Rp 0",
      status: resellerStatus,
    };

    setResellers([...resellers, newReseller]);
    setName("");
    setType("Reseller");
  }

  function handleDelete() {
    if (deleteIndex === null) return;

    const filteredResellers = resellers.filter(
      (_, index) => index !== deleteIndex
    );

    setResellers(filteredResellers);
    setDeleteIndex(null);
  }

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

        <div className="bg-white p-6 rounded-3xl shadow-md mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            Tambah Reseller
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nama reseller"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="border border-pink-200 rounded-2xl px-4 py-3 outline-none focus:border-pink-500"
            />

            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="border border-pink-200 rounded-2xl px-4 py-3 outline-none focus:border-pink-500"
            >
              <option>Reseller</option>
              <option>Affiliate</option>
              <option>Dropship</option>
            </select>

            <button
              onClick={handleAddReseller}
              className="bg-pink-500 text-white rounded-2xl px-6 py-3 font-bold hover:bg-pink-600 transition"
            >
              Tambah Data
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-pink-100 text-gray-700">
              <tr>
                <th className="p-5">Nama</th>
                <th className="p-5">Tipe</th>
                <th className="p-5">Total Order</th>
                <th className="p-5">Komisi</th>
                <th className="p-5">Status</th>
                <th className="p-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {resellers.map((reseller, index) => (
                <tr key={index} className="border-b hover:bg-pink-50 transition">
                  <td className="p-5 font-medium text-gray-800">
                    {reseller.name}
                  </td>
                  <td className="p-5 text-gray-600">{reseller.type}</td>
                  <td className="p-5 text-gray-600">{reseller.orders}</td>
                  <td className="p-5 text-pink-600 font-bold">
                    {reseller.commission}
                  </td>
                  <td className="p-5">
                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-bold">
                      {reseller.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <button
                      onClick={() => setDeleteIndex(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {deleteIndex !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl w-[400px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Hapus Reseller?
            </h3>

            <p className="text-gray-600 mb-6">
              Data reseller ini akan dihapus dari tabel. Kamu yakin?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteIndex(null)}
                className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Batal
              </button>

              <button
                onClick={handleDelete}
                className="px-5 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}