import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  // Sluit menu bij routeverandering
  useEffect(() => {
    setIsExpanded(false);
  }, [router.asPath]);

  return (
    <nav className={`navbar navbar-expand-md ${router.pathname === '/' ? 'home' : ''} fixed-top bg-white navbar-light`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <div className="p-2 m-0">
            <img className="pb-1 px-2" src="/img/general/terralemon.svg" alt="Hi, wij zijn Terralemon" />
          </div>
        </Link>
        <button 
          className={`hamburger hamburger--3dxy navbar-toggler bg-white border-0 p-2 ${isExpanded ? 'is-active' : ''}`} 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarCollapse" 
          aria-expanded={isExpanded} 
          aria-label="Toggle navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarCollapse">
          <ul className="navbar-nav ml-auto ms-auto d-flex align-items-center">
            <li className="nav-item me-auto">
              <Link 
                href="/cases" 
                className={`nav-link bg-white text-dark text-uppercase rounded px-3 me-sm-3 ${router.pathname.startsWith('/cases') ? 'active' : ''}`}
              >
                Cases
              </Link>
            </li>
            <li className="nav-item me-auto">
              <Link 
                href="/news" 
                className={`nav-link bg-white text-dark text-uppercase rounded px-3 me-sm-3 ${router.pathname.startsWith('/news') ? 'active' : ''}`}
              >
                Nieuws
              </Link>
            </li>
            <li className="nav-item me-auto">
              <Link 
                href="/about" 
                className={`nav-link bg-white text-dark text-uppercase rounded px-3 me-sm-3 ${router.pathname === '/about' ? 'active' : ''}`}
              >
                Over
              </Link>
            </li>
            <li className="nav-item me-auto">
              <Link 
                href="/contact" 
                className={`nav-link bg-white text-dark text-uppercase rounded px-3 ${router.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
            <div className="d-md-none d-sm-block position-relative">
              <h3 className="mt-5 mb-lg-3 px-3">Uitgelicht</h3>

              <Link href="/cases/tno-unboxed" className="card card_case card-ripple-js w-100 border-0 bg-dark text-white">
                <div className="card-frame overflow-hidden">
                  <img src="/videos/_medium/TNO-UB-project-image-5.jpg" className="position-absolute object-fit-contain w-100" alt="TNO Unboxed" />
                  <video poster="/videos/_medium/TNO-UB-project-image-5.jpg" className="card-img-top lazy" loop muted>
                    <source data-src="/videos/250113_Unboxed.mov" type="video/mp4" />
                  </video>
                </div>

                <div className="card-img-overlay p-3 d-flex">
                  <div className="card-body p-0 align-self-end">
                    <p className="card-text fw-medium mb-2">TNO Unboxed</p>
                    <h4 className="card-title fs-3 fw-light text-white mt-0 d-none d-lg-block">
                      Campagne waarin TNO experts nieuwe innovaties binnen het veiligheidsdomein bespreken
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="d-md-none d-sm-block position-relative px-3 w-100">
              <h3 className="mt-3 mb-lg-3">Wat is jouw doel?<br />Laat het ons weten!</h3>
              <p>Bel <a href="tel:0031206248300">+31 20 62 48 300</a> of <a href="mailto:fresh@terralemon.nl">mail</a> ons.</p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
} 