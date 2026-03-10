import { useState } from "react";
import ProductImages from "@/images";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  totalRatings: number;
}

const productsData: Product[] = [
  {
    id: 1,
    name: "Colgate Total Advanced",
    category: "Toothpaste",
    image: ProductImages[0],
    description: "24-hour protection against cavities, plaque, and gingivitis.",
    price: 4.99,
    rating: 4.7,
    totalRatings: 245,
  },
  {
    id: 2,
    name: "Oral-B Pro 1000 Electric",
    category: "Electrical",
    image: ProductImages[1],
    description: "Pressure sensor + 3D cleaning action.",
    price: 49.99,
    rating: 4.5,
    totalRatings: 189,
  },
  {
    id: 3,
    name: "Crest Kids Sparkle Gel",
    category: "Kids",
    image: ProductImages[2],
    description: "Fun bubblegum flavor with fluoride.",
    price: 3.49,
    rating: 4.8,
    totalRatings: 112,
  },
  {
    id: 4,
    name: "Philips Sonicare DiamondClean",
    category: "Electrical",
    image: ProductImages[3],
    description: "Sonic technology with premium brush head.",
    price: 89.99,
    rating: 4.9,
    totalRatings: 320,
  },
  {
    id: 5,
    name: "Sensodyne Rapid Relief",
    category: "Toothpaste",
    image: ProductImages[4],
    description: "Fast relief from tooth sensitivity.",
    price: 5.49,
    rating: 4.6,
    totalRatings: 156,
  },
  {
    id: 6,
    name: "Reach Soft Bristle (4-pack)",
    category: "Brushes",
    image: ProductImages[5],
    description: "Gentle cleaning for daily use.",
    price: 6.99,
    rating: 4.2,
    totalRatings: 98,
  },
  {
    id: 7,
    name: "Waterpik Aquarius Water Flosser",
    category: "Electrical",
    image: ProductImages[6],
    description: "10 pressure settings for deep cleaning.",
    price: 69.99,
    rating: 4.4,
    totalRatings: 134,
  },
  {
    id: 8,
    name: " Tom's of Maine Natural Kids",
    category: "Kids",
    image: ProductImages[7],
    description: "Silly strawberry flavor, fluoride-free option.",
    price: 4.29,
    rating: 4.3,
    totalRatings: 87,
  },
];

const Product = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [hoverRating, setHoverRating] = useState<number>(0);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  // Filtered products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = ["All", "Toothpaste", "Brushes", "Kids", "Electrical"];

  // Handle rating

  const handleRating = (productId: number, newRating: number) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newTotal = p.totalRatings + 1;
          const newAvg = (p.rating * p.totalRatings + newRating) / newTotal;
          return {
            ...p,
            rating: parseFloat(newAvg.toFixed(1)),
            totalRatings: newTotal,
          };
        }
        return p;
      }),
    );
    // Reset hover after rating
    setHoverRating(0);
    setHoveredProductId(null);
  };

  // Render stars for display
  const renderRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const value = i + 1;
      const isFilled = value <= Math.floor(rating);
      return (
        <Star
          key={i}
          size={16}
          className={`transition-colors ${
            isFilled
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 fill-transparent"
          }`}
        />
      );
    });
  };

  // Render interactive rating stars
  const renderInteractiveStars = (product: Product) => {
    return Array.from({ length: 5 }, (_, i) => {
      const value = i + 1;
      const isHovered = hoveredProductId === product.id && value <= hoverRating;
      const isFilled = value <= Math.floor(product.rating);

      return (
        <button
          key={i}
          type="button"
          onClick={() => handleRating(product.id, value)}
          onMouseEnter={() => {
            setHoverRating(value);
            setHoveredProductId(product.id);
          }}
          onMouseLeave={() => {
            setHoverRating(0);
            setHoveredProductId(null);
          }}
          className="focus:outline-none transition-transform hover:scale-110"
        >
          <Star
            size={24}
            strokeWidth={1.5}
            className={`transition-colors ${
              isHovered || (hoveredProductId !== product.id && isFilled)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 fill-transparent"
            }`}
          />
        </button>
      );
    });
  };

  const containerRef = useScrollReveal<HTMLElement>({
    childSelector: ".reveal-item",
    stagger: 0.1,
  });

  return (
    <>
      <section
        ref={containerRef}
        id="products"
        className="py-30 relative lg:py-36 bg-linear-to-b from-white to-sky-300"
      >
        {/* Background Decor */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse hidden md:block"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000 hidden md:block"></div>

        <div className="relative z-10 w-full mx-auto px-6 lg:px-26">
          <div className="reveal-item flex flex-col justify-between items-start md:items-center mb-12 gap-6">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-28 gap-8">
              <div className="max-full text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-sky-600 font-bold tracking-[0.2em] text-xs mb-6">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
                  BROWSE OUR PRODUCTS
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-950 via-sky-800 to-indigo-900 leading-[1.1] tracking-tight">
                  Buy High-Quality Dental Products
                </h2>
              </div>
              <div className="hidden lg:flex flex-col items-end max-w-sm text-right">
                <p className="text-lg text-slate-500 font-medium border-l-2 border-sky-300 pl-6 border-opacity-50">
                  Essential daily care to professional-grade solutions, our
                  products help you maintain strong teeth, healthy gums, and
                  long-lasting oral hygiene.
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex w-full justify-end flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-sky-600 text-white shadow-lg"
                      : "bg-white border border-gray-200 hover:border-sky-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="reveal-item bg-gradient-to-br from-indigo-600/60 to-slate-700/40 rounded-3xl overflow-hidden border border-gray-100 hover:border-sky-200 group"
              >
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 text-xs font-mono px-3 py-1 rounded-full">
                    ${product.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="uppercase text-[10px] tracking-[1px] text-emerald-600 font-medium mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-xl leading-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {renderRatingStars(product.rating)}
                      <span className="text-xs text-gray-500 ml-2 font-mono">
                        ({product.totalRatings})
                      </span>
                    </div>
                  </div>

                  {/* Interactive Rating */}
                  <div className="border-t pt-6">
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Rate this product
                    </div>
                    <div className="flex gap-1">
                      {renderInteractiveStars(product)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
