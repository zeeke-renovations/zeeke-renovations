import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Kitchen Renovation",
    description:
      "Built for everyday living — meals, conversations, and everything in between.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/kitchen-1.png",
    features: [
      "Cabinetry Design",
      "Countertop Installation",
      "Appliance Integration",
      "Tile Backsplash & Flooring",
      "Lighting Design & Installation",
      "Plumbing & Electrical Updates",
    ],
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Make your bathroom a space you want to walk into.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/bathroom-1.png",
    features: [
      "Shower & Tub Installation",
      "Vanity & Storage",
      "Toliets and Waterclosets",
      "Tile & Stone Work",
      "Fixtures & Hardware",
      "Waterproofing & Ventilation",
    ],
  },
  {
    title: "Attics and Basements",
    description:
      "Turn that unused area into something the famiily can enjoy.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/basement-1.png",
    features: [
      "Room Creation and Design",
      "Sheetrock",
      "Flooring",
      "Drop Ceilings",
      "Trim and Finishing Work",
      "Paint and Wall Covering",
    ],
  },
  {
    title: "Interior and Exterior Painting",
    description:
      "Professional painting services.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/painting-1.png",
    features: [
      "Color Consultation",
      "Premium Paint Products",
      "Wall & Ceiling",
      "Trim & Cabinet Refinishing",
      "Exterior Painting",
      "Surface Preparation & Repair",
    ],
  },
  {
    title: "Full Home Renovation",
    description:
      "Complete home transformations from concept to completion.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/remodel-1.png",
    features: [
      "Design Services",
      "Whole Home Scope",
      "Full Interior Renovation",
      "Layout Changes",
      "Updates for Home Sale",
      "Demo Services",
    ],
  },
  {
    title: "Outdoor Services",
    description:
      "Expand your living area with custom decks, patios, and outdoor entertainment spaces.",
    image:
      "https://raw.githubusercontent.com/zeeke-renovations/zr-images/main/deck-2.jpg",
    features: [
      "Decks",
      "Patios",
      "Porches",
      "Outdoor Kitchen",
      "Fencing",
      "Shutters and Finishings",
    ],
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
      className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold">{service.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{service.description}</p>

        <ul className="space-y-3 mb-6">
          {service.features.map((feature: string) => (
            <li key={feature} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#FF8C42] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-[#1a2332] font-semibold">{service.price}</span>
          <motion.button
            className="bg-[#FF8C42] text-white px-6 py-2.5 rounded-lg hover:bg-[#e67a34] transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
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
            Our <span className="text-[#FF8C42]">Serivces</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Renovation solutions tailored to your vision, budget,
            and timeline
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to completion, we offer a smooth and
              transparent renovation experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "In-home consultation to discuss your vision and needs",
              },
              {
                step: "02",
                title: "Design & Quote",
                description:
                  "Design proposal with fair pricing",
              },
              {
                step: "03",
                title: "Construction",
                description:
                  "Quality craftsmanship with regular updates and quality checks",
              },
              {
                step: "04",
                title: "Final Reveal",
                description:
                  "Walkthrough and handoff of your renovated space",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF8C42] text-white rounded-full mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1a2332] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Schedule your free consultation today and let's discuss your
              project
            </p>
            <motion.button
              className="bg-[#FF8C42] text-white px-12 py-5 rounded-lg hover:bg-[#e67a34] transition-all duration-300 shadow-lg text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
