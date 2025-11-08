import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
const products = [
  {
    id: 1,
    name: "Premium Laptop Pro",
    category: "Laptops",
    price: "ksh100,299",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    specs: "Intel i7, 16GB RAM, 512GB SSD",
  },
  {
    id: 2,
    name: "Business Ultrabook",
    category: "Laptops",
    price: "ksh80,000",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    specs: "Intel i5, 8GB RAM, 256GB SSD",
  },
  {
    id: 3,
    name: "Gaming Laptop Elite",
    category: "Laptops",
    price: "ksh 150,499",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    specs: "Intel i9, 32GB RAM, 1TB SSD, RTX 4070",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Accessories",
    price: "ksh 13,499",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    specs: "Active Noise Cancellation, 30hr battery",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: "ksh 9,999",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop",
    specs: "RGB Backlit, Cherry MX switches",
  },
  {
    id: 6,
    name: "Wireless Mouse Pro",
    category: "Accessories",
    price: "ksh 4,499",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    specs: "Ergonomic, 16000 DPI",
  },
];

export const Products = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <h3 className="text-xl md:text-3xl pl-3 text-bold">Our Products</h3>
        <div className="p-4 md:p-8 justify-center">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search for products..."
              className="input w-full md:w-1/4"
            />
            <div className="flex w-full  md:w-1/2 gap-2">
              <select className="select select-bordered w-1/2 mt-2">
                <option disabled selected>
                  Filter by category
                </option>
                <option>All</option>
                <option>Laptops</option>
                <option>Accessories</option>
              </select>
              <select
                name="grid "
                className="select select-bordered w-1/2 mt-2"
              >
                <option disabled selected>
                  Sort by
                </option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Search
            </button>
          </div>
        </div>
        <div>
          {products.length === 0 ? (
            <p className="text-center">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 md:p-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card card-compact w-full bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-lg">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.specs}</p>
                    <p className="text-xl font-bold text-blue-600">
                      {product.price}
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
