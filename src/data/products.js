const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and smartphone notifications.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description: "Ergonomic aluminum laptop stand with adjustable height and angle for a comfortable workspace.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description: "RGB backlit mechanical keyboard with tactile switches, durable keys, and a premium typing experience.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description: "Multi-port USB-C hub with HDMI, USB ports, and memory card support for expanded connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description: "Ergonomic wireless mouse with precise tracking, comfortable grips, and long battery life.",
  },
  {
    id: 7,
    name: "Monitor",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    description: "High-resolution computer monitor with vibrant colors and a crisp display for work and entertainment.",
  },
  {
    id: 8,
    name: "HD Webcam",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description: "Full HD webcam with clear video, autofocus, and a built-in microphone for meetings and streaming.",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    description: "Portable Bluetooth speaker with rich sound, powerful bass, and a rechargeable battery for outdoor use.",
  },
  {
    id: 10,
    name: "Gaming Headset",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop",
    description: "Comfortable gaming headset with immersive audio, a clear microphone, and soft ear cushions.",
  },
  {
    id: 11,
    name: "Portable SSD",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    description: "Compact external solid-state drive for fast file transfers, backups, and portable storage.",
  },
  {
    id: 12,
    name: "Tablet",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    description: "Lightweight tablet with a vibrant touchscreen for studying, reading, browsing, and entertainment.",
  },
  {
    id: 13,
    name: "Digital Camera",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    description: "Versatile digital camera designed to capture detailed photos and memorable moments.",
  },
  {
    id: 14,
    name: "Gaming Controller",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&h=500&fit=crop",
    description: "Ergonomic gaming controller with responsive buttons, precise analog sticks, and comfortable grips.",
  },
  {
    id: 15,
    name: "Desk Lamp",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description: "Modern LED desk lamp with adjustable lighting for reading, studying, and working.",
  },
  {
    id: 16,
    name: "Power Bank",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1609592806596-b43bada9f3a4?w=500&h=500&fit=crop",
    description: "Portable power bank for charging compatible devices while traveling, commuting, or working outdoors.",
  },
  {
    id: 17,
    name: "Smartphone",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    description: "Modern smartphone with a vivid display, versatile camera, and smooth performance for everyday tasks.",
  },
  {
    id: 18,
    name: "VR Headset",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop",
    description: "Virtual reality headset for immersive gaming, interactive experiences, and virtual exploration.",
  },
  {
    id: 19,
    name: "Wireless Charger",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1591290619762-c588d3d03c59?w=500&h=500&fit=crop",
    description: "Compact wireless charging pad for convenient cable-free charging of compatible devices.",
  },
  {
    id: 20,
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    description: "High-performance laptop designed for gaming, software development, multitasking, and demanding applications.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

