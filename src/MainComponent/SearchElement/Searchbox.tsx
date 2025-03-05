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

const Searchbox = () => {
  const [date, setDate] = React.useState<Date>();
  const [isOpen, setOpen] = React.useState(false);
  const handleClick =(date:Date)=>{
    setDate(date);
    setOpen(false);
  }
  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"link"} 
          className={cn(
            "w-[240px] rounded-full justify-start text-left font-normal h-full",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Quand</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          
          onDayClick={handleClick}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default Searchbox;
