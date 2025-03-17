import Layout from '../components/Layout';
import Link from 'next/link';

export default function About() {
  // Lijst met logo's van klanten
  const clientLogos = [
    { id: 'avrotros', name: 'AVROTROS', logo: 'https://terralemon.nl/img/clients/_small/avrotros_logo.png' },
    { id: 'kro-ncrv', name: 'KRO-NCRV', logo: 'https://terralemon.nl/img/clients/_small/kro-ncrv_logo.png' },
    { id: 'npo', name: 'NPO', logo: 'https://terralemon.nl/img/clients/_small/npo_logo.png' },
    { id: 'nfu', name: 'NFU', logo: 'https://terralemon.nl/img/clients/_small/nfu_logo.png' },
    { id: 'tno', name: 'TNO', logo: 'https://terralemon.nl/img/clients/_small/tno_logo.png' },
    { id: 'ing', name: 'ING', logo: 'https://terralemon.nl/img/clients/_small/ing_logo.png' },
    { id: 'minezk', name: 'Ministerie van Economische Zaken', logo: 'https://terralemon.nl/img/clients/_small/minezk_logo.png', colSize: 3 },
    { id: 'foodvalley', name: 'Foodvalley', logo: 'https://terralemon.nl/img/clients/_small/foodvalley.png', colSize: 3 },
    { id: 'pbl', name: 'Planbureau voor de leefomgeving', logo: 'https://terralemon.nl/img/clients/_small/Planbureau_voor_de_leefomgeving.png', colSize: 3 },
    { id: 'go', name: 'GO! Kinderopvang', logo: 'https://terralemon.nl/img/clients/_small/go-kinderopvang_logo.png', colSize: 3 },
    { id: 'pcsi', name: 'PCSI', logo: 'https://terralemon.nl/img/clients/_small/logo-pcsi.png', colSize: 3 }
  ];

  return (
    <Layout title="Over ons" description="Wij zijn Terralemon. Leer ons team kennen en ontdek onze visie, missie en waarden.">
      {/* Hero Banner */}
      <div className="main_banner position-relative d-flex align-items-center bg-black text-white">
        <div className="ratio ratio-16x9 overflow-hidden z-n1">
          <iframe 
            title="background-video" 
            className="background-video position-absolute" 
            src="https://player.vimeo.com/video/466248256?background=1&controls=0&quality=1080p?dnt=1" 
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="vw-100 position-absolute">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-6">
                <h2 className="display-5 text-light">Daar waar identiteit, motion en interactie elkaar raakt ligt onze kracht.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onze aanpak */}
      <div className="container-fluid bg-light">
        <div className="container px-0 py-lg-3">
          <div className="row gx-lg-5 py-4 py-lg-0">
            <div className="col-lg-4 py-lg-5">
              <h3 className="display-6 mb-2">Strategie</h3>
              <p className="lead">We focussen samen met onze klant op propositie, inhoud en kernwaarden. Op wat belangrijk is en wat er bereikt moet worden. We formuleren heldere doelstellingen. En scherpen voortdurend aan wat er echt verteld moet worden.</p>
            </div>
            <div className="col-lg-4 py-lg-5">
              <h3 className="display-6 mb-2">Identiteit</h3>
              <p className="lead">Inhoud en strategie vertalen we naar het merkverhaal en de visuals. Logo-ontwerp, storyboards, styleframes, interactie-ideeën. We gaan op zoek naar een unieke insteek waarbij we vanuit experimenten tot de kern komen.</p>
            </div>
            <div className="col-lg-4 py-lg-5">
              <h3 className="display-6 mb-2">Creatie</h3>
              <p className="lead">We verleggen onze grenzen en zoeken naar nieuwe manieren om een verhaal te vertellen. Een creatief iteratief proces waarbij we zo concreet mogelijk te werk gaan. De realisatie doen we in house en in veelvuldig overleg met onze klant.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="container-fluid bg-white mb-lg-5">
        <div className="container">
          <h2 className="text-center my-4">Onze opdrachtgevers</h2>
          <div className="row gx-lg-5 bg-white">
            {clientLogos.map((client) => (
              <div className={`col-6 col-md-${client.colSize || 6} col-lg-${client.colSize || 4}`} key={client.id}>
                <Link href={`/clients/${client.id}`} className="card card_client p-3 my-3 d-flex justify-content-center border-0 h-100">
                  <img src={client.logo} className="card-img" alt={`Logo ${client.name}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Het team */}
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row my-5 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://terralemon.nl/img/general/team.jpg" alt="Terralemon Team" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <h3 className="fs-2 mb-3">We zijn net zo strategisch als creatief</h3>
              <p className="lead">Terralemon is in 2004 opgericht door Harold Kuiper, Arthur Kloostra en Remco Pijpers. Momenteel werkt Harold Kuiper aan het roer met een fantastisch team van vaste medewerkers en een flexibele schil van experts op het gebied van strategie, creativiteit, content, technologie, film en animatie.</p>
              <p>Dat zorgt voor de juiste balans tussen continuïteit en flexibiliteit. Op die manier kunnen we altijd de juiste mix van kennis en ervaring inzetten om onze opdrachtgevers optimaal te bedienen.</p>
              <p className="mb-0">We kennen elkaar door en door, vullen elkaar aan en dagen elkaar elke dag uit. Altijd met maar één doel voor ogen: het beste resultaat voor onze opdrachtgevers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fs-1">Wat is jouw doel?</h2>
              <p className="lead">We denken graag met je mee.</p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-lg-end">
                <Link href="/contact" className="btn btn-primary me-3">
                  Neem contact op
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 