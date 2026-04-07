import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Kitchen",
    category: "Kitchen",
    location: "Chelsea, Al",
    year: "2023",
    description:
      "Opened up wall into the living room, new countertops, open shelving, new appliances",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/kit-05.png",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/kit-01.jpg",
  },
  {
    id: 2,
    title: "Bathroom",
    category: "Bathroom",
    location: "Chelsea, AL",
    year: "2024",
    description:
      "Gutted existing hall bath, put in new tub/shower, custom tile, toilet and vanity",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bath-02.jpg",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bath-01.jpg",
  },
  {
    id: 3,
    title: "Bathroom",
    category: "Bathroom",
    location: "Chelsea, AL",
    year: "2024",
    description:
      "New shower, new vanity,tiled floor, shiplap around the tub and behind mirrors, new trim, painted.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bath-12.png",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bath-11.jpg",
  },
  {
    id: 4,
    title: "Living Room",
    category: "Full Home",
    location: "Chelsea, AL",
    year: "2024",
    description:
      "Water damaged, reframed, sheetrock, tile around fireplace, trim, painted",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/lr-4.jpg",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/lr-3.jpg",
  },
  {
    id: 5,
    title: "Living Room",
    category: "Full Home",
    location: "Chelsea,AL",
    year: "2025",
    description:
      "Removed popcorn ceiling, distressed fireplace, painted",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/lr-12.jpg",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/lr-11.jpg",
  },
  {
    id: 6,
    title: "Living Room",
    category: "Painting",
    location: "Chelsea, AL",
    year: "2025",
    description:
      "Painted wall and trim.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/painting-1.png",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/painting-2.png",
  },
  {
    id: 7,
    title: "Deck",
    category: "Outdoor",
    location: "Alabaster,AL",
    year: "2023",
    description:
      "12 x 60 Deck with Gazebo for hottub",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/deck-03.jpg",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/deck-01.jpg",
  },
  {
    id: 8,
    title: "Deck extension",
    category: "Outdoor",
    location: "Chelsea, AL",
    year: "2025",
    description:
      "Extended deck to 12 x 60.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/deck-24.jpg",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/deck-21.jpg",
  },
  {
    id: 9,
    title: "Front Porch",
    category: "Outside",
    location: "Chelsea, AL",
    year: "2023",
    description:
      "Removed brick stairs, increased landing from 3 ft to 8 ft in length, built rustic style front porch.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/fp-2.jpg",
    beforeImage:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/fp-1.jpg",
  },
];

const categories = [
  "Kitchen",
  "Bathroom",
  "Attic/Basement",
  "Painting",
  "Outdoor",
  "Full Home",
  "All",
];

function BeforeAfterSlider({ item }: { item: any }) {
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
        src={item.image}
        alt="After"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Before Image with Clip */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={item.beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-contain"
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

function GalleryModal({
  item,
  onClose,
}: {
  item: any;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white text-[#1a2332] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <BeforeAfterSlider item={item} />

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-[#FF8C42] text-white px-4 py-1.5 rounded-full text-sm">
                  {item.category}
                </span>
                <span className="text-gray-500">{item.year}</span>
              </div>

              <h2 className="text-3xl font-bold text-[#1a2332] mb-2">
                {item.title}
              </h2>
              <p className="text-gray-500 mb-6">{item.location}</p>

              <p className="text-gray-700 mb-8">{item.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#1a2332] to-[#2a3342] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0aDJWMGgtMnpNMzAgMTRoMlYwSDMwek0yNCAxNGgyVjBoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FF8C42]">Gallery</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Few Before and After Pictures .... More coming soon!!!
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#FF8C42] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Transformation
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Let's bring your vision to life. Get your free quote
              today!
            </p>
            <motion.button
              className="bg-[#FF8C42] text-white px-12 py-5 rounded-lg hover:bg-[#e67a34] transition-all duration-300 shadow-lg text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedItem && (
          <GalleryModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: any;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block bg-[#FF8C42] text-white px-3 py-1 rounded-full text-sm mb-2">
            {item.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-1">
            {item.title}
          </h3>
          <p className="text-gray-200 text-sm">{item.location}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
