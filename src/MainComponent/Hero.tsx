import BeachImgComponent from "../assets/beachBg.jpg";
import SearchInput from "./SearchElement/SearchInput";
import WhyChooseUs from "./WhyToChooseUs";

const Hero = () => {
  return (
    <>
      <div className=" h-screen flex">
        <div className="relative">
          <h2 className="w-[446px] h-[176px] absolute top-[9.8rem] left-[3rem] text-5xl font-[700] font-[sans-serif] leading-[55px] tracking-normal text-[#FFFFFF]">
            Experience the Perfect Beach Day with Ease{" "}
          </h2>
          <p className="w-[316px] h-[48px] absolute top-[20.5rem] left-[3rem] font-[500] font-[Poppins, Sans-serif] text-[#FFFFFF]">
            {" "}
            Reserve sunbeds, enjoy add-ons, and relax without hassle.
          </p>
          <SearchInput />
        </div>
        <div
          className="w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BeachImgComponent})` }}
        ></div>
      </div>
      <WhyChooseUs />
    </>
  );
};

export default Hero;
