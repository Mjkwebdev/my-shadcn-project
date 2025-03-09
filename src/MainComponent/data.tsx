export interface Listing {
  [x: string]: any;
  id: string;
  title: string;
  image:string;
  location: string;
  price: number;
  label:string;
  dateAvailable:  Date;
  maxGuest: number;
}

export const listings: Listing[]= [{
  id:"1",
  title: "Cala Pulpo",
  image:"src/assets/4d88bcf0-e5ee-46a6-a714-d6e98e5836c4-img.webp",
  location:"Karachi",
  price:300,
  label:"Soon available for booking",
  dateAvailable: new Date("2024-04-10"),
  maxGuest: 4,
},
{
  id:"2",
  title: "Boa Vista",
  image:"src/assets/6cc55b8f-14ad-456f-9ba1-b1461cb16ea2-img.webp",   
  location:"Islamabad",
  price:30,
  label:"Soon available for booking",
  dateAvailable: new Date("2024-04-10"),
  maxGuest: 4,
},
{
  id:"3",
  title: "Cala Pulpo",
  image:"src/assets/16d66abc-9a68-4a46-9243-25df762573b6-img.webp",
  location:"Lahore",
  price:200,
  label:"Soon available for booking",
  dateAvailable: new Date("2024-04-10"),
  maxGuest: 4,
}
];