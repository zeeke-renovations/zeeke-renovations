import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  
 {
    title: "Bathroom Remodeling",
    description:
      "Make your bathroom a space you want to walk into.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/ser-bath.png",
    features: ["Showers/tubs", "Custom Tiling", "Vanities"],
  },
  {
    title: "Attic / Basement Renovations",
    description:
      "Turn unused areas into a place you didn't know you could live without.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/ser-attic.png",
    features: ["Family room", "Home Gym", "Man Caves"],
  },
  {
    title: "Kitchen Renovation",
    description:
      "Built for everyday living—meals, conversations, and everything in between.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/ser-kit.png",
    features: ["Cabinetry", "Countertops", "Islands"],
  },
  {
    title: "Interior / Exterior Painting",
    description:
      "Professional painting services with premium paints and flawless finishes.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/ser-paint.png",
    features: ["Color Consulting", "Quality Paint", "Sheetrock and Trim"],
  },
  {
    title: "Outdoor Spaces",
    description:
      "Enhance your outdoor areas with custom decks and fences.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/ser-deck.png",
    features: ["Decks", "Fencing", "Shutters"],
  },
  {
    title: "Full Home Remodeling",
    description:
      "Complete home transformations from start to finish.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/ser-reno.png",
    features: ["Whole-Home Scope", "Layout Changes", "Design and Flow"],
  },
];

const galleryItems = [
  {
    title: "",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/kit-03.jpg",
    category: "Kitchen",
  },
  {
    title: "",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bath-03.jpg",
    category: "Bathroom",
  },
  {
    title: "",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/lr-2.jpg",
    category: "Living Room",
  },
  {
    title: "",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/base-01.jpg",
    category: "Basement",
  },
  {
    title: "",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/deck-02.jpg",
    category: "Deck",
  },
  {
    title: "",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/lr-22.png",
    category: "Remodel",
  },
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-[#1a2332] mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-4">
          {service.features.map((feature: string) => (
            <li key={feature} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-[#FF8C42] mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <motion.button
          className="text-[#FF8C42] font-medium flex items-center group-hover:gap-2 gap-1 transition-all"
          whileHover={{ x: 5 }}
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function GalleryCard({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
    >
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/90 via-[#1a2332]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <span className="inline-block bg-[#FF8C42] text-white px-3 py-1 rounded-full text-sm mb-2">
            {item.category}
          </span>
          <h4 className="text-white">{item.title}</h4>
        </motion.div>
      </div>
    </motion.div>
  );
}

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && e.type !== "click") return;

    const container = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - container.left) / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div
      className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
      onClick={handleMove}
    >
      {/* After Image */}
      <img
        src="https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bath-02.jpg"
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image with Clip */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src="https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bath-01.jpg"
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-[#1a2332] absolute left-1" />
          <ChevronRight className="w-5 h-5 text-[#1a2332] absolute right-1" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">
        After
      </div>
    </div>
  );
}

export function Home() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const ctaRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[40vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background with Floor Plan */}
        <div className="absolute inset-0 z-0 bg-[#3a4556]">
          {/* Floor Plan Overlay */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/z-circle.png')`,
              backgroundSize: '50%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/80 via-[#1a2332]/60 to-[#1a2332]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
          </motion.div>
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="block text-lg sm:text-xl md:text-5xl font-bold text-[#FF8C42] px-2 mt-14 sm:mt-6 leading-tight">
              Turning Your Ideas into Something Real
            </span>
            <span className="block text-base sm:text-xl md:text-3xl font-bold mt-3 px-4 sm:px-2 leading-tight">
              Residential renovation services for Chelsea, AL and surrounding areas
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
          <Link to="/contact">
            <motion.button
              className="relative bg-[#FF8C42] text-white px-6 py-3 rounded-lg overflow-hidden group text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold">
                Get a Free Estimate
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#e67a34] to-[#FF8C42]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
          <Link to="/gallery">
            <motion.button
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a2332] transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
              Residential Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality craftsmanship, built right with no surprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/services">
              <motion.button
                className="bg-[#1a2332] text-white px-8 py-4 rounded-lg hover:bg-[#2a3342] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/zeeke-4.png"
                  alt="Zeeke Renovations"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-12 -right-4 md:-bottom-12 md:-right-4 bg-[#FF8C42] text-white p-4 rounded-xl shadow-xl">
                  <div className="text-1xl font-bold">License # 1221122</div>
                  <div className="text-1x1">Built Right, No Surprises</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6">
                Quality Craftsmanship, <span className="text-[#FF8C42]">Trusted Results</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Zeeke Renovations mission is simple - do honest, high-quality work that holds up while making the process simple and reliable for the homeowner.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Licensed & Insured Professionals",
                  "Premium Materials & Finishes",
                  "On-Time Project Completion",
                  "Honest Pricing & Communication",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#FF8C42] mr-3 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              {/* Hidden - can be re-enabled later
              <Link to="/about">
                <motion.button
                  className="bg-[#1a2332] text-white px-8 py-4 rounded-lg hover:bg-[#2a3342] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
              </Link>
              */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-[#1a2332] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: parallaxY }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0aDJWMGgtMnpNMzAgMTRoMlYwSDMwek0yNCAxNGgyVjBoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gallery
            </h2>
            {/*<p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our gallery to see recent work
            </p>*/}
          </motion.div>

          {/* Before/After Slider */}
          <div className="mb-12 max-w-4xl mx-auto">
            <BeforeAfterSlider />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} item={item} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/gallery">
              <motion.button
                className="bg-[#FF8C42] text-white px-8 py-4 rounded-lg hover:bg-[#e67a34] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Gallery
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Strong CTA Section with Parallax */}
      <section
        ref={ctaRef}
        className="relative py-32 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: parallaxY }}
        >
          <img
            src="https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/zeeke-banner-1.png"
            alt="CTA Background"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/90 to-[#1a2332]/95" />
        </motion.div>

        <div className="relative z-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 pt-20">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Get a free consultation and estimate. Let's bring your vision to
              life!
            </p>
            <Link to="/contact">
            <motion.button
              className="relative bg-[#FF8C42] text-white px-12 py-5 rounded-lg overflow-hidden group text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 140, 66, 0.5)",
                  "0 0 40px rgba(255, 140, 66, 0.8)",
                  "0 0 20px rgba(255, 140, 66, 0.5)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
              }}
            >
              <span className="relative z-10">Schedule Free Consultation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#e67a34] to-[#FF8C42]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}