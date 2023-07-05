import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" href="/"> 
                Portfolio
            </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <Link className="nav-link" href="/">
                    Home
                </Link>

                <Link className="nav-link"href="/github">
                   Github
                </Link>
              
            </div>
        </div>
        </div>
    </nav>
    
)

export default Navbar;