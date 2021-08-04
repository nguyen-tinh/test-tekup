import Image from "next/image";

function LeatherType({ id, content, image }) {
  return (
    <div className="p-1 flex justify-center items-center relative hover:border-2 hover:border-solid hover:border-[#BDAA66] focus:border-2 focus:border-solid focus:border-[#BDAA66]">
      <h1 className="absolute top-7 sm:top-5 lg:top-8 text-sm sm:text-xs text-white font-normal z-10">{content}</h1>
      <Image
        className=""
        src={image}
        width={100}
        height={70}
        objectFit="cover"
      />
    </div>
  );
}

export default LeatherType;
