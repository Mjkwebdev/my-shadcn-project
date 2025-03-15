export interface Listing {
  [x: string]: any;
  id: string;
  title: string;
  image: string;
  type: string;
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
    image: "src/assets/beach-1.jpg",
    location: "📍 Golden Sands Beach Resort, Rügen Island, Germany",
    type: "🛏️ Sunbed Type: VIP Cabana",
    price: 30,
    label: "Soon available for booking",
    dateAvailable: "🗓️ Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
    description:
      "Experience the ultimate luxury with our VIP Cabana at Golden Sands Beach. Enjoy breathtaking ocean views, private seating, and personalized service for a relaxing getaway.",
  },
  {
    id: "2",
    title: "Boa Vista",
    image: "src/assets/image2.jpg",
    location: "📍 Marseille",
    type: "🛏️ Standard Sunbed",
    price: 28,
    label: "Soon available for booking",
    dateAvailable: "🗓️ Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
    description:
      "Relax under the sun with a comfortable standard sunbed at Boa Vista. A perfect spot to unwind and enjoy the stunning coastline of Marseille.",
  },
  {
    id: "3",
    title: "Calabro Beach Club",
    image: "src/assets/image3.jpg",
    location: "📍 Antibes-Juan-les-Pins",
    type: "🛏️ Luxury Lounger",
    price: 45,
    label: "Soon available for booking",
    dateAvailable: "🗓️ Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
    description:
      "Indulge in a premium seaside experience with our Luxury Lounger at Calabro Beach Club. Enjoy exclusive amenities, sun-kissed relaxation, and top-tier beachside service.",
  },
  {
    id: "4",
    title: "Castel Plage",
    image: "src/assets/image4.jpg",
    location: "📍 Roquebrune-Cap-Martin",
    type: "🛏️ Standard Sunbed",
    price: 25,
    label: "Soon available for booking",
    dateAvailable: "🗓️ Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
    description:
      "Soak in the Mediterranean sun with a relaxing sunbed at Castel Plage. Perfect for a day of comfort and seaside serenity in Roquebrune-Cap-Martin.",
  },
  {
    id: "5",
    title: "Esterel Plage",
    image: "src/assets/image5.jpg",
    location: "📍 Menton",
    type: "🛏️ Standard Sunbed",
    price: 24,
    label: "Soon available for booking",
    dateAvailable: "🗓️ Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
    description:
      "Unwind at Esterel Plage in Menton with a comfortable standard sunbed, offering a perfect blend of relaxation and coastal beauty.",
  },
  {
    id: "6",
    title: "Esterel Plage",
    image: "src/assets/image6.jpg",
    location: "📍 Menton",
    type: "🛏️ Standard Sunbed",
    price: 24,
    label: "Soon available for booking",
    dateAvailable: "🗓️ Date & Time: February 18, 2025 | 10:00 AM - 6:00 PM",
    maxGuest: 4,
    description:
      "Enjoy the serene ambiance of Menton at Esterel Plage. Our standard sunbed offers the perfect spot to soak up the sun and enjoy the gentle sea breeze.",
  },
];
