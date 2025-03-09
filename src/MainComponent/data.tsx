export interface Listing {
  [x: string]: any;
  id: string;
  title: string;
  image: string;
  location: string;
  price: number;
  label: string;
  dateAvailable: Date;
  maxGuest: number;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "VIP Cabana at Golden Sands Beach",
    image: "src/assets/image (1).png",
    location: "Nice",
    price: 30,
    label: "Soon available for booking",
    dateAvailable: new Date("2024-04-10"),
    maxGuest: 4,
  },
  {
    id: "2",
    title: "Boa Vista",
    image: "src/assets/image (2).png",
    location: "Marseille",
    price: 28,
    label: "Soon available for booking",
    dateAvailable: new Date("2024-14-03"),
    maxGuest: 4,
  },
  {
    id: "3",
    title: "Calabro Beach Club",
    image: "src/assets/image.png",
    location: "Antibes-Juan-les-Pins",
    price: 45,
    label: "Soon available for booking",
    dateAvailable: new Date("2024-03-01"),
    maxGuest: 4,
  },
  {
    id: "4",
    title: "Castel Plage",
    image: "src/assets/6cc55b8f-14ad-456f-9ba1-b1461cb16ea2-img.webp",
    location: "Roquebrune-Cap-Martin",
    price: 25,
    label: "Soon available for booking",
    dateAvailable: new Date("2024-02-10"),
    maxGuest: 4,
  },
  {
    id: "5",
    title: "Esterel Plage",
    image: "src/assets/16d66abc-9a68-4a46-9243-25df762573b6-img.webp",
    location: "Menton",
    price: 24,
    label: "Soon available for booking",
    dateAvailable: new Date("2024-01-10"),
    maxGuest: 4,
  },
];
