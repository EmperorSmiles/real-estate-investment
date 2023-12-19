import Link  from "next/link";

export default function NavBar() {
    return (
      <nav className="bg-gray-400 text-gray-900 font-playfair font-bold">
        <div className="flex justify-between p-3">
                  <h1 className="">IntelliVest</h1>
                  <ul className="flex space-x-7">
                      <li>
                      <Link href="/">Home</Link>
                      </li>
                      <li>
                      <Link href="#">How it Works</Link>
                      </li>
                      <li>
                      <Link href="#">Smart Property Investing</Link>
                      </li>
                      <li>
                      <Link href="#">Market Insights</Link>
                      </li>
                      <li>
                      <Link href="#">Market Insights</Link>
                      </li>
                      <li>
                      <Link href="#">FAQs</Link>
                      </li>
          </ul>
        </div>
      </nav>
    )
  }