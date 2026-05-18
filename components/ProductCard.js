import Image from "next/image";

export default function ProductCard({ product }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    window.location.href = data.paymentUrl;
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <div className="relative h-48 mb-3 bg-gray-100 rounded">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{product.company}</p>
      <p className="text-lg font-bold text-red-600 mb-4">{product.price} EGP</p>
      <button
        onClick={handleCheckout}
        className="w-full bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
      >
        Buy Now
      </button>
    </div>
  );
}
