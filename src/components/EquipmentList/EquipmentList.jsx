import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Equipment 1",
    imageLink: "https://picsum.photos/id/1015/200/300",
    category: "Industrial Machinery",
  },
  {
    id: 2,
    name: "Equipment 2",
    imageLink: "https://picsum.photos/id/1020/200/300",
    category: "Trucks",
  },
  {
    id: 3,
    name: "Equipment 3",
    imageLink: "https://picsum.photos/id/1030/200/300",
    category: "Land Cruiser",
  },
  {
    id: 4,
    name: "Equipment 4",
    imageLink: "https://picsum.photos/id/1040/200/300",
    category: "Cars",
  },
  {
    id: 5,
    name: "Equipment 5",
    imageLink: "https://picsum.photos/id/1050/200/300",
    category: "Generators",
  },
  {
    id: 6,
    name: "Equipment 6",
    imageLink: "https://picsum.photos/id/1060/200/300",
    category: "Pickup Cars",
  },
  {
    id: 7,
    name: "Equipment 7",
    imageLink: "https://picsum.photos/id/1070/200/300",
    category: "Heavy Machinery",
  },
  {
    id: 8,
    name: "Equipment 8",
    imageLink: "https://picsum.photos/id/1080/200/300",
    category: "Hydraulic Breakers",
  },
  {
    id: 9,
    name: "Equipment 9",
    imageLink: "https://picsum.photos/id/1090/200/300",
    category: "Industrial Machinery",
  },
  // Add more equipment objects with actual image links as needed
];

const EquipmentList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get unique list of categories from data
  const categories = [...new Set(data.map((item) => item.category))];

  // Filter the equipment based on the selected category
  const filteredEquipment = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : data;

  return (
    <div>
      {/* List of categories */}
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </li>
        ))}
      </ul>

      {/* List of equipment based on selected category */}
      {filteredEquipment.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.imageLink} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
