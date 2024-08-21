import lightBulb from "@/assets/light bulb.png";
import sofa from "@/assets/sofa main.png";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Home = () => {
  return (
    <div className="bg-[#F2F0FF]">
      <div className="container mx-auto relative">
        <div className="hidden 2xl:block absolute top-0 left-[-220px]">
          <Image src={lightBulb} />
        </div>
        <div className="hidden xl:block absolute top-[40px] right-[-35px]">
          <Image src={sofa}/>
        </div>
        <div
          className={`${lato.className} text-[#FB2E86] text-[16px] font-bold lg:pt-[100px] xl:pt-[200px]`}
        >
          Best Furniture For Your Castle....
        </div>
        <div
          className={`${josefinSans.className} text-[#000] text-[53px] font-bold py-[12px]`}
        >
          New Furniture Collection <br />
          Trends in 2020
        </div>
        <div
          className={`${lato.className} text-[#8A8FB9] text-[16px] font-bold pb-[24px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing <br />
          in phasellus non in justo.
        </div>
        <button className="w-[163px] h-[50px] text-[#EEEFFB] rounded-[2px] bg-[#FB2E86] mb-[236px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
