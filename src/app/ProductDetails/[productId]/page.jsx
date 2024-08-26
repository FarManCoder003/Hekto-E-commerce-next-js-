import { Arrow } from "@/assets/svg/Arrow";
import { Josefin_Sans } from "next/font/google";
import ProductDetails from "../page";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const Page = async ({ params: { productId } }) => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px]">
        <div className={`${josefinSans.className} container mx-auto`}>
          <div className="text-[#101750] text-[36px] font-bold">
            Product Details
          </div>
          <div className="text-[#101750] text-[16px] font-medium">
            Home . Product .{" "}
            <span className="text-[#FB2E86]">Product Details</span>
          </div>
        </div>
      </div>
      <div className={`${josefinSans.className} container mx-auto`}>
        <ProductDetails productId={productId} />
      </div>
      <div className="bg-[#F9F8FE] h-[649px] py-[109px]">
        <div className={`${josefinSans.className} container mx-auto`}>
          <div className="flex gap-x-[63px] pb-[61px]">
            <div className="text-[#151875] text-[24px] font-semibold hover:underline">
              Description
            </div>
            <div className="text-[#151875] text-[24px] font-semibold hover:underline">
              Additional Info
            </div>
            <div className="text-[#151875] text-[24px] font-semibold hover:underline">
              Review
            </div>
            <div className="text-[#151875] text-[24px] font-semibold hover:underline">
              Video
            </div>
          </div>
          <div className="text-[#151875] text-[22px] font-normal pb-[14px]">
            Varius tempor.
          </div>
          <div className="text-[#A9ACC6] text-[16px] font-semibold pb-[36px]">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </div>
          <div className="text-[#151875] text-[22px] font-normal pb-[14px]">
            More details
          </div>
          <div className="flex gap-x-[12px] group">
            <Arrow />
            <div className="text-[#A9ACC6] text-[16px] font-semibold pb-[36px]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </div>
          </div>
          <div className="flex gap-x-[12px] group">
            <Arrow />
            <div className="text-[#A9ACC6] text-[16px] font-semibold pb-[36px]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </div>
          </div>
          <div className="flex gap-x-[12px] group">
            <Arrow />
            <div className="text-[#A9ACC6] text-[16px] font-semibold pb-[36px]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </div>
          </div>
          <div className="flex gap-x-[12px] group">
            <Arrow />
            <div className="text-[#A9ACC6] text-[16px] font-semibold pb-[36px]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
