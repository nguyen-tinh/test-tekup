import { CheckCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Currency from "react-currency-formatter";

function Footer() {
  return (
    <div className="border-solid border-t-2 border-[#E0DCDC]">
      <div className="container mx-auto flex items-center">
        {/* left */}
        <div className="h-24 flex items-center flex-1 flex-shrink">
          <div className="flex flex-col items-center justify-center px-6 border-r-2 border-solid border-[#E0DCDC]">
            <p className="text-xs text-primary mb-2">FLAP</p>
            <CheckCircleIcon className="h-6 text-[#96B444]" />
          </div>

          <div className="flex flex-col items-center justify-center px-6 border-r-2 border-solid border-[#E0DCDC]">
            <p className="text-xs text-primary mb-2">BODY</p>
            <CheckCircleIcon className="h-6 text-[#96B444]" />
          </div>

          <div className="flex flex-col items-center justify-center px-6 border-r-2 border-solid border-[#E0DCDC]">
            <p className="text-xs text-primary mb-2">STRAP</p>
            <CheckCircleIcon className="h-6 text-[#E0DCDC]" />
          </div>

          <div className="flex flex-col items-center justify-center px-6 border-r-2 border-solid border-[#E0DCDC]">
            <p className="text-xs text-primary mb-2">HARDWARE</p>
            <CheckCircleIcon className="h-6 text-[#E0DCDC]" />
          </div>

          <div className="flex flex-col items-center justify-center px-6 border-r-2 border-solid border-[#E0DCDC]">
            <p className="text-xs text-primary mb-2">HANDLE</p>
            <CheckCircleIcon className="h-6 text-[#E0DCDC]" />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-1 justify-around items-center">

          <div className='flex items-center'>
            <Image
              src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1628467200&amp;Signature=PMLAa-oxilbQRvP1H6BOkUEME6T3lWmAyZzgxDSfmc3lFWoBuax5-t7ykgWDxjcZByGEnUzszad7bNr2Jg67F8~cchvfGDQgtS7xofDw-G2wFeoa4lpuFcjjmyDgGzOH4L0QEpRf89~ylazfhR0ZPtNo3UTuWNt7YjzT-ysGRxctBCjfVfaJXV2Nq5M-zeJEbkDEXKmjYfxopLlQXyyJSF6nXAeWfvr07DLucA9P5IeFZrkQJhRF0IQwVMLjdtKdhzgJXBrLLu0maRbWyy6BxD0P8snmRC1eAlKUB~d4e6MrhqjuLZZcbzyMz2RYckN1nZKK6ArR82Q0358zQqAyoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width={85}
              height={85}
              objectFit="contain"
            />
            <Currency quantity={1430} currency="USD" />
          </div>

            <button className='h-12 bg-[#C6B67E] py-2 px-8'>DONE &amp; ADD TO CART</button>

        </div>
      </div>
    </div>
  );
}

export default Footer;
