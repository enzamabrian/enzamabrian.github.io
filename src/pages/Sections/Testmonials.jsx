import React, { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maliki Abdallah Ireeta',
    role: 'Managing Director',
    company: 'MIB Contractors Limited',
    message:
      'I love my website that was done by him. He met all my requirements seamlessly and provided exceptional attention to detail throughout the process.',
    image: 'https://mibrockcontractorsltd.com/static/media/team%202.6f6e9a1c135a41f64b0d.png',
    stars: 5,
  },
  {
    name: 'Eng. Frankiline Mwesiga',
    role: 'Founder & CEO',
    company: 'Ascend Engineering Services',
    message:
      'Delivered high-quality work when building my company website. Highly recommend for any future web development and technical needs.',
    image: 'https://www.ascendengineeringlimited.com/wp-content/uploads/2024/03/IMG-20240315-WA0005.jpg',
    stars: 5,
  },
  {
    name: 'Dr. Rogers Namwiyiri',
    role: 'CEO and Director',
    company: 'Hope Counselling Uganda',
    message:
      'Working with him was seamless. Great communication, transparency, and execution of website building tasks alongside reliable support.',
    image: 'https://hopecounsellingltdug.com/wp-content/uploads/2024/03/Rogers-Namwiyiri.jpg',
    stars: 5,
  },
];

// Tripled array to ensure extra buffer for seamless infinite loop with 3 visible cards
const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = ({ darkMode }) => {
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate dynamic pagination pages
  const calculatePagination = () => {
    if (!scrollRef.current) return;
    const width = window.innerWidth;
    let itemsPerPage = 1;

    if (width >= 1024) {
      itemsPerPage = 3; // 3 cards in view on large screens
    } else if (width >= 768) {
      itemsPerPage = 2; // 2 cards on tablet
    } else {
      itemsPerPage = 1; // 1 card on mobile
    }

    const pages = Math.ceil(testimonials.length / itemsPerPage);
    setTotalPages(pages);
  };

  // Scroll directly to a target pagination dot index
  const scrollToPage = (pageIndex) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      container.scrollTo({
        left: pageIndex * itemWidth,
        behavior: 'smooth',
      });
    }
  };

  // Track scroll position for active pagination dot indicator
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPos = container.scrollLeft;
      const cardWidth = container.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      if (cardWidth > 0) {
        const page = Math.round(scrollPos / cardWidth) % testimonials.length;
        setCurrentPage(page);
      }
    }
  };

  // Smooth sub-pixel continuous auto-scroll driven by requestAnimationFrame
  useEffect(() => {
    calculatePagination();
    window.addEventListener('resize', calculatePagination);

    const scrollContainer = scrollRef.current;
    if (scrollContainer && scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
    }

    const scrollStep = () => {
      if (!isPaused && scrollRef.current) {
        const container = scrollRef.current;
        const oneSetWidth = container.scrollWidth / 3;

        // Reset scroll position seamlessly when reaching edges
        if (container.scrollLeft <= 0) {
          container.scrollLeft = oneSetWidth;
        } else {
          container.scrollLeft -= 0.8; // Scroll speed
        }
      }
      animationFrameRef.current = requestAnimationFrame(scrollStep);
    };

    animationFrameRef.current = requestAnimationFrame(scrollStep);

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', calculatePagination);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className={`relative py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-500 overflow-hidden ${
        darkMode ? 'bg-dark-bg text-dark-heading' : 'bg-light-bg text-light-heading'
      }`}
    >
      {/* Background Radial Glow mapped to primary color */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none ${
          darkMode ? 'bg-primary/10' : 'bg-primary/20'
        }`}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Client Testimonials
            </h2>

            <p
              className={`max-w-xl text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-dark-muted' : 'text-light-muted'
              }`}
            >
              Here is what leaders and organizations have to say about collaborating with me on their web systems and digital platforms.
            </p>
          </div>
        </div>

        {/* Carousel Container with Entry & Exit Opacity Mask Overlays */}
        <div className="relative w-full">
          {/* Left Fade Mask */}
          <div
            className={`aria-hidden pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-24 lg:w-32 bg-gradient-to-r ${
              darkMode
                ? 'from-dark-bg via-dark-bg/80 to-transparent'
                : 'from-light-bg via-light-bg/80 to-transparent'
            }`}
          />

          {/* Right Fade Mask */}
          <div
            className={`aria-hidden pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-24 lg:w-32 bg-gradient-to-l ${
              darkMode
                ? 'from-dark-bg via-dark-bg/80 to-transparent'
                : 'from-light-bg via-light-bg/80 to-transparent'
            }`}
          />

          {/* Continuous Track */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-8 sm:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {repeatedTestimonials.map((item, index) => (
              <div
                key={index}
                className={`shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col justify-between rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  darkMode
                    ? 'bg-dark-card border-dark-border text-dark-heading shadow-black/40'
                    : 'bg-light-card border-light-border text-light-heading shadow-gray-200/50'
                }`}
              >
                {/* Quote Decorative Icon */}
                <Quote
                  size={40}
                  className={`absolute top-6 right-6 pointer-events-none transition-colors ${
                    darkMode ? 'text-dark-border' : 'text-light-border'
                  }`}
                />

                {/* Message & Rating */}
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p
                    className={`text-sm sm:text-base leading-relaxed italic mb-8 ${
                      darkMode ? 'text-dark-paragraph' : 'text-light-paragraph'
                    }`}
                  >
                    "{item.message}"
                  </p>
                </div>

                {/* Author Information */}
                <div
                  className={`flex items-center gap-4 pt-6 border-t ${
                    darkMode ? 'border-dark-border' : 'border-light-border'
                  }`}
                >
                  <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-sm bg-dark-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-bold truncate text-primary">
                      {item.name}
                    </h4>
                    <p
                      className={`text-xs font-medium truncate ${
                        darkMode ? 'text-dark-paragraph' : 'text-light-paragraph'
                      }`}
                    >
                      {item.role}
                    </p>
                    <p
                      className={`text-xs truncate ${
                        darkMode ? 'text-dark-muted' : 'text-light-muted'
                      }`}
                    >
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Pagination Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => scrollToPage(pageIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === pageIdx
                    ? 'w-8 bg-primary shadow-sm shadow-primary/20'
                    : `w-2.5 ${
                        darkMode
                          ? 'bg-dark-card border border-dark-border hover:bg-dark-border'
                          : 'bg-light-card border border-light-border hover:bg-light-bg'
                      }`
                }`}
                aria-label={`Go to page ${pageIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;