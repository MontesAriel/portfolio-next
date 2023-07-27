import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
      <div className="container">
        <Link href="/" passHref className="navbar-brand">
            Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto">
            <Link href="/" passHref className="nav-link">
              Inicio
            </Link>
            <Link href="/github" passHref className="nav-link">
              Github
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
