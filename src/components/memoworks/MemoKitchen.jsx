import React from "react";
import StarBorder from "../react-bits/StarBorder";
import TiltedCard from "../react-bits/TiltedCard";

const MemoKitchen = () => {
  return (
    <div className="min-h-screen px-6 text-black">
      <div className="aspect-[16/9] rounded-xl relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://imgs.search.brave.com/S9efKqqy4ABBxxXRJbAShCC_fq1JcRdfP68wdObWgbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c3VuZGF5LXJvYm90/aWNzLWp1c3QtaW50/cm9kdWNlZC1hY3Qt/MS1hLWZyb250aWVy/LWZvdW5kYXRpb24t/djAtOGRjd2c1cnpn/aDJnMS5qcGVnP2F1/dG89d2VicCZzPTc4/MDE2ODY5MDgwN2Ez/YzYyZmZhMTI1Nzc1/NTdlOGVkOWM4ODJl/Yjg"
          alt=""
        />
        <h2 className="h-full w-full leading-none uppercase flex items-center justify-center bg-black/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[4vw] font-bold rounded-xl">
          Memo works in the kitchen
        </h2>
      </div>
      <div className="h-[60vh] w-full mt-6 flex items-center justify-center gap-2">
        <div className="w-1/2 h-full bg-[#faf7eb] flex flex-col justify-between border border-black/50 rounded-xl p-4">
          <div className="">
            <StarBorder
              as="button"
              thickness={2}
              color="#EF7C2E"
              className="custom-class"
            >
              Lightening the load
            </StarBorder>
          </div>
          <p className="text-[1.2vw] leading-[1.2]">
            Memo can quietly and autonomously clear tables of plates and
            delicate glasses, throw out food scraps, and load up your dishwasher
            before running it. Let Memo take care of the table, so you can go
            take care of the things only you can do.
          </p>
        </div>
        <div className="w-1/2 h-full border border-black/50 rounded-xl">
          <TiltedCard
            imageSrc="https://imgs.search.brave.com/MvLB_iBANprHV_fI0FJvIboTx9HfmUkxTFgWw1OH1Dc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRl/cmVzdGluZ2VuZ2lu/ZWVyaW5nLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9j/bXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvVGh1/bWJuYWlscy1mb3It/SUUtYXJ0aWNsZXMt/TWVtby1Sb2JvdC5q/cGcmdz0zODQwJnE9/NzU"
            altText="Kendrick Lamar - GNX Album Cover"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={0.95}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MemoKitchen;
