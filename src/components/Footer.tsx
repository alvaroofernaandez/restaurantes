import { IoRestaurant } from "react-icons/io5";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full h-fit bg-gray-950 text-[#e5e7eb] px-14 py-14">
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 justify-center w-[35%]">
            <div className="flex items-center w-full gap-4">
              <IoRestaurant className="mr-5 size-16"/>
              <div className="text-3xl font-bold">Restaurantes</div>
            </div>
          </div>
          <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#9ca3af] pb-3">
                  Compañía
                </div>{" "}
                <a href="#xxx" className="hover:underline">
                  About Us
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Contact
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Support
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  News
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#9ca3af] pb-3">
                  Legal
                </div>{" "}
                <a href="#xxx" className="hover:underline">
                  Imprint
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Privacy Policy
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Terms of Use
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#9ca3af] pb-3">
                Newsletter
              </div>
              <p className="text-[#e5e7eb] mb-2">
                Subscribe to our newsletter.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-purple-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 text-[#ffffff] font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
