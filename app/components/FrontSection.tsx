"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface PaintScenario {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  tip: string;
}

const paintScenarios: PaintScenario[] = [
  {
    id: "interior",
    title: "Interior Acrylic",
    description: "Smooth, durable finishes perfect for living spaces and modern interiors.",
    imageUrl: "/images/3.png",
    icon: "🏠",
    tip: "Best for walls, ceilings, and high-traffic indoor areas."
  },
  {
    id: "exterior",
    title: "Exterior Coating",
    description: "Weather-resistant coatings designed to protect your home from harsh conditions.",
    imageUrl: "/images/2.png",
    icon: "🌤️",
    tip: "Ideal for long-lasting outdoor protection."
  },
  {
    id: "gamazine",
    title: "Gamazine Finish",
    description: "Textured decorative coating for stylish and modern wall designs.",
    imageUrl: "/images/3.png",
    icon: "🎨",
    tip: "Adds texture and premium feel to interior/exterior walls."
  },
  {
    id: "roof",
    title: "Roof & Liquid Rubber",
    description: "Waterproofing solutions that protect roofs from leaks and damage.",
    imageUrl: "/images/4.png",
    icon: "🛡️",
    tip: "Perfect for sealing and extending roof lifespan."
  }
];

export default function FrontSection() {
  const [active, setActive] = useState("interior");

  const activeData = paintScenarios.find(s => s.id === active);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nova Paint
          </h2>
          <p className="text-xl text-gray-600">
            The Unique Coat — Quality Paints for Every Surface
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {paintScenarios.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => setActive(item.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg transition ${
                active === item.id
                  ? "ring-4 ring-[#005b9f] scale-[1.03]"
                  : "hover:scale-[1.02]"
              }`}
            >
              <div className="relative h-64">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ACTIVE PANEL */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">

            {/* IMAGE */}
            <div className="relative h-80 md:h-auto">
              <Image
                src={activeData?.imageUrl || ""}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                {activeData?.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {activeData?.description}
              </p>

              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <p className="font-semibold text-gray-900">Expert Tip:</p>
                <p className="text-gray-700 text-sm">{activeData?.tip}</p>
              </div>

              <div className="flex gap-4">
                <button className="bg-[#005b9f] text-white px-6 py-3 rounded-full">
                  View Products
                </button>
                <button className="border border-[#005b9f] text-[#005b9f] px-6 py-3 rounded-full">
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* TRUST SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <h4 className="text-2xl font-bold">1000+</h4>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Premium</h4>
            <p className="text-gray-500 text-sm">Quality Paint</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">5+ Years</h4>
            <p className="text-gray-500 text-sm">Experience</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Trusted</h4>
            <p className="text-gray-500 text-sm">Brand</p>
          </div>
        </div>

      </div>
    </section>
  );
}