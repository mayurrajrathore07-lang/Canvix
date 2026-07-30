function Navbar() {
    return (
        <nav className="container mx-auto flex items-center justify-between py-6">

            <h1 className="text-4xl font-bold">
                Canvix
            </h1>

            <ul className="flex gap-10">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>

            <button className="bg-white text-black px-6 py-3 rounded-full">
                Get in touch
            </button>

        </nav>
    );
}

export default Navbar;