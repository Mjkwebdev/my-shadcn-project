export interface Listing {
  [x: string]: any;
  id: string;
  title: string;
  image: string;
  type:string;
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
    type:"VIP Cabana",
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
    type:"Standard Sunbed",
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
    type: "Luxury lougage",
    price: 45,
    label: "Soon available for booking",
    dateAvailable: new Date("2024-03-01"),
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
    dateAvailable: new Date("2024-02-10"),
    maxGuest: 4,
  },
  {
    id: "5",
    title: "Esterel Plage",
    image: "src/assets/image (2).png",
    location: "Menton",
    type:"Standard Sunbed",
    price: 24,
    label: "Soon available for booking",
    dateAvailable: new Date("2024-01-10"),
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
    dateAvailable: new Date("2024-01-10"),
    maxGuest: 4,
  }
];
