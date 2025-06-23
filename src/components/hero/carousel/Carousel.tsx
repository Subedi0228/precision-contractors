import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Nice for hero images
    arrows: false, // We'll use custom arrows
    pauseOnHover: true,
  };

  // Navigation handlers using imperative API
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  // Optional: Go to specific slide
  const goToSlide = (slideIndex: number) => {
    sliderRef.current?.slickGoTo(slideIndex);
  };

  // Your slide data
  const slides = [
    {
      id: 1,
      image: 'public/images/image1.png',
      title: 'PROTECTING WHAT MATTERS',
      subtitle: 'YOUR ROOF AND SIDING, YOUR HOME\'S FIRST LINE OF DEFENSE BUILT TO WEATHER ANY STORM.'
    },
    {
      id: 2,
      image: 'public/images/image1.png',
      title: 'QUALITY CRAFTSMANSHIP',
      subtitle: 'PRECISION WORKMANSHIP THAT STANDS THE TEST OF TIME.'
    },
    // Add more slides as needed
  ];

  return (
    <div className="hero-carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <div 
              className="hero-background"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                position: 'relative'
              }}
            >
              {/* Content overlay */}
              <div className="hero-content">
                <div className="hero-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button 
        className="nav-arrow nav-arrow-left"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      
      <button 
        className="nav-arrow nav-arrow-right"
        onClick={goToNext}
        aria-label="Next slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default HeroCarousel;