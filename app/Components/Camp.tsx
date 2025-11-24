import React from "react";
import Image from "next/image";

const Camp = () => {
  return (
    <div className="relative w-full rounded-[40px] overflow-hidden bg-white">
      {/* TOP LEFT BADGE */}
      <div className="absolute top-8 left-8 z-30 flex items-center gap-4">
        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
          {/* using the folded-map svg from your assets */}
          <Image
            src="/folded-map.svg"
            alt="map icon"
            width={28}
            height={28}
          />
        </div>

        <div>
          <h2 className="text-white font-bold text-xl">Putuk Truno Camp</h2>
          <p className="text-gray-200 text-sm -mt-1">Prigen, Pasuruan</p>
        </div>
      </div>

      {/* MAIN IMAGE - using uploaded local path (will be transformed to a URL) */}
      <Image
        src="/img-2.png"
        alt="camp"
        width={1900}
        height={1100}
        className="w-full h-[740px] md:h-[780px] lg:h-[820px] object-cover"
      />

      {/* BOTTOM LEFT AVATARS */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4">
        <div className="flex -space-x-3">
          <Image
            src="/person-1.png"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/person-2.png"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/person-3.png"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
          />
        </div>

        <p className="text-white font-semibold text-lg drop-shadow-lg">50+ Joined</p>
      </div>

      {/* GREEN OVERLAY CARD (bottom-right, overlapping image) */}
      <div className="absolute z-40 right-6 bottom-[-20px] md:bottom-6 w-[78%] md:w-[62%] lg:w-[55%]">
        <div className="bg-[#28a84a] rounded-[36px] p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* subtle decorative circles on the right (semi-transparent) */}
          <div className="absolute right-6 top-12 opacity-10">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="60" fill="white" />
            </svg>
          </div>
          <div className="absolute right-0 bottom-6 opacity-10">
            <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="40" height="80" rx="6" fill="white" />
            </svg>
          </div>

          <h3 className="text-white font-extrabold text-2xl md:text-4xl leading-tight">
            <span className="inline-block">Feeling Lost</span>{" "}
            <span className="font-semibold">And Not Knowing The Way?</span>
          </h3>

          <p className="text-white/95 mt-4 text-sm md:text-base max-w-[80%]">
            Starting from the anxiety of the climbers when visiting a new climbing location,
            the possibility of getting lost is very large. That's why we are here for those
            of you who want to start an adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Camp;
