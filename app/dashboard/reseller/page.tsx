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
  const [search, setSearch] = useState("");
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [popupMessage, setPopupMessage] = useState("");

  const filteredResellers = resellers.filter((reseller) =>
    reseller.name.toLowerCase().includes(search.toLowerCase())
  );

  function getStatusByType(selectedType: string) {
    if (selectedType === "Affiliate") return "Pending";
    if (selectedType === "Dropship") return "Review";
    return "Active";
  }

  function handleAddReseller() {
    if (name.trim() === "") {
      setPopupMessage("Nama reseller wajib diisi.");
      return;
    }

    const isDuplicate = resellers.some(
      (reseller, index) =>
        reseller.name.toLowerCase() === name.toLowerCase() &&
        index !== editIndex
    );

    if (isDuplicate) {
      setPopupMessage("Nama reseller sudah ada.");
      return;
    }

    const newReseller = {
      name: name,
      type: type,
      orders: 0,
      commission: "Rp 0",
      status: getStatusByType(type),
    };

    if (editIndex !== null) {
      const updatedResellers = [...resellers];
      updatedResellers[editIndex] = newReseller;
      setResellers(updatedResellers);
      setEditIndex(null);
    } else {
      setResellers([...resellers, newReseller]);
    }

    setName("");
    setType("Reseller");
  }

  function handleEdit(indexToEdit: number) {
    const selectedReseller = resellers[indexToEdit];

    setName(selectedReseller.name);
    setType(selectedReseller.type);
    setEditIndex(indexToEdit);
  }

  function handleCancelEdit() {
    setName("");
    setType("Reseller");
    setEditIndex(null);
  }

  function handleDelete() {
    if (deleteIndex === null) return;

    const filteredData = resellers.filter((_, index) => index !== deleteIndex);

    setResellers(filteredData);
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
            {editIndex !== null ? "Edit Reseller" : "Tambah Reseller"}
          </h3>

          <div className="mb-5">
            <input
              type="text"
              placeholder="Cari reseller..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full border border-pink-200 rounded-2xl px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-4">
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
              {editIndex !== null ? "Update Data" : "Tambah Data"}
            </button>

            {editIndex !== null && (
              <button
                onClick={handleCancelEdit}
                className="border border-gray-300 text-gray-700 rounded-2xl px-6 py-3 font-bold hover:bg-gray-100 transition"
              >
                Batal Edit
              </button>
            )}
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
              {filteredResellers.map((reseller) => {
                const originalIndex = resellers.findIndex(
                  (item) =>
                    item.name === reseller.name &&
                    item.type === reseller.type &&
                    item.orders === reseller.orders &&
                    item.commission === reseller.commission
                );

                return (
                  <tr
                    key={`${reseller.name}-${originalIndex}`}
                    className="border-b hover:bg-pink-50 transition"
                  >
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
                    <td className="p-5 flex gap-2">
                      <button
                        onClick={() => handleEdit(originalIndex)}
                        className="bg-yellow-400 text-white px-4 py-2 rounded-xl hover:bg-yellow-500 transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => setDeleteIndex(originalIndex)}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
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

      {popupMessage && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl w-[380px] text-center">
            <h3 className="text-2xl font-bold text-pink-600 mb-3">
              Oops!
            </h3>

            <p className="text-gray-600 mb-6">{popupMessage}</p>

            <button
              onClick={() => setPopupMessage("")}
              className="px-6 py-3 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition"
            >
              Oke
            </button>
          </div>
        </div>
      )}
    </main>
  );
}