function Navigator() {
  return (
    <div>
        <nav className="flex p-4 text-green-200 bg-gray-800">
            <ul>
                <li><a href="#Dashboard" className="hover:text-gray-400">Home</a></li>
                <li><a href="#Reports" className="hover:text-gray-400">Reports</a></li>
                <li><a href="#Issue" className="hover:text-gray-400">Issues</a></li>
                <li><a href="#Contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navigator;