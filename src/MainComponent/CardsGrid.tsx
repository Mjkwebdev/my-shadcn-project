import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Listing } from "./data";

export interface Props{
    list:Listing;
}

const CardsGrid = ({list}:Props) => {
  return (
    <Card className="w-[20rem] bg-[#F5F5F5] p-3">
       <img src={list.image} className="rounded-md h-[12rem]"/> 
    <CardHeader>
      <CardTitle className="pt-[-0.3rem] font-[sans-serif] text-1xl"> {list.title}</CardTitle>
    </CardHeader>
    <CardContent className="text-[black] pt-[-0.3rem]">
    <p>{list.location}</p> 
    <p className="text-[400]">Sunbed Type: {list.type}</p> 
    <p className="font-bold font-[Poppins,Sans-serif]">Total Paid:  &euro;{list.price} </p> 
    </CardContent>
    <CardFooter className="mt-[0.1rem]">
      <Button variant={"link"} className="text-[white] bg-[#B56E08]">Rebook</Button>
      <Button variant='link' className="text-[#252525] underline font-medium text-bold">Download PDF</Button>
    </CardFooter>
  </Card>
  )
}
export default CardsGrid