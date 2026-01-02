import React from "react";

const MemoLearning = () => {
  return (
    <div className="min-h-screen px-6 mt-40 pb-40 relative z-2 bg-[#fffcf0ff] text-black">
      <div className="aspect-[16/9] rounded-xl relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://imgs.search.brave.com/rOWkbS1aQnrLkisx1AQh33kvvknq-mBzseJuyeidows/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tdWdn/bGVoZWFkLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8x/MS9TdW5kYXktUm9i/b3RpY3MtZW1lcmdl/cy1mcm9tLXN0ZWFs/dGgtd2l0aC1sYXVu/Y2gtb2YtTWVtby1o/dW1hbm9pZC1ob3Vz/ZS1jaG9yZXMtcm9i/b3QuanBlZw"
          alt=""
        />
        <h2 className="h-full w-full flex items-center justify-center bg-black/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[4vw] font-bold rounded-xl">
          Memo is always learning
        </h2>
      </div>
      <div className="h-[40vh] w-full mt-6 flex items-center justify-center gap-2">
        <div className="w-1/3 h-full bg-[#faf7eb] flex flex-col justify-between border border-black/50 rounded-xl p-2">
          <h2 className="text-[0.7vw]">
            Every home is different. Memo works in yours.
          </h2>
          <p className="text-[0.8vw] leading-[1.2] text-black/60">
            We believe Memo should be easy to use in the real-world, working
            autonomously out-of-the-box. Hundreds of people in unique homes show
            Memo how chores are done each day, so Memo can robustly handle the
            chaos of real life.
          </p>
        </div>
        <div className="w-1/3 h-full border border-black/50 rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://imgs.search.brave.com/kyqqMgbjtsQ_WkN8rOj9M8NSIhf27U6Gbw0iGX0zTME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRl/cmVzdGluZ2VuZ2lu/ZWVyaW5nLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9j/bXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTIvTWVt/by1odW1hbm9pZC1y/b2JvdC5qcGcmdz0z/ODQwJnE9NzU"
            alt="Sunday AI"
          />
          <h2 className="h-full w-full flex items-center justify-center bg-black/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.2vw] font-bold rounded-xl">
            Hundreds of people in unique homes
          </h2>
        </div>
        <div className="w-1/3 h-full border border-black/50 rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://imgs.search.brave.com/iiXRzXevvv8dfFh9FqgUtoIqzyMmJ_sZI9aOVg_-oTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9tZWNydXguY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzExL1N1bmRheS1S/b2JvdGljcy1NZW1v/LUhvdXNlLVJvYm90/LXBpY2tzLXVwLXBs/YXRlcy1hbmQtZ2xh/c3Nlcy1mcm9tLWRp/bmluZy10YWJsZS01/LmpwZw"
            alt="Sunday AI"
          />
          <h2 className="h-full w-full flex items-center justify-center bg-black/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.2vw] font-bold rounded-xl">
            Memo works in homes it's never seen
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MemoLearning;
