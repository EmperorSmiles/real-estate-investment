import Link  from "next/link";

export default function NavBar() {
    return (
      <nav className="bg-transparent text-gray-300 font-open_sans absolute inset-x-0 top-0 z-30">
        <div className="flex justify-around p-3 items-center ">
                  <h1 className="text-lg font-bold">Intelli<span className="text-indigo-500 font-extrabold">V</span>est</h1>
                  <ul className="flex space-x-3 text-sm ">
                      <li className="hover:text-white">
                      <Link href="/">Home</Link>
                      </li>
                      <li className="hover:text-white">
                      <Link href="header">How it Works</Link>
                      </li>
                      <li className="hover:text-white">
                      <Link href="#">Smart Property Investing</Link>
                      </li>
                      <li className="hover:text-white">
                      <Link href="#">Market Insights</Link>
                      </li>
                      <li className="hover:text-white">
                      <Link href="#">Market Insights</Link>
                      </li>
                      <li className="hover:text-white">
                      <Link href="#">FAQs</Link>
                      </li>
          </ul>
          <button className="bg-transparent rounded-3xl border-gray-300 border-2 px-2 hover:border-white hover:text-white">Get Started</button>
        </div>
      </nav>
    )
  }