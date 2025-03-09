import { LocateIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Listing } from "./data";

export interface Props{
    list:Listing;
}

const CardsGrid = ({list}:Props) => {
  return (
    <Card className="w-[20rem]">
       <img src={list.image} height={15}/> 
    <CardHeader>
      <CardTitle className="mb-[-1.4rem] text-2xl"> {list.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex">
     <span className="text-[gray] text-base font-[bold] mb-[-2rem] pt-[0.5rem] pr-[0.4rem]">From {list.price} &euro;</span> 
     <span className="text-xs bg-blue-200 text-[blue] rounded-full p-[0.5rem]">{list.label}</span> 
    </CardContent>
    <CardFooter className="mt-[-1rem]">
    <LocateIcon className="pr-2 "/>{list.location}
    </CardFooter>
  </Card>
  )
}
export default CardsGrid