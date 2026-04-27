import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out required fields.");
      return;
      }
          try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          alert("Something went wrong. Try again.");
        }
      } catch (error) {
        alert("Error sending message.");
      }
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(205) 725-4889",
      link: "tel:2057254889",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@zeeke.com",
      link: "mailto:info@zeeke.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Chelsea, AL",
      link: null,
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 8AM-5PM",
      link: null,
    },
  ];

  return (
  <>
    <Helmet>
      <title>Contact Zeeke Renovations | Zeeke Renovations Chelsea AL</title>
      <meta
        name="description"
        content="Bathroom, kitchen, basement, and home remodeling services in Chelsea, AL. Quality craftsmanship with no surprises."
      />
    </Helmet>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[#1a2332] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
        <motion.div
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-[#FF8C42]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your space? Let's discuss your project
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2332] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent outline-none transition-all"
                      placeholder="(205) 725-4889"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Interested in *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#FF8C42] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e67a34] transition-all duration-300 shadow-lg hover:shadow-[#FF8C42]/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2332] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions? We're here to help. Reach out to us through any
                of the following methods and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-[#FF8C42] p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2332] mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-[#FF8C42] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                 <iframe
                  src="https://www.google.com/maps?q=Chelsea,AL&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/*<div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Map Location</p>
                </div>*/}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a2332] py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation and let's bring your vision to life
          </p>
          <motion.a
            href="tel:2057254889"
            className="inline-block bg-[#FF8C42] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e67a34] transition-all duration-300 shadow-lg hover:shadow-[#FF8C42]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us Now: (205) 725-4889
          </motion.a>
        </motion.div>
      </section>
    </div>
  </>
  );
}