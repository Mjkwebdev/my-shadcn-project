import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Listing } from "./Search";

interface Props{
    list:Listing;
}

const CardsGrid = ({list}:Props) => {
  return (
    <Card className="w-[24rem]">
    <CardHeader>
     <img src={list.image}/>
      <CardTitle> {list.title}</CardTitle>
    </CardHeader>
    <CardContent>
      {list.location}
    </CardContent>
  </Card>
  )
}
export default CardsGrid