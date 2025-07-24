import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Simple effect to load product
  useEffect(() => {
    const loadProduct = () => {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        const foundProduct = getProductById(id);
        setProduct(foundProduct);
        setIsLoading(false);
      }, 500);
    };

    loadProduct();
  }, [id]);

  // Simple handlers
  const handleSaveProduct = () => {
    setIsSaved(!isSaved);
  };

  const handleBuyNow = () => {
    alert(`Added ${quantity} x ${product.title} to cart!`);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Simple star rating component
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={24}
          className={`${
            i < Math.floor(rating)
              ? 'text-yellow-400 fill-current'
              : 'text-white/30'
          }`}
        />
      );
    }
    return <div className="flex items-center">{stars}</div>;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4"></div>
          <p className="text-white/60 text-xl">Loading product...</p>
        </div>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-white/60 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Calculate savings
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              {product.badge && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <StarRating rating={product.rating} />
              <span className="text-white text-lg">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-white/50 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${savings}
                  </span>
                </>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center text-white font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  +
                </button>
              </div>
              <span className="text-white/60">
                Total: ${totalPrice}
              </span>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">What's Included:</h3>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2" size={20} />
                Buy Now
              </button>
              <button 
                onClick={handleSaveProduct}
                className={`bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20 flex items-center justify-center ${
                  isSaved ? 'bg-red-500/20 border-red-500/50' : ''
                }`}
              >
                <Heart className={`mr-2 ${isSaved ? 'fill-current text-red-400' : ''}`} size={20} />
                {isSaved ? 'Saved' : 'Save for Later'}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">30</div>
                  <div className="text-white/60 text-sm">Day Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-white/60 text-sm">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-white/60 text-sm">Lifetime Access</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose This Product?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Created',
                  description: 'Developed by industry professionals with years of experience'
                },
                {
                  title: 'Proven Results',
                  description: 'Thousands of successful students and clients worldwide'
                },
                {
                  title: 'Continuous Updates',
                  description: 'Regular updates to keep content fresh and relevant'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;