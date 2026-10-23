import Link from "next/link";

const Navbar = () => {
  const navLinks = 
  <>
  <li>
    <Link href={"/about-us"}>About Us</Link>
  </li>

  <li>
    <Link href={"/contact"}>Contact</Link>
    </li>
  <li>
    <Link href={"/dashboard"}>Dashboard</Link>
    </li>
  <li>
    <Link href={"/dashboard/user"}>User</Link>
    </li>
  <li>
    <Link href={"/dashboard/admin"}>Admin</Link>
    </li>
  <li>
    <Link href={"/users"}>Users</Link>
    </li>
  <li>
    <Link href={"/foods"}>Foods</Link>
    </li>
      
  </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    {/* {"/"} --> means home page */}
    <Link href={'/'} className="btn btn-ghost text-xl">My APP</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;