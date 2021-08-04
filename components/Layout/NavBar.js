import {
  GlobeAltIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

function NavBar({onShowMenu}) {
  return (
    <div className="relative bg-white h-32 container mx-auto">
      <div className="text-primary items-center justify-center flex py-8 text-xs">
        {/* left  */}
        <div className="hidden lg:flex flex-1 space-x-5 items-center cursor-pointer">
          <div className="flex space-x-1 items-center font-base">
            <GlobeAltIcon className="h-8" />
            <p className="">English</p>
          </div>

          <div className="bg-[#f9f9f9] cursor-pointer flex space-x-1 items-center font-base py-2 px-2 hover:border-2 hover:border-solid hover:border-primary rounded-xl">
            <UserCircleIcon className="h-8" />
            <p>Log in</p>
          </div>
          <ShoppingCartIcon className="h-8 cursor-pointer" />
          <SearchIcon className="h-8 cursor-pointer" />
        </div>

        {/* logo */}
        <Image
          className="flex flex-grow lg:flex-shrink-0"
          src="https://s3-alpha-sig.figma.com/img/7dd7/b846/63c05140c8097e5101b1bcb5ba33a0a8?Expires=1628467200&amp;Signature=YfePf4H81g4HAz9wicwRUWzG0vT8pmoY7NRtmNSiTd~e8biXhhxiz0m85fX4pHvIcjFB1wuYQEtrL8oV43Y8ZpXX2AxdXVwnpqQMI3E7aSPNxvpf6a9RoRf2NMKna82chpZvoZ-gwjDNvhu52YHsJJfMg68UQZkDn7xndafzNdtvZYi4PAplNwDyWavgeZqzKTHdU6CBluXGqrRUE0HqVfzDM-jmL8qXS60awXUkLnWYgjBjd1iwiOc0KdJKUt4sxKuLva2o0RWORjewssi6oGwokBgSrESe1n0D~WDCmbem1M~0Ro2tOYGlUa063aALBLPF5rc0HydOdJBJ-HPnew__&amp;Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          width={100}
          height={50}
          objectFit="contain"
        />

        {/* right */}
        <div className="hidden lg:flex flex-1 space-x-5 items-center text-center justify-end">
          <a className="cursor-pointer">Design your own</a>
          <a className="cursor-pointer">Collection</a>
          <a className="cursor-pointer link-active">Bags</a>
          <a className="cursor-pointer">Our story</a>
          <a className="cursor-pointer">News</a>
          <a className="cursor-pointer">Contact</a>
        </div>

        {/* Menu button */}
        <div onClick={onShowMenu} className='lg:hidden absolute p-4 right-0'>
        <MenuIcon className="h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
