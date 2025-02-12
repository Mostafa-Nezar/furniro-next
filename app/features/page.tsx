"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; 

export default function Features() {
  const features = [
    {
      title: "High Quality",
      description: "crafted from top materials",
      image: "/images/trophy 1.svg",
      delay: 0,
    },
    {
      title: "Warranty Protection",
      description: "over 2 years",
      image: "/images/true.svg",
      delay: 0.2,
    },
    {
      title: "Free Shipping",
      description: "order over 150 $",
      image: "/images/handcarrybox.svg",
      delay: 0.4,
    },
    {
      title: "24 / 7 Support",
      description: "Dedicated Support",
      image: "/images/girl.svg",
      delay: 0.6,
    },
  ];

  const refs = features.map(() => useRef(null));
  const inViews = refs.map((ref) => useInView(ref, { once: true }));

  return (
    <div className="features p-5 py-16 bg-light-peach">
<div className="grid grid-cols-2 md:grid-cols-4 justify-items-center">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      ref={refs[index]}
      className="col-span-1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inViews[index] ? 1 : 0, y: inViews[index] ? 0 : 50 }}
      transition={{ duration: 1, delay: feature.delay }}
    >
      <div className="feature flex flex-col md:flex-row mb-5 md:mb-0">
        <Image src={feature.image} className="p-2" alt={feature.title} width={60} height={60} />
        <div className="p-2 text-xl">
          <h6 className="poppins-bold">{feature.title}</h6>
          <div className="text-sm text-gray-500">{feature.description}</div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
}
