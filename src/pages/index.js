import Layout from '../components/Layout';
import Link from 'next/link';
import useLazyVideo from '../components/LazyVideo';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  // Gebruik de hook voor lazy-loading video's
  useLazyVideo();
  
  const [swiperInstance, setSwiperInstance] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Swiper initialiseren als we in de browser zijn
    if (typeof window !== "undefined") {
      import('swiper/bundle').then(({ Swiper }) => {
        const swiper = new Swiper('.swiper_home_projects', {
          slidesPerView: 1,
          spaceBetween: 24,
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            }
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        
        setSwiperInstance(swiper);
      });
    }
    
    // Animatie voor de hero sectie
    if (heroRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(heroRef.current);
      
      return () => {
        if (heroRef.current) {
          observer.unobserve(heroRef.current);
        }
      };
    }
    
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, []);

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="main_banner_home position-relative d-flex align-items-center bg-black vh-100" ref={heroRef}>
        <div className="ratio ratio-16x9 overflow-hidden position-absolute top-0 start-0 w-100 h-100 z-0">
          <iframe 
            title="background-video" 
            className="background-video position-absolute" 
            src="https://player.vimeo.com/video/466248256?background=1&autoplay=1&loop=1&byline=0&title=0&controls=0&quality=1080p?dnt=1" 
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen
          ></iframe>
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        </div>
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-8 text-white">
              <h1 className="display-2 fw-bold mb-4 hero-title">Hi, wij zijn<br />Terralemon</h1>
              <h2 className="fs-1 fw-light mb-4 hero-subtitle">Wij zijn een creatief bureau voor<br />animatie, interactie en ontwerp</h2>
              <Link className="tl-btn tl-btn-primary mt-4" href="/cases">
                Bekijk onze cases
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x pb-4 text-white">
          <div className="mouse-icon mx-auto mb-2 border border-white rounded-pill" style={{width: '26px', height: '44px', position: 'relative'}}>
            <div className="wheel bg-white rounded-circle mx-auto" style={{width: '4px', height: '8px', marginTop: '8px', animation: 'scroll 1.5s ease-in-out infinite'}}></div>
          </div>
          <span className="small">Scroll naar beneden</span>
        </div>
      </div>

      {/* Latest Projects */}
      <div className="container-fluid border-top pt-4 bg-white">
        <div className="container px-lg-0">
          <div className="d-flex justify-content-between align-items-center p-lg-3 mb-4">
            <h2 className="section-title fs-1 fw-bold m-0">Laatste werk</h2>
            <Link className="tl-btn tl-btn-primary d-none d-lg-block" href="/cases">
              Bekijk onze cases
            </Link>
          </div>
          
          <section className="swiper_container position-relative mb-5 pb-4">
            <div className="swiper swiper_home_projects">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Link href="/cases/tno-unboxed-gpt-nl" className="card card_project card-hover border-0 h-100">
                    <div className="card-frame ratio ratio-16x9 overflow-hidden">
                      <img src="https://terralemon.nl/img/projects/_webp/medium_250115-TNO-NL-AI_.jpg_webp_40cd750bba9870f18aada2478b24840a.webp" className="card-img-top object-fit-cover w-100 h-100" alt="Afbeelding TNO Unboxed – GPT-NL" />
                    </div>
                    <div className="card-body px-0 pt-3">
                      <span className="badge tl-bg-green text-dark mb-2">Tech</span>
                      <h4 className="card-title text-dark fw-bold">TNO Unboxed – GPT-NL</h4>
                    </div>
                  </Link>
                </div>
                
                <div className="swiper-slide">
                  <Link href="/cases/tno-biobased-plastics" className="card card_project card-hover border-0 h-100">
                    <div className="card-frame ratio ratio-16x9 overflow-hidden">
                      <img src="https://terralemon.nl/img/cases/case2.jpg" className="card-img-top object-fit-cover w-100 h-100" alt="Afbeelding TNO Biobased Plastics" />
                    </div>
                    <div className="card-body px-0 pt-3">
                      <span className="badge tl-bg-green text-dark mb-2">Duurzaamheid</span>
                      <h4 className="card-title text-dark fw-bold">TNO Biobased Plastics</h4>
                    </div>
                  </Link>
                </div>
                
                <div className="swiper-slide">
                  <Link href="/cases/linxis" className="card card_project card-hover border-0 h-100">
                    <div className="card-frame ratio ratio-16x9 overflow-hidden">
                      <img src="https://terralemon.nl/img/cases/case3.jpg" className="card-img-top object-fit-cover w-100 h-100" alt="Afbeelding LinXis Biopharmaceuticals website" />
                    </div>
                    <div className="card-body px-0 pt-3">
                      <span className="badge tl-bg-green text-dark mb-2">Medisch</span>
                      <h4 className="card-title text-dark fw-bold">LinXis Biopharmaceuticals</h4>
                    </div>
                  </Link>
                </div>
                
                <div className="swiper-slide">
                  <Link href="/cases/rcsg" className="card card_project card-hover border-0 h-100">
                    <div className="card-frame ratio ratio-16x9 overflow-hidden">
                      <img src="https://terralemon.nl/img/cases/case4.jpg" className="card-img-top object-fit-cover w-100 h-100" alt="Afbeelding Rijswijk Center Sustainable Geo-energy" />
                    </div>
                    <div className="card-body px-0 pt-3">
                      <span className="badge tl-bg-green text-dark mb-2">Energie</span>
                      <h4 className="card-title text-dark fw-bold">Rijswijk Center Sustainable Geo-energy</h4>
                    </div>
                  </Link>
                </div>
                
                <div className="swiper-slide">
                  <Link href="/cases/tno-dit-is-onze-tijd-2" className="card card_project card-hover border-0 h-100">
                    <div className="card-frame ratio ratio-16x9 overflow-hidden">
                      <img src="https://terralemon.nl/img/cases/case5.jpg" className="card-img-top object-fit-cover w-100 h-100" alt="Afbeelding TNO Dit is onze tijd #2" />
                    </div>
                    <div className="card-body px-0 pt-3">
                      <span className="badge tl-bg-green text-dark mb-2">Tech</span>
                      <h4 className="card-title text-dark fw-bold">TNO Dit is onze tijd #2</h4>
                    </div>
                  </Link>
                </div>
                
                <div className="swiper-slide">
                  <Link href="/cases/tno-dit-is-onze-tijd" className="card card_project card-hover border-0 h-100">
                    <div className="card-frame ratio ratio-16x9 overflow-hidden">
                      <img src="https://terralemon.nl/img/cases/case6.jpg" className="card-img-top object-fit-cover w-100 h-100" alt="Afbeelding TNO Dit is onze tijd #1" />
                    </div>
                    <div className="card-body px-0 pt-3">
                      <span className="badge tl-bg-green text-dark mb-2">Tech</span>
                      <h4 className="card-title text-dark fw-bold">TNO Dit is onze tijd #1</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </section>
          <div className="d-lg-none d-flex justify-content-center mt-1 mb-5">
            <Link className="tl-btn tl-btn-primary" href="/cases">
              Bekijk onze cases
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Cases */}
      <div className="container-fluid bg-black py-5">
        <div className="container px-lg-0">
          <h2 className="section-title text-white mb-4">Uitgelichte cases</h2>
          <div className="row g-4">            
            <div className="col-md-12 col-lg-8">
              <Link href="/cases/tno-unboxed" className="card card_case card-hover w-100 border-0 bg-dark text-white position-relative overflow-hidden h-100">
                <div className="card-frame ratio ratio-16x9 overflow-hidden">
                  <img src="https://terralemon.nl/videos/_medium/TNO-UB-project-image-5.jpg" className="position-absolute object-fit-cover w-100 h-100" alt="TNO Unboxed" />
                  <video poster="https://terralemon.nl/videos/_medium/TNO-UB-project-image-5.jpg" className="lazy w-100 h-100 object-fit-cover" loop muted>
                    <source data-src="https://terralemon.nl/videos/250113_Unboxed.mov" type="video/mp4" />
                  </video>
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                </div>

                <div className="card-img-overlay p-4 d-flex flex-column justify-content-end">
                  <span className="badge tl-bg-green text-dark mb-2">Video</span>
                  <p className="card-text fw-bold mb-2 h5">TNO Unboxed</p>
                  <h3 className="card-title fs-3 fw-light text-white mt-0">Campagne waarin TNO experts nieuwe innovaties binnen het veiligheidsdomein bespreken</h3>
                </div>
              </Link>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <Link href="/cases/tno-energy-materials" className="card card_case card-hover w-100 border-0 bg-dark text-white position-relative overflow-hidden h-100">
                <div className="card-frame ratio ratio-16x9 overflow-hidden">
                  <img src="https://terralemon.nl/img/cases/case2.jpg" className="position-absolute object-fit-cover w-100 h-100" alt="TNO Energy & Materials Transition" />
                  <video poster="https://terralemon.nl/img/cases/case2.jpg" className="lazy w-100 h-100 object-fit-cover" loop muted>
                    <source data-src="https://terralemon.nl/videos/210315-WarmingUP.mov" type="video/mp4" />
                  </video>
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                </div>

                <div className="card-img-overlay p-4 d-flex flex-column justify-content-end">
                  <span className="badge tl-bg-green text-dark mb-2">Energie</span>
                  <p className="card-text fw-bold mb-2 h5">TNO Energy &amp; Materials Transition</p>
                  <h3 className="card-title fs-4 fw-light text-white mt-0">Innovatieve technologieën voor een duurzame energievoorziening</h3>
                </div>
              </Link>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <Link href="/cases/tno-healthy-living" className="card card_case card-hover w-100 border-0 bg-dark text-white position-relative overflow-hidden h-100">
                <div className="card-frame ratio ratio-16x9 overflow-hidden">
                  <img src="https://terralemon.nl/img/cases/case3.jpg" className="position-absolute object-fit-cover w-100 h-100" alt="TNO Healthy Living & Work" />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                </div>

                <div className="card-img-overlay p-4 d-flex flex-column justify-content-end">
                  <span className="badge tl-bg-green text-dark mb-2">Ontwerp</span>
                  <p className="card-text fw-bold mb-2 h5">TNO Healthy Living &amp; Work</p>
                  <h3 className="card-title fs-4 fw-light text-white mt-0">Wezenlijke innovaties in de gezondheidszorg helder in beeld gebracht</h3>
                </div>
              </Link>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <Link href="/cases/tno-biobased-plastics" className="card card_case card-hover w-100 border-0 bg-dark text-white position-relative overflow-hidden h-100">
                <div className="card-frame ratio ratio-16x9 overflow-hidden">
                  <img src="https://terralemon.nl/img/cases/case4.jpg" className="position-absolute object-fit-cover w-100 h-100" alt="TNO Biobased Plastics" />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                </div>

                <div className="card-img-overlay p-4 d-flex flex-column justify-content-end">
                  <span className="badge tl-bg-green text-dark mb-2">Duurzaamheid</span>
                  <p className="card-text fw-bold mb-2 h5">TNO Biobased Plastics</p>
                  <h3 className="card-title fs-4 fw-light text-white mt-0">Visuele uitleg van de transitie naar biologisch afbreekbaar plastic</h3>
                </div>
              </Link>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <Link href="/cases/linxis" className="card card_case card-hover w-100 border-0 bg-dark text-white position-relative overflow-hidden h-100">
                <div className="card-frame ratio ratio-16x9 overflow-hidden">
                  <img src="https://terralemon.nl/img/cases/case5.jpg" className="position-absolute object-fit-cover w-100 h-100" alt="LinXis" />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                </div>

                <div className="card-img-overlay p-4 d-flex flex-column justify-content-end">
                  <span className="badge tl-bg-green text-dark mb-2">Medisch</span>
                  <p className="card-text fw-bold mb-2 h5">LinXis</p>
                  <h3 className="card-title fs-4 fw-light text-white mt-0">Website en corporate identity voor biotech bedrijf</h3>
                </div>
              </Link>
            </div>
            
            <div className="col-12 d-flex justify-content-center mt-4">
              <Link href="/cases" className="tl-btn tl-btn-primary">
                Bekijk alle cases
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="container-fluid py-5 tl-bg-green">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title mb-3">Wat is jouw doel?</h2>
              <p className="fs-4 fw-light">We denken graag met je mee over jouw project of uitdaging.</p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column flex-md-row justify-content-lg-end gap-3">
                <Link href="/contact" className="tl-btn tl-btn-secondary">
                  Neem contact op
                </Link>
                <Link href="/about" className="tl-btn tl-btn-secondary">
                  Meer over ons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero-title {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .hero-subtitle {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        
        .animate-in .hero-title,
        .animate-in .hero-subtitle {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </Layout>
  );
} 