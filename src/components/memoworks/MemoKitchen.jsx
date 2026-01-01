import React from "react";

const MemoKitchen = () => {
  return (
    <div className="min-h-screen px-6">
      <div className="aspect-[16/9] rounded-xl relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://imgs.search.brave.com/S9efKqqy4ABBxxXRJbAShCC_fq1JcRdfP68wdObWgbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c3VuZGF5LXJvYm90/aWNzLWp1c3QtaW50/cm9kdWNlZC1hY3Qt/MS1hLWZyb250aWVy/LWZvdW5kYXRpb24t/djAtOGRjd2c1cnpn/aDJnMS5qcGVnP2F1/dG89d2VicCZzPTc4/MDE2ODY5MDgwN2Ez/YzYyZmZhMTI1Nzc1/NTdlOGVkOWM4ODJl/Yjg"
          alt=""
        />
        <h2 className="h-full w-full flex items-center justify-center bg-black/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[4vw] font-bold rounded-xl">
          Memo works in the kitchen
        </h2>
      </div>
      <div className="h-[60vh] w-full mt-6 flex items-center justify-center gap-2">
        <div className="w-1/2 h-full bg-[#faf7eb] flex flex-col justify-between border rounded-xl p-4">
          <h2 className="text-[1vw]">Lightening the load</h2>
          <p className="text-[1.2vw] leading-[1.2]">
            Memo can quietly and autonomously clear tables of plates and
            delicate glasses, throw out food scraps, and load up your dishwasher
            before running it. Let Memo take care of the table, so you can go
            take care of the things only you can do.
          </p>
        </div>
        <div className="w-1/2 h-full border rounded-xl">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://imgs.search.brave.com/MvLB_iBANprHV_fI0FJvIboTx9HfmUkxTFgWw1OH1Dc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRl/cmVzdGluZ2VuZ2lu/ZWVyaW5nLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9j/bXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvVGh1/bWJuYWlscy1mb3It/SUUtYXJ0aWNsZXMt/TWVtby1Sb2JvdC5q/cGcmdz0zODQwJnE9/NzU"
            alt="Sunday AI"
          />
        </div>
      </div>
    </div>
  );
};

export default MemoKitchen;
