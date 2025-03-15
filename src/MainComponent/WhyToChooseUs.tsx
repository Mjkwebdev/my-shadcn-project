// If using Next.js, otherwise use <img />
import { MapPin, ShieldCheck, Sun } from "lucide-react";
import { JSX } from "react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Sun className="text-yellow-500 w-8 h-8" />,
    title: "Hassle-Free Beach Booking",
    description:
      "Skip the stress of finding a sunbed! With real-time availability, you can book your perfect spot before you even arrive.",
  },
  {
    icon: <MapPin className="text-orange-500 w-8 h-8" />,
    title: "Instant Reservations & Easy Check-in",
    description:
      "Reserve in just a few taps and check in instantly using a QR code—no waiting in line!",
  },
  {
    icon: <MapPin className="text-red-500 w-8 h-8" />,
    title: "Interactive Beach Map",
    description:
      "See exactly where your sunbed is located before booking, ensuring you get the best view & experience.",
  },
  {
    icon: <ShieldCheck className="text-green-500 w-8 h-8" />,
    title: "Secure & Flexible Payments",
    description:
      "Pay safely online via Stripe, PayPal, or card, with the option for on-site payments too!",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why To Choose Us
        </h2>

        {/* Features + Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-6 ">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div>{feature.icon}</div>
                <div className="">
                  <div className="text-[20px] font-bold font-[ambit] text-[#0d0d0d]">
                    {feature.title}
                  </div>
                  <p className="text-[#353535] text-base font-normal font-[poppins] mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Images */}
          <div className="relative flex justify-center">
            <img
              src="/src/assets/WhyChooseUs.png"
              alt="Beach Sunbed"
              className=""
            />
          </div>

          {/* Right Features */}

          <div className="flex flex-col gap-6 ">
            {features.slice(2).map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div>{feature.icon}</div>
                <div className="">
                  <div className="text-[20px] font-bold font-[ambit] text-[#0d0d0d]">
                    {feature.title}
                  </div>
                  <p className="text-[#353535] text-base font-normal font-[poppins] mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        
        <div className="grid grid-cols-3 text-center gap-1 mt-20">
          <div>
            <div className=" font-bold leading-[120px] font-[ambit] text-[120px] text-[#ad8330]">
              3+
            </div>
            <div className="text-[#0d0d0d] font-[ambit] font-normal text-[20px]">
              Countries
            </div>
          </div>

          <div>
            <div className=" font-bold leading-[120px] font-[ambit] text-[120px] text-[#ad8330]">
              2k+
            </div>
            <div className="text-[#0d0d0d] font-[ambit] font-normal text-[20px]">
              Satisfied Clients
            </div>
          </div>
          <div>
            <div className=" font-bold leading-[120px] font-[ambit] text-[120px] text-[#ad8330]">
              20+
            </div>
            <div className="text-[#0d0d0d] font-[ambit] font-normal text-[20px]">
              Years of Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
