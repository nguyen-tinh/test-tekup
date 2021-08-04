import Image from "next/image";
import Modal from "./UI/Modal";
import { XCircleIcon } from "@heroicons/react/outline";

function MenuNavBar({ onClose }) {
  return (
    <Modal onClose={onClose}>
      {/* header */}
      <div className="p-4 flex items-center justify-between border-b-2 border-[#E0DCDC] border-solid">
        <Image
          className="flex flex-grow lg:flex-shrink-0"
          src="https://s3-alpha-sig.figma.com/img/7dd7/b846/63c05140c8097e5101b1bcb5ba33a0a8?Expires=1628467200&amp;Signature=YfePf4H81g4HAz9wicwRUWzG0vT8pmoY7NRtmNSiTd~e8biXhhxiz0m85fX4pHvIcjFB1wuYQEtrL8oV43Y8ZpXX2AxdXVwnpqQMI3E7aSPNxvpf6a9RoRf2NMKna82chpZvoZ-gwjDNvhu52YHsJJfMg68UQZkDn7xndafzNdtvZYi4PAplNwDyWavgeZqzKTHdU6CBluXGqrRUE0HqVfzDM-jmL8qXS60awXUkLnWYgjBjd1iwiOc0KdJKUt4sxKuLva2o0RWORjewssi6oGwokBgSrESe1n0D~WDCmbem1M~0Ro2tOYGlUa063aALBLPF5rc0HydOdJBJ-HPnew__&amp;Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          width={100}
          height={50}
          objectFit="contain"
        />
        <div onClick={onClose} className="p-2">
          <XCircleIcon className="h-8" />
        </div>
      </div>

      {/* navbar */}
      <div className="flex flex-col p-4 space-y-6">
        <div className="flex flex-col space-y-3">
          <a className="menu-link">Language English</a>
          <a className="menu-link">Login</a>
          <a className="menu-link">Cart</a>
          <a className="menu-link">Search</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a className="menu-link">Design your own</a>
          <a className="menu-link">Collection</a>
          <a className="menu-link link-active">Bags</a>
          <a className="menu-link">Our story</a>
          <a className="menu-link">News</a>
          <a className="menu-link">Contact</a>
        </div>
      </div>
    </Modal>
  );
}

export default MenuNavBar;
