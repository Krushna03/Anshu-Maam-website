import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-white flex h-20 w-full items-center justify-between px-4 md:px-6 lg:px-20 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center gap-2">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img
            src="/anju-logo-removebg.png"
            alt="SN Logo"
            className="w-28 h-auto"
          />
        </Link>
      </div>
      <nav className="hidden md:flex gap-6 lg:gap-10">
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          HOME
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          ABOUT
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          CONSULTING
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          BOOKS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          WRITING
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          MEDIA
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          BLOG
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="relative text-sm xl:text-base font-semibold text-custom-plum hover:text-[#cd85ad] transition-all duration-300 group"
          prefetch={false}
        >
          CONTACT
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd85ad] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      {/* <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-custom-plum">SEARCH</span>
        <Search className="h-5 w-5 text-custom-plum" />
      </div> */}
    </header>
  )
}
