import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
        {/* Left section */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image
                src='https://links.papareact.com/qd3'
                layout="fill"
                objectFit="contain" objectPosition="left"
             />
        </div>

        {/* Middle Search section */}
        <div className="flex items-center border-2 md:border-2 rounded-full py-2 md:shadow-sm">
            <input className="flex-grow pl-5 bg-transparent text-sm text-gray-600 focus:outline-none placeholder-gray-400" type="text" placeholder="Start your search" />
            <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/* Right section */}
        <div className="flex items-center justify-end space-x-4 text-gray5600">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex space-x-4 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
    </header>
  )
}

export default Header