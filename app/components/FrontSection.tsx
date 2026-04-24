"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface LightScenario {
  id: string;
  title: string;
  description: string;
  lightType: "daylight" | "morning" | "evening" | "artificial";
  imageUrl: string;
  icon: string;
  tip: string;
  colourShift: string;
}

const lightScenarios: LightScenario[] = [
  {
    id: "daylight",
    title: "Natural Daylight",
    description: "The truest representation of colour. Perfect for north-facing rooms and spaces where you work or read.",
    lightType: "daylight",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    icon: "☀️",
    tip: "Cool whites and blues appear crisp; warm tones look balanced.",
    colourShift: "Minimal shift – colours appear as true to swatch"
  },
  {
    id: "morning",
    title: "Morning Light",
    description: "Soft golden tones that enhance warm colours and create an inviting atmosphere in east-facing rooms.",
    lightType: "morning",
    imageUrl: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=600&fit=crop",
    icon: "🌅",
    tip: "Yellows, oranges, and terracottas glow beautifully.",
    colourShift: "+15% warmth in red/orange tones"
  },
  {
    id: "evening",
    title: "Evening Glow",
    description: "Warm, cosy light that makes spaces feel intimate. Perfect for living rooms and bedrooms.",
    lightType: "evening",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    icon: "🌆",
    tip: "Deep reds and browns become richer; blues may appear darker.",
    colourShift: "+20% amber, -15% blue"
  },
  {
    id: "artificial",
    title: "Artificial Light",
    description: "LED and incandescent bulbs change colour perception drastically. We help you choose wisely.",
    lightType: "artificial",
    imageUrl: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
    icon: "💡",
    tip: "Cool white LEDs enhance blues/greens; warm bulbs enrich reds/yellows.",
    colourShift: "Varies by bulb temperature (2700K-6500K)"
  }
];

export default function FrontSection() {
  const [activeScenario, setActiveScenario] = useState<string>("daylight");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const activeData = lightScenarios.find(s => s.id === activeScenario);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#005b9f]/10 text-[#005b9f] rounded-full text-sm font-semibold mb-4">
            Light & Colour Science
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-4">
            Choose Your Perfect Shade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artificial or natural light — find out how best to choose your Dulux hues for any time of day.
          </p>
        </motion.div>

        {/* Interactive Grid - 2x2 or 4 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {lightScenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(scenario.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveScenario(scenario.id)}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                activeScenario === scenario.id
                  ? "ring-4 ring-[#005b9f] ring-offset-4 scale-[1.02] shadow-2xl"
                  : "hover:shadow-xl hover:scale-[1.01]"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={scenario.imageUrl}
                  alt={scenario.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredCard === scenario.id ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                  {scenario.icon}
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {scenario.title}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {scenario.description}
                  </p>
                </div>
              </div>

              {/* Hover Details Panel */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: hoveredCard === scenario.id ? "auto" : 0,
                  opacity: hoveredCard === scenario.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white"
              >
                <div className="p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">💡</span>
                    <p className="text-sm text-gray-700 font-medium">{scenario.tip}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🎨</span>
                    <p className="text-sm text-gray-600">{scenario.colourShift}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Active Scenario Details Panel */}
        <motion.div
          key={activeScenario}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Colour Demo */}
            <div className="relative h-80 md:h-auto bg-gradient-to-br from-gray-900 to-gray-700 p-8 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400 blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-400 blur-3xl animate-pulse delay-1000" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{activeData?.icon}</span>
                  <h3 className="text-3xl font-bold text-white">{activeData?.title}</h3>
                </div>
                
                {/* Colour Simulation Swatches */}
                <div className="space-y-4">
                  <p className="text-white/80 text-lg">{activeData?.description}</p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white font-semibold mb-2">How colours respond:</p>
                    <div className="flex gap-3">
                      <div className="flex-1 text-center">
                        <div className="h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 mb-2 shadow-lg" />
                        <p className="text-white/70 text-xs">Warm tones</p>
                        <p className="text-green-300 text-xs">Enriched</p>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="h-16 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 mb-2 shadow-lg" />
                        <p className="text-white/70 text-xs">Cool tones</p>
                        <p className="text-yellow-300 text-xs">Muted</p>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="h-16 rounded-lg bg-gradient-to-r from-gray-400 to-gray-600 mb-2 shadow-lg" />
                        <p className="text-white/70 text-xs">Neutrals</p>
                        <p className="text-blue-300 text-xs">Shift visible</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - CTA & Guidance */}
            <div className="p-8 md:p-10">
              <h4 className="text-2xl font-playfair text-gray-900 mb-4">
                Expert Tip for {activeData?.title}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeData?.tip} {activeData?.colourShift && `Colour shift: ${activeData.colourShift}`}
              </p>
              
              <div className="bg-blue-50 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#005b9f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recommended for:</p>
                    <p className="text-gray-700 text-sm">
                      {activeScenario === "daylight" && "Home offices, kitchens, art studios, north-facing rooms"}
                      {activeScenario === "morning" && "Breakfast nooks, east-facing bedrooms, yoga spaces"}
                      {activeScenario === "evening" && "Living rooms, dining areas, cosy bedrooms, cinemas"}
                      {activeScenario === "artificial" && "Basements, windowless rooms, evening-only spaces"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#005b9f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003d6b] transition shadow-md hover:shadow-xl group">
                  Try Virtual Room Painter
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="border-2 border-[#005b9f] text-[#005b9f] px-6 py-3 rounded-full font-semibold hover:bg-[#005b9f]/5 transition">
                  View Colour Collections
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats / Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
          {[
            { number: "2M+", label: "Rooms Visualised", icon: "🏠" },
            { number: "98%", label: "Accurate Colour Match", icon: "🎯" },
            { number: "1,200+", label: "Expert Consultants", icon: "👥" },
            { number: "15+", label: "Years of Innovation", icon: "⭐" }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}