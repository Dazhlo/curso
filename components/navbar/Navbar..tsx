

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded ">
            <span>Home</span>

            <div className="flex flex-1">
                <a className="mr-2" href="/about">about</a>
                <a className="mr-2" href="/contact">contect</a>
                <a className="mr-2" href="/pricing">pricing</a>
            </div>
        </nav>

    )

}

