import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

// Voorbeeld nieuws data
const newsItems = [
  {
    id: 'nieuwe-website-2023',
    title: 'Nieuwe website Terralemon',
    excerpt: 'We hebben onze website vernieuwd met een fris ontwerp en verbeterde gebruikerservaring.',
    content: `
      <p>We zijn verheugd om onze compleet vernieuwde website te lanceren. Deze nieuwe site is ontworpen met gebruiksvriendelijkheid en visuele impact als belangrijkste prioriteiten.</p>
      <p>De nieuwe website biedt:</p>
      <ul>
        <li>Een verbeterde portfolioweergave met gedetailleerde case studies</li>
        <li>Snellere laadtijden dankzij geoptimaliseerde code</li>
        <li>Een volledig responsief ontwerp dat perfect werkt op alle apparaten</li>
        <li>Verbeterde navigatie voor een intuïtievere gebruikerservaring</li>
      </ul>
      <p>We nodigen je uit om de site te verkennen en feedback te geven. Dit is nog maar het begin - we hebben plannen om de komende maanden nog meer functies en inhoud toe te voegen.</p>
    `,
    date: '15 maart 2023',
    image: '/img/news/news1.jpg',
    categories: ['updates']
  },
  {
    id: 'tno-animation-award',
    title: 'TNO Unboxed wint animatie award',
    excerpt: 'Onze animatie voor TNO Unboxed is bekroond met een internationale prijs voor innovatieve animatie.',
    content: `
      <p>We zijn trots om aan te kondigen dat onze animatie voor het TNO Unboxed project is bekroond met een internationale prijs voor innovatieve animatie en storytelling.</p>
      <p>De jury prees de combinatie van technische complexiteit en visuele helderheid in het overbrengen van complexe wetenschappelijke concepten aan een breed publiek.</p>
      <p>"Terralemon heeft bewezen dat animatie een krachtig medium is voor kennisoverdracht en communicatie van geavanceerde technologische concepten", aldus de juryvoorzitter.</p>
      <p>Het TNO Unboxed-project was een samenwerking tussen ons creatieve team en de wetenschappelijke experts van TNO, met als doel hun innovatieve onderzoek op een toegankelijke manier te presenteren.</p>
    `,
    date: '28 februari 2023',
    image: '/img/news/news2.jpg',
    categories: ['awards', 'cases']
  },
  {
    id: 'terralemon-op-award-show',
    title: 'Terralemon aanwezig op Dutch Design Week',
    excerpt: 'Kom ons ontmoeten op de Dutch Design Week waar we onze laatste projecten presenteren.',
    content: `
      <p>Terralemon is trots om aan te kondigen dat we deelnemen aan de komende Dutch Design Week in Eindhoven. Dit prestigieuze evenement brengt de beste ontwerpers uit Nederland en daarbuiten samen om hun werk te presenteren en te bespreken.</p>
      <p>Tijdens het evenement zullen we een selectie van onze nieuwste projecten tonen, met bijzondere aandacht voor ons werk in animatie en interactief ontwerp. Bezoekers kunnen hands-on ervaring opdoen met onze interactieve installaties en een kijkje nemen achter de schermen van ons creatieve proces.</p>
      <p>Ons team zal aanwezig zijn om vragen te beantwoorden en te netwerken met andere professionals in de industrie. We kijken ernaar uit om met u in gesprek te gaan over de nieuwste trends en mogelijkheden in digitaal ontwerp.</p>
      <p>De Dutch Design Week vindt plaats van 21 tot 29 oktober. U kunt ons vinden in de Innovation Hall, stand 42.</p>
    `,
    date: '10 januari 2023',
    image: '/img/news/news3.jpg',
    categories: ['events']
  },
  {
    id: 'case-study-linxis',
    title: 'Case study: LinXis website',
    excerpt: 'Lees onze nieuwe case study over de ontwikkeling van de LinXis website en hoe we hun visuele identiteit hebben vertaald naar een digitale ervaring.',
    content: `
      <p>We hebben onlangs een uitgebreide case study gepubliceerd over ons werk voor LinXis, een toonaangevend biofarmaceutisch bedrijf. Deze case study belicht het proces van het omzetten van hun bestaande merkidentiteit naar een volledig responsieve en gebruiksvriendelijke website.</p>
      <p>De uitdaging bij dit project was het vinden van de juiste balans tussen wetenschappelijke geloofwaardigheid en toegankelijkheid. LinXis werkt met complexe biotechnologie, maar moest deze informatie presenteren aan verschillende doelgroepen, waaronder potentiële investeerders, wetenschappelijke partners en patiëntengroepen.</p>
      <p>Onze aanpak:</p>
      <ul>
        <li>Uitgebreid onderzoek naar de doelgroepen en hun informatiebehoeften</li>
        <li>Een gelaagde informatiestructuur die zowel een snelle overview als diepgaande informatie biedt</li>
        <li>Een minimalistisch maar professioneel ontwerp dat de wetenschappelijke aard van het bedrijf weerspiegelt</li>
        <li>Geoptimaliseerde animaties die complexe processen visualiseren</li>
      </ul>
      <p>De resultaten van dit project hebben alle verwachtingen overtroffen, met een significante toename in betrokkenheid op de site en positieve feedback van alle stakeholders.</p>
    `,
    date: '5 december 2022',
    image: '/img/news/news4.jpg',
    categories: ['cases']
  },
  {
    id: 'workshop-motion-design',
    title: 'Workshop Motion Design',
    excerpt: 'Terralemon organiseert een workshop over motion design in ons kantoor in Amsterdam.',
    content: `
      <p>Ben je geïnteresseerd in motion design en wil je je vaardigheden verbeteren? Terralemon organiseert een eendaagse workshop in ons kantoor in Amsterdam, gericht op creatieve professionals die hun kennis van motion design willen uitbreiden.</p>
      <p>De workshop zal worden geleid door onze senior motion designers en zal een mix van theorie en praktische oefeningen bevatten. We zullen ingaan op onderwerpen zoals:</p>
      <ul>
        <li>Principes van effectieve animatie</li>
        <li>Storytelling door beweging</li>
        <li>Technische aspecten van After Effects en andere tools</li>
        <li>Workflow optimalisatie voor motion design projecten</li>
      </ul>
      <p>Deze workshop is geschikt voor ontwerpers met enige ervaring in digitaal ontwerp die specifiek hun motion design vaardigheden willen verbeteren. Deelnemers worden aangemoedigd om hun eigen laptop mee te nemen met Adobe Creative Suite geïnstalleerd.</p>
      <p>Datum: 15 december 2022<br>Tijd: 10:00 - 16:00<br>Locatie: Terralemon kantoor, Amsterdam<br>Kosten: €195 per persoon (inclusief lunch en materialen)</p>
      <p>Plaatsen zijn beperkt, dus schrijf je snel in via het contactformulier op onze website.</p>
    `,
    date: '22 november 2022',
    image: '/img/news/news5.jpg',
    categories: ['events']
  },
  {
    id: 'nieuw-tno-partnership',
    title: 'Nieuw partnership met TNO',
    excerpt: 'We zijn verheugd om aan te kondigen dat we een langdurige samenwerking zijn aangegaan met TNO.',
    content: `
      <p>Terralemon is trots om aan te kondigen dat we een strategisch partnership zijn aangegaan met TNO (Nederlandse Organisatie voor Toegepast Natuurwetenschappelijk Onderzoek). Deze samenwerking is gericht op het verbeteren van de visuele communicatie van TNO's baanbrekende onderzoek en innovaties.</p>
      <p>Als onderdeel van deze samenwerking zal Terralemon bijdragen aan:</p>
      <ul>
        <li>Het ontwikkelen van animaties en infographics om complexe wetenschappelijke concepten te verduidelijken</li>
        <li>Het ontwerpen van interactieve digitale toepassingen voor het presenteren van onderzoeksresultaten</li>
        <li>Het ondersteunen van TNO's communicatieteam met creative direction en visuele strategie</li>
      </ul>
      <p>"We zijn enthousiast om samen te werken met TNO, een organisatie die aan de voorhoede staat van innovatie in Nederland," zegt onze Creative Director. "Deze samenwerking stelt ons in staat om ons creatieve talent in te zetten voor het visualiseren van baanbrekend wetenschappelijk onderzoek."</p>
      <p>De eerste projecten onder dit partnership zijn al in ontwikkeling en zullen in de komende maanden worden gelanceerd. We kijken ernaar uit om de resultaten van deze samenwerking te delen.</p>
    `,
    date: '15 oktober 2022',
    image: '/img/news/news6.jpg',
    categories: ['updates']
  }
];

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Vind het nieuwsitem dat overeenkomt met de ID in de URL
  const newsItem = newsItems.find(item => item.id === id);

  // Als er geen nieuwsitem is gevonden of de pagina wordt gerenderd op de server
  if (!newsItem && typeof window !== 'undefined') {
    router.push('/news');
    return null;
  }

  // Fallback tijdens server-rendering
  if (!newsItem) {
    return (
      <Layout title="Nieuws laden..." description="Nieuws detail pagina">
        <div className="container py-5">
          <p>Inhoud laden...</p>
        </div>
      </Layout>
    );
  }

  // Gerelateerde artikelen - toon 2 andere artikelen uit dezelfde categorie
  const relatedArticles = newsItems
    .filter(item => item.id !== id && item.categories.some(cat => newsItem.categories.includes(cat)))
    .slice(0, 2);

  return (
    <Layout title={newsItem.title} description={newsItem.excerpt}>
      {/* Header */}
      <div className="main_banner position-relative d-flex align-items-center bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Link href="/news" className="text-white mb-3 d-inline-block">
                ← Terug naar nieuws
              </Link>
              <h1 className="display-4 mb-2">{newsItem.title}</h1>
              <div className="d-flex align-items-center">
                <span className="badge tl-bg-green text-dark me-3">
                  {newsItem.categories[0]}
                </span>
                <small className="text-white">{newsItem.date}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <img 
                src={newsItem.image} 
                className="img-fluid mb-4" 
                alt={newsItem.title} 
              />
              
              <div className="news-content mb-5" dangerouslySetInnerHTML={{ __html: newsItem.content }}></div>
              
              <div className="d-flex justify-content-between mt-5 pt-3 border-top">
                <Link href="/news" className="tl-btn tl-btn-outline">
                  ← Terug naar nieuws
                </Link>
                <div className="d-flex gap-2">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-outline-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(newsItem.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-outline-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-outline-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="ps-lg-4">
                <h3 className="mb-4">Gerelateerde artikelen</h3>
                
                {relatedArticles.length > 0 ? (
                  relatedArticles.map(article => (
                    <div className="mb-4" key={article.id}>
                      <Link href={`/news/${article.id}`} className="card card-hover border-0 h-100">
                        <div className="card-frame ratio ratio-16x9 overflow-hidden">
                          <img 
                            src={article.image} 
                            className="card-img-top object-fit-cover w-100 h-100" 
                            alt={article.title} 
                          />
                        </div>
                        <div className="card-body px-0 pt-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge tl-bg-green text-dark">
                              {article.categories[0]}
                            </span>
                            <small className="text-muted">{article.date}</small>
                          </div>
                          <h5 className="card-title fw-bold">{article.title}</h5>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>Geen gerelateerde artikelen gevonden.</p>
                )}
                
                <div className="bg-light p-4 rounded mt-5">
                  <h4 className="mb-3">Nieuwsbrief</h4>
                  <p>Blijf op de hoogte van het laatste nieuws van Terralemon.</p>
                  <form className="d-flex flex-column gap-2">
                    <input type="email" className="form-control" placeholder="Je e-mailadres" />
                    <button type="submit" className="tl-btn tl-btn-primary">
                      Inschrijven
                    </button>
                  </form>
                </div>
              </div>
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
    </Layout>
  );
}

// Deze functie genereert de paden die vooraf gerenderd moeten worden
export async function getStaticPaths() {
  const paths = newsItems.map(item => ({
    params: { id: item.id.toString() }
  }));

  return { paths, fallback: false };
}

// Deze functie haalt de gegevens op voor elke pagina
export async function getStaticProps({ params }) {
  const newsItem = newsItems.find(item => item.id === params.id);
  
  if (!newsItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      newsItem,
    },
  };
} 