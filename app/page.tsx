import React from "react";
import Features from "./features/page";
function ColorsShowcase() {
  const colors = [
    { name: "Peach", class: "bg-peach text-dark-gray" },
    { name: "Gold", class: "bg-gold text-dark-gray" },
    { name: "Dark Gray", class: "bg-dark-gray text-off-white" },
    { name: "Light Peach", class: "bg-light-peach text-dark-gray" },
    { name: "Teal", class: "bg-teal text-off-white" },
    { name: "Soft Red", class: "bg-soft-red text-off-white" },
    { name: "Off White", class: "bg-off-white text-dark-gray" },
    { name: "Medium Gray", class: "bg-medium-gray text-off-white" },
    { name: "Beige", class: "bg-beige text-dark-gray" },
    { name: "Cream", class: "bg-cream text-dark-gray" },
    { name: "Silver Gray", class: "bg-silver-gray text-dark-gray" },
  ];

  return (
    <div className="p-5 grid grid-cols-2 md:grid-cols-3 gap-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`${color.class} p-6 text-center font-bold text-lg rounded-lg shadow-md`}
        >
          {color.name}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      Home
    <ColorsShowcase/>
      <Features />
    </div>
  );
}
