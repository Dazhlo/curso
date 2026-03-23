
import Link from "next/link";



export const Navbar = async() => {
    return (
        <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded ">
     
            <div className="flex flex-1">
                <Link className="mr-2" href="/about">about</Link>
                <Link className="mr-2" href="/contact">contect</Link>
                <Link className="mr-2" href="/pricing">pricing</Link>
            </div>
        </nav>

    )

}

