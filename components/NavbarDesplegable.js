import { useState } from 'react';
import { Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';

const NavbarDesplegable = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    smoothScrollTo(menuItem);
  };

  const smoothScrollTo = (target) => {
    const element = document.getElementById(target);
    const offset = 70; // Ajusta el desplazamiento según sea necesario

    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container-nav-desplegable">
      <nav className="navbar-desplegable">
        <ul className="ul-nav-desplegable">
          <li
            className={`icons-navbar ${activeMenuItem === 'sobre-mi' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('sobre-mi')}
          >
            <Tooltip title="Sobre mí">
              <a href="#sobre-mi">
                <PersonIcon className="icons-navbar" />
              </a>
            </Tooltip>
          </li>
          <li
            className={`icons-navbar ${activeMenuItem === 'skills' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('skills')}
          >
            <Tooltip title="Skills">
              <a href="#skills">
                <BuildIcon className="icons-navbar" />
              </a>
            </Tooltip>
          </li>
          <li
            className={`icons-navbar ${activeMenuItem === 'portfolio' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('portfolio')}
          >
            <Tooltip title="Portfolio">
              <a href="#portfolio">
                <WorkIcon className="icons-navbar" />
              </a>
            </Tooltip>
          </li>
          <li
            className={`icons-navbar ${activeMenuItem === 'experiencias' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('experiencias')}
          >
            <Tooltip title="Experiencias">
              <a href="#experiencias">
                <ArticleIcon className="icons-navbar" />
              </a>
            </Tooltip>
          </li>
          <li
            className={`icons-navbar ${activeMenuItem === 'contacto' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('contacto')}
          >
            <Tooltip title="Contacto">
              <a href="#contacto">
                <EmailIcon className="icons-navbar" />
              </a>
            </Tooltip>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDesplegable;
