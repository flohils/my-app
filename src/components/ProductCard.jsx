// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  // Fungsi untuk memformat harga menjadi Rupiah
  const formatRupiah = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img className="rounded-t-lg object-cover w-full h-48" src={product.image} alt={product.title} />
      <div className="p-4">
        <h5 className="text-lg font-semibold">{product.title}</h5>
        <p className="text-gray-700">{formatRupiah(product.price)}</p>
        <Link to={`/products/${product.id}`} className="block w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-center">
          View Details
        </Link>
      </div>
    </div>
  );
}
