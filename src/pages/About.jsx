import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Users, Calendar, MapPin, Heart } from 'lucide-react';

const About = () => {
  // Simple state for interactive elements
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Simple animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Simple data arrays
  const stats = [
    { value: '50K+', label: 'Students Taught' },
    { value: '95%', label: 'Success Rate' },
    { value: '100+', label: 'Countries Reached' },
    { value: '4.9/5', label: 'Average Rating' }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started with a simple blog and 100 followers, sharing authentic stories about entrepreneurship.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      year: '2021',
      title: 'First Course Launch',
      description: 'Created and launched the first digital course, helping 500+ students build their personal brands.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2022',
      title: 'Community Growth',
      description: 'Built a thriving community of 10K+ creators and entrepreneurs across social platforms.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'Business Expansion',
      description: 'Launched consulting services and premium coaching programs with 95% client satisfaction.',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Featured in major publications and recognized as a top creator economy expert.',
      icon: MapPin,
      color: 'from-purple-500 to-violet-500'
    },
    {
      year: '2025',
      title: 'IndieBrand Vision',
      description: 'Building the ultimate platform for creators to monetize their passion and build sustainable businesses.',
      icon: Award,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The strategies I learned completely transformed my approach to content creation. My engagement increased by 300% in just 3 months!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'E-commerce Entrepreneur',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'IndieBrand helped me scale my business from $10K to $100K in revenue. The community support is incredible!',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Digital Marketer',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The personalized coaching sessions gave me clarity on my brand direction. Best investment I\'ve made in my career.',
      rating: 5
    }
  ];

  const benefits = [
    {
      title: 'Expert Created',
      description: 'Developed by industry professionals with years of experience',
      icon: '🎯'
    },
    {
      title: 'Proven Results',
      description: 'Thousands of successful students and clients worldwide',
      icon: '📈'
    },
    {
      title: 'Continuous Updates',
      description: 'Regular updates to keep content fresh and relevant',
      icon: '🔄'
    }
  ];

  // Simple helper functions
  const handleMilestoneClick = (index) => {
    setSelectedMilestone(selectedMilestone === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Founder"
                className="w-full h-full object-cover rounded-full border-4 border-white/20 group-hover:border-purple-400/50 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 group-hover:from-purple-400/30 group-hover:to-cyan-400/30 transition-all duration-300"></div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Hi, I'm
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Alex Rivera
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Creator economy expert, entrepreneur, and mentor helping ambitious individuals 
            build authentic personal brands and sustainable online businesses. From zero to 
            seven figures, I've walked the path and now I'm here to guide you on yours.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">My Mission</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-white/80 text-center max-w-4xl mx-auto leading-relaxed">
              To democratize entrepreneurship by providing creators and aspiring business owners 
              with the tools, knowledge, and community they need to transform their passions into 
              profitable, sustainable ventures. I believe everyone has a unique story worth sharing 
              and monetizing.
            </p>
          </div>
        </motion.div>

        {/* Interactive Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
            <p className="text-xl text-white/70">
              Click on any milestone to learn more about that phase
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isSelected = selectedMilestone === index;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <motion.div
                        className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ml-12 md:ml-0 cursor-pointer transition-all duration-300 ${
                          isSelected ? 'bg-white/20 border-white/40 scale-105' : 'hover:bg-white/15'
                        }`}
                        onClick={() => handleMilestoneClick(index)}
                        whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center mb-3">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${milestone.color} mr-3`}>
                            <IconComponent className="text-white" size={20} />
                          </div>
                          <span className={`text-sm font-semibold text-white bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent px-3 py-1 rounded-full border border-white/20`}>
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className={`text-white/70 transition-all duration-300 ${
                          isSelected ? 'text-white/90' : ''
                        }`}>
                          {milestone.description}
                        </p>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4 pt-4 border-t border-white/20"
                          >
                            <p className="text-sm text-purple-300">
                              Click again to collapse this milestone
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-slate-900 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isSelected ? 'scale-125' : 'hover:scale-110'
                    }`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <div className="flex-1"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Interactive Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What People Say</h2>
            <p className="text-xl text-white/70">
              Stories from our amazing community members
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center"
              >
                <Quote className="text-purple-400 mx-auto mb-6" size={48} />
                <p className="text-xl text-white/90 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white/20"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-white/60">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                →
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-purple-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Me?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20 hover:border-white/30 transition-all duration-300">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have transformed their passion into profit. 
              Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;