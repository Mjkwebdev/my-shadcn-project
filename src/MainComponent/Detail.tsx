import { useLocation, useParams } from "react-router-dom";
import BookNowForm from "./Form/BookNowForm";
interface Params extends Record<string, string | undefined> {
  slug: string;
}

const Detail = () => {
  const { slug } = useParams<Params>();
  const location = useLocation();
  const { state } = location;

  // Split the slug into words and dynamically create lines
  const words = slug?.split(" ");
  const firstLine = words?.slice(0, 4).join(" ");
  const secondLine = words?.slice(4).join(" ");
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-5 py-8 md:px-20 md:pb-16">
      {/* Image Section */}
      <img
        className="w-full rounded-lg shadow-lg"
        src={`/${state.image}`}
        alt={slug}
      />

      {/* Slug/Title Section */}
      {/* <div className="text-4xl font-extrabold text-center text-gray-800 mt-6">{slug}</div>
       */}
      <div className="flex items-start  mt-2 gap-6">
        <div className="w-[70%] flex flex-col gap-4">
          {/* <div className="text-[32px] font-[poppins] font-bold text-[#0d0d0d">
            {slug}
          </div> */}
          <div className="text-[32px] font-[poppins] font-bold text-[#0d0d0d]">
            <div>{firstLine}</div>
            {secondLine && <div>{secondLine}</div>}
          </div>

          {/* Description Section */}
          <div className="text-lg font-[poppins] text-gray-700 font-medium leading-relaxed">
           {state.description}
          </div>
        </div>
        <div className="w-[30%]">
          <BookNowForm />
        </div>
      </div>
    </div>
  );
};

export default Detail;