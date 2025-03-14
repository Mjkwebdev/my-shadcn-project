export interface Listing {
  [x: string]: any;
  id: string;
  title: string;
  image: string;
  type:string;
  location: string;
  price: number;
  label: string;
  dateAvailable: string;
  maxGuest: number;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "VIP Cabana at Golden Sands Beach",
    image: "src/assets/image (1).png",
    location: "📍  Golden Sands Beach Resort, Rügen Island, Germany",
    type:"🛏️  Sunbed Type: VIP Cabana",
    price: 30,
    label: "Soon available for booking",
    dateAvailable: "🗓️  Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
  },
  {
    id: "2",
    title: "Boa Vista",
    image: "src/assets/image (2).png",
    location: "Marseille",
    type:"Standard Sunbed",
    price: 28,
    label: "Soon available for booking",
    dateAvailable: "🗓️  Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
  },
  {
    id: "3",
    title: "Calabro Beach Club",
    image: "src/assets/image.png",
    location: "Antibes-Juan-les-Pins",
    type: "Luxury lougage",
    price: 45,
    label: "Soon available for booking",
    dateAvailable: "🗓️  Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
  },
  {
    id: "4",
    title: "Castel Plage",
    image: "src/assets/image (1).png",
    location: "Roquebrune-Cap-Martin",
    type:"Standard Sunbed",
    price: 25,
    label: "Soon available for booking",
    dateAvailable: "🗓️  Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
  },
  {
    id: "5",
    title: "Esterel Plage",
    image: "src/assets/16d66abc-9a68-4a46-9243-25df762573b6-img.webp",
    location: "Menton",
    type:"Standard Sunbed",
    price: 24,
    label: "Soon available for booking",
    dateAvailable: "🗓️  Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
  },
  {
    id: "6",
    title: "Esterel Plage",
    image: "src/assets/image.png",
    location: "Menton",
    type:"Standard Sunbed",
    price: 24,
    label: "Soon available for booking",
    dateAvailable: "🗓️  Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
  }
];
