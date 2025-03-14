import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Listing } from "./data";

export interface Props {
  list: Listing;
}

const CardsGrid = ({ list }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/detail/${list.title}`)}
      className=" bg-[#F5F5F5] p-2"
    >
      <img src={list.image} className="rounded-md h-[12rem]" />
      <CardHeader>
        <CardTitle className="pt-[-0.3rem] font-[sans-serif] text-1xl">
          {" "}
          {list.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-black flex flex-col gap-1 mt-1">
        <p className="font-normal text-xs font-[poppins]">{list.location}</p>
        <p className="font-normal text-xs font-[poppins]">{list.type}</p>
        <p className="font-normal text-xs font-[poppins]">{list.dateAvailable}</p>
        <p className="font-medium text-sm font-[poppins]">
          Total Paid: &euro;{list.price}{" "}
        </p>
      </CardContent>
      <CardFooter className="mt-4">
        <Button variant="booknow" className="text-[white] bg-[#B56E08]">
          Rebook
        </Button>
        <Button variant="link">Download PDF</Button>
      </CardFooter>
    </Card>
  );
};
export default CardsGrid;
