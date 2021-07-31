import Image from "next/image";

function LeatherType({ id, content, image }) {
  return (
    <div className="p-2 flex justify-center items-center relative active:border-2 active:border-solid active:border-[#BDAA66] focus:border-2 focus:border-solid focus:border-[#BDAA66]">
      <h1 className="absolute top-7 text-12 text-white font-normal z-10">{content}</h1>
      <Image
        className="rounded-lg"
        src={image}
        width={100}
        height={70}
        objectFit="contain"
      />
    </div>
  );
}

export default LeatherType;
