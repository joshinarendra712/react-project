// Simple product data structure
export const products = [
  {
    id: '1',
    title: 'Creator Mastery Course',
    description: 'Complete guide to building and monetizing your personal brand in 2025',
    price: 299,
    originalPrice: 499,
    category: 'course',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['12 Hours of Content', 'Private Community', 'Templates & Tools', 'Lifetime Access'],
    rating: 4.9,
    reviews: 2847,
    badge: 'Bestseller'
  },
  {
    id: '2',
    title: 'Premium Brand Kit',
    description: 'Professional templates and assets for your brand identity',
    price: 149,
    category: 'template',
    image: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['50+ Templates', 'Logo Variations', 'Social Media Kit', 'Brand Guidelines'],
    rating: 4.8,
    reviews: 1653
  },
  {
    id: '3',
    title: '1-on-1 Coaching',
    description: 'Personalized strategy sessions to accelerate your growth',
    price: 799,
    category: 'service',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['90-Minute Session', 'Custom Strategy', 'Follow-up Support', 'Action Plan'],
    rating: 5.0,
    reviews: 89,
    badge: 'Premium'
  },
  {
    id: '4',
    title: 'Content Calendar Pro',
    description: 'Never run out of content ideas with our comprehensive planning system',
    price: 79,
    category: 'tool',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['365 Content Ideas', 'Scheduling Templates', 'Analytics Dashboard', 'Team Collaboration'],
    rating: 4.7,
    reviews: 956
  },
  {
    id: '5',
    title: 'Influence Mastery Bootcamp',
    description: 'Intensive 7-day program to build authentic influence and authority',
    price: 1299,
    originalPrice: 1999,
    category: 'course',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['7 Live Sessions', 'Expert Mentorship', 'Network Access', 'Certification'],
    rating: 4.9,
    reviews: 445,
    badge: 'Limited'
  },
  {
    id: '6',
    title: 'Social Media Automation',
    description: 'Complete system to automate your social media presence',
    price: 199,
    category: 'tool',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multi-Platform Support', 'AI Content Generation', 'Analytics & Insights', 'Team Management'],
    rating: 4.6,
    reviews: 1234
  }
];

// Simple categories data
export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'course', name: 'Courses' },
  { id: 'template', name: 'Templates' },
  { id: 'service', name: 'Services' },
  { id: 'tool', name: 'Tools' }
];

// Simple helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const searchProducts = (searchTerm) => {
  return products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};