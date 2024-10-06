import Image from "next/image";
import plate from "../../../public/image-from-rawpixel-id-12625945-png.png";

export default function Welcome() {
  return (
    <div className=" bg-blue-600 overflow-hidden">
      <div className="h-[75vh] flex flex-col justify-evenly">
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
      <svg
        className="-my-[1px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="#2563EB"
      >
        <rect fill="#FFFFFF" width="100%" height="100%" />
        <path d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z"></path>
      </svg>
      <div className="h-[20vh] bg-white flex flex-col justify-evenly items-center">
        <p className="text-2xl">welcome</p>
        <button className="bg-blue-600 py-3 text-center w-[90vw] rounded-2xl text-white text-xl">
          go to store
        </button>
      </div>
    </div>
  );
}
