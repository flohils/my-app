// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengambil data produk berdasarkan ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <img className="w-full md:w-1/2 object-cover rounded-lg" src={product.image} alt={product.title} />
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: Rp {product.price.toLocaleString()}</p>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">Add to Cart</button>
          <Link to="/products" className="block mt-4 text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
