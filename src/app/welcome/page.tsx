"use client";
import Image from "next/image";
import plate from "../../../public/image-from-rawpixel-id-12625945-png.png";
import wave from "../../../public/waves-2-large.svg";
import { useEffect } from "react";
import Link from "next/link";
export default function Welcome() {
  useEffect(() => {
    localStorage.setItem("isFirstTime", "true");
  });

  return (
    <div className="overflow-hidden">
      <div className="h-[70vh] flex flex-col justify-evenly bg-blue-600">
        <Image
          src={plate}
          width={280}
          height={280}
          alt="plate"
          className="-ml-20"
        />
        <Image
          src={plate}
          width={280}
          height={280}
          alt="plate"
          className="self-end -mr-20 -mt-20"
        />
      </div>
      <div className="bg-divider bg-no-repeat bg-bottom bg-cover h-9 -my-1"></div>
      <div className="h-[25vh] bg-white flex flex-col justify-evenly items-center">
        <p className="text-2xl">welcome</p>
        <Link
          href="/"
          className="bg-blue-600 py-3 text-center w-[90vw] rounded-2xl text-white text-xl"
        >
          go to store
        </Link>
      </div>
    </div>
  );
}
