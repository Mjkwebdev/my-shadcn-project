import PastBooking from "./PastBooking"
import UpcomingBooking from "./UpComingBooking"

const MyBooking = () => {
  return (
   <>
   <UpcomingBooking/>
   <p className="text-2xl font-bold font-[ambit] p-3"> Past Bookings</p>
   <PastBooking/>
   </>
  )
}

export default MyBooking