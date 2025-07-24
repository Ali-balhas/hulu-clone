import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BoltIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col items-center sm:flex-row m-5 justify-between h-auto">
      <div className="flex flex-grow justify-evenly  max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image src="/hulu-logo-black-and-white.png" width={200} height={100} />
    </header>
  );
}

export default Header;
