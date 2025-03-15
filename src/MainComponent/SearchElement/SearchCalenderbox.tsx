import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import React from "react";

interface SelectDate {
  date: string;
  setDate: any
}


const SearchCalenderbox = ({date, setDate}: SelectDate) => {
  const [isOpen, setOpen] = React.useState(false);
  const handleClick =(date:Date)=>{
    setDate(date);
    setOpen(false);
  }
  
  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={"link"}
          className={cn(
            " rounded text-left h-[3rem]",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon  className="text-[#0d0d0d] font-normal text-sm font-[poppins]"/>
          {date ? format(date, "PPP") : <span>Quand</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          onDayClick={handleClick}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default SearchCalenderbox;
