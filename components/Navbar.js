import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark ">
      <div className="container">
        <Link href="/" passHref className="navbar-brand">
            Portfolio
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
