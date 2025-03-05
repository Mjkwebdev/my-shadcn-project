import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'

const SearchButton = () => {
  return (
   <>
   <Link to="/search" > 
   <Button variant={"link"} className="bg-[#F8F8F5] rounded-full h-12 w-12">
    <MagnifyingGlassIcon className="h-5 w-full text-[#AD8330]" />  </Button> 
   </Link> 
   </>
  )
}

export default SearchButton

// 