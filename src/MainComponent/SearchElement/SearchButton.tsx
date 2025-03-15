import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

interface SearchButtonProps {
  date: string;
  guests: string;
}

const SearchButton = ({ date, guests }: SearchButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search?date=${date}&guests=${guests}`);
  };
  return (
    <>
      <Link to={`/search?date=${date}&&guests=${guests}`}>
        <Button
          className="h-12 w-12  rounded-full text-[#ad8330]"
          style={{ backgroundColor: "rgba(173, 131, 48, 0.1)" }}
          onClick={handleClick}
        >
          <MagnifyingGlassIcon className="w-10 h-10"></MagnifyingGlassIcon>
        </Button>
      </Link>
    </>
  );
};

export default SearchButton;
