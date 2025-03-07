import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'

interface SearchButtonProps{
  date: Date| undefined;
  guests: string;
}

const SearchButton = ({date, guests}:SearchButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate(`/search?date=${date}&guests=${guests}`);
    }
  return (
   <>
   <Link to="/search" > 
   <Button 
   onClick={handleClick} variant={"link"} className="bg-[#F8F8F5] rounded-full h-12 w-12">
    <MagnifyingGlassIcon className="h-5 w-full text-[#AD8330]" />  </Button> 
   </Link> 
   </>
  )
}

export default SearchButton
