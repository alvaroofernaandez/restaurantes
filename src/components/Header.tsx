import { IoRestaurant } from "react-icons/io5";

export function Header() {
  return (
    <>
      <header className="w-screen h-20 bg-gray-950 text-slate-300 ">
          <IoRestaurant className="pt-5 mx-auto transition-all duration-300 cursor-pointer size-16 hover:scale-125"/>
      </header>
    </>
  )
}