import Image from "next/image"
import Link from "next/link"

function NavBar() {
    return (
        <header className="px-16 hidden sm:block absolute w-full z-10">
            <div className="flex items-center justify-between text-white tracking-wide">
                <Image src={"/logo.png"} alt="logo" width={130} height={130} />
                <div className=" flex items-center space-x-5">
                    <Link href="/" className="px-3 py-2">Top offers</Link>
                    <Link href="/about" className="px-3 py-2">Search in offers</Link>
                    <Link href="/contact" className="px-3 py-2">About us</Link>
                    <button className="bg-teal-600 py-2 px-3 rounded-md">Contact us</button>
                </div>
            </div>
        </header>
    )
}

export default NavBar