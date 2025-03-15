import BeachImgComponent from "../assets/beachBg.jpg";
import SearchInput from "./SearchElement/SearchInput";
import WhyChooseUs from "./WhyToChooseUs";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="relative w-[31%] bg-[#ad8330]">
          <h2 className="w-[446px] font-[ambit] h-[176px] absolute top-[9.8rem] left-[3rem] text-5xl font-bold text-[50px] leading-[55px] tracking-normal text-white">
            Experience the Perfect Beach Day with Ease{" "}
          </h2>
          <p className="w-[316px] font-[poppins] font-medium text-base h-[48px] absolute top-[20.5rem] left-[3rem] text-[#FFFFFF]">
            {" "}
            Reserve sunbeds, enjoy add-ons, and relax without hassle.
          </p>
          <SearchInput />
        </div>
        <div
          className="w-[69%] bg-cover bg-center"
          style={{ backgroundImage: `url(${BeachImgComponent})` }}
        ></div>
      </div>
      <WhyChooseUs />
    </>
  );
};

export default Hero;
