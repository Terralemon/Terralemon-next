import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import useLazyVideo from '../../components/LazyVideo';
import { useEffect } from 'react';

// Complete casesData database voor alle cases
const casesData = {
  'tno-unboxed': {
    title: 'TNO Unboxed',
    subtitle: 'Campagne waarin TNO experts nieuwe innovaties binnen het veiligheidsdomein bespreken',
    description: `
      <p>In deze campagne hebben we samengewerkt met TNO om hun nieuwste innovaties binnen het veiligheidsdomein onder de aandacht te brengen.</p>
      <p>Met video interviews, social media content en een interactieve website hebben we de expertise van TNO toegankelijk gemaakt voor een breder publiek.</p>
    `,
    image: '/videos/_medium/TNO-UB-project-image-5.jpg',
    video: '/videos/250113_Unboxed.mov',
    client: 'TNO',
    year: '2023',
    services: ['Strategie', 'Video productie', 'Website ontwerp', 'Social media']
  },
  'tno-energy-materials-transition': {
    title: 'TNO Energy & Materials Transition',
    subtitle: 'Klimaatverandering vraagt om duurzaamheid in energiesystemen, industrie en materialen',
    description: `
      <p>Voor de TNO unit Energy & Materials Transition hebben we een campagne ontwikkeld die de innovatieve oplossingen voor klimaatuitdagingen duidelijk maakt.</p>
      <p>Het doel van de campagne was om de expertise van TNO in duurzame energiesystemen, industriële processen en materialen onder de aandacht te brengen.</p>
    `,
    image: '/videos/_medium/210315-WarmingUP.jpg',
    video: '/videos/210315-WarmingUP.mov',
    client: 'TNO',
    year: '2021',
    services: ['Strategie', 'Video productie', 'Animatie', 'Visual design']
  },
  'tno-healthy-living-work': {
    title: 'TNO Healthy Living & Work',
    subtitle: 'Wezenlijke innovaties in de gezondheidszorg helder in beeld gebracht',
    description: `
      <p>TNO's unit Healthy Living & Work richt zich op innovaties in preventie, diagnose en behandeling in de gezondheidszorg.</p>
      <p>In deze campagne hebben we complexe onderzoeksresultaten en technologieën omgezet in heldere, begrijpelijke communicatie voor diverse doelgroepen.</p>
    `,
    image: '/videos/_medium/201002-tnogezondleven.jpg',
    video: '/videos/201002-tnogezondleven.mov',
    client: 'TNO',
    year: '2020',
    services: ['Content strategie', 'Video productie', 'Animatie', 'Visual design']
  },
  'linxis': {
    title: 'LinXis Biopharmaceuticals',
    subtitle: 'Terralemon verzorgt de huisstijl voor LinXis Biopharmaceuticals',
    description: `
      <p>LinXis Biopharmaceuticals is een biotechbedrijf gespecialiseerd in innovatieve medicijnafgifte technologieën.</p>
      <p>Voor LinXis hebben we een heldere huisstijl ontwikkeld die de precisie en innovatie van hun wetenschappelijke werk uitstraalt.</p>
    `,
    image: '/videos/_medium/241118_LinXis.jpg',
    video: '/videos/241118_LinXis_6.mov',
    client: 'LinXis Biopharmaceuticals',
    year: '2024',
    services: ['Branding', 'Visual design', 'Animatie', 'Website ontwikkeling']
  },
  'tno-ditisonzetijd': {
    title: 'TNO #ditisonzetijd',
    subtitle: 'Een campagne over de maatschappelijke impact van TNO',
    description: `
      <p>Met de campagne #ditisonzetijd toont TNO hun rol in het aanpakken van maatschappelijke uitdagingen van deze tijd.</p>
      <p>We hebben een serie video's en visuele content gemaakt die de urgentie en de impact van TNO's werk laat zien.</p>
    `,
    image: '/videos/_medium/240614-Dit-is-onze-tijd.jpg',
    video: '/videos/240614-dit-is-onze-tijd-720.mov',
    client: 'TNO',
    year: '2024',
    services: ['Campagne ontwikkeling', 'Video productie', 'Social media content']
  },
  'tno-mobility-built-environment': {
    title: 'TNO Mobility & Built Environment',
    subtitle: 'Naar een slim en duurzaam logistiek- en mobiliteitssysteem',
    description: `
      <p>De unit Mobility & Built Environment van TNO werkt aan innovaties voor duurzame mobiliteit en slimme bebouwde omgevingen.</p>
      <p>In deze campagne hebben we een visueel aantrekkelijke manier gevonden om de complexe technologieën en systemen uit te leggen aan diverse stakeholders.</p>
    `,
    image: '/videos/_medium/200409-Zero.jpg',
    video: '/videos/200409-Zero.mov',
    client: 'TNO',
    year: '2020',
    services: ['Animatie', 'Visual design', 'Video productie', 'Content strategie']
  },
  'tno-ict-strategy-policy': {
    title: 'TNO ICT, Strategy & Policy',
    subtitle: 'Slimme campagnes voor de unit ICT, Strategy & Policy van TNO',
    description: `
      <p>TNO's unit ICT, Strategy & Policy werkt aan innovaties in digitale technologieën en strategisch beleid.</p>
      <p>We hebben een campagne ontwikkeld die de impact van hun werk op digitale transformatie en strategische besluitvorming duidelijk communiceert.</p>
    `,
    image: '/videos/_medium/190916_FeedTheFuture.jpg',
    video: '/videos/190916_FeedTheFuture.mov',
    client: 'TNO',
    year: '2019',
    services: ['Strategie', 'Video productie', 'Visual design', 'Content ontwikkeling']
  },
  'npo-zappelin-app': {
    title: 'NPO Zappelin app',
    subtitle: 'Bobbie en Ollie spelen een hoofdrol in de populaire Zappelin app',
    description: `
      <p>Voor de NPO Zappelin app hebben we de visuele identiteit en gebruikerservaring ontworpen, waarin de bekende karakters Bobbie en Ollie centraal staan.</p>
      <p>De app is ontworpen om kinderen een veilige en leuke digitale omgeving te bieden, passend bij de Zappelin merkbeleving.</p>
    `,
    image: '/videos/_medium/240325-zappelinapp.jpg',
    video: '/videos/240325-zappelinapp.mov',
    client: 'NPO',
    year: '2024',
    services: ['UX/UI design', 'Character design', 'Animatie', 'Concept ontwikkeling']
  },
  'zappelin': {
    title: 'NPO Zappelin',
    subtitle: 'Terralemon heeft de zender ontworpen van de grootste kinderzender van Nederland',
    description: `
      <p>We hebben de volledige huisstijl en zendervormgeving voor NPO Zappelin ontwikkeld, de grootste kinderzender van Nederland.</p>
      <p>Het ontwerp is vrolijk, toegankelijk en herkenbaar voor de jonge doelgroep, met een duidelijke visuele taal die past bij de educatieve en entertainende content van de zender.</p>
    `,
    image: '/videos/_medium/180626-NPO-Zappelin.jpg',
    video: '/videos/180626-NPO-Zappelin.mov',
    client: 'NPO',
    year: '2018',
    services: ['Branding', 'Animatie', 'Vormgeving', 'Concept ontwikkeling']
  },
  'zin-in-zappelin': {
    title: 'Zin in Zappelin',
    subtitle: 'Een fantasiewereld die perfect aansluit bij de belevingswereld van jonge kinderen',
    description: `
      <p>Voor het programma Zin in Zappelin hebben we een fantasierijke wereld gecreëerd die aansluit bij de belevingswereld van jonge kinderen.</p>
      <p>Met kleurrijke animaties, toegankelijke karakters en een speelse vormgeving nodigen we kinderen uit om mee te doen en hun verbeelding te gebruiken.</p>
    `,
    image: '/videos/_medium/190819-ziz-avond.jpg',
    video: '/videos/190819-ziz-avond.mov',
    client: 'NPO',
    year: '2019',
    services: ['Concept ontwikkeling', 'Character design', 'Animatie', 'Art direction']
  },
  'tno-interne-campagnes': {
    title: 'TNO interne campagnes',
    subtitle: 'TNO\'s interne campagnes voor vitaliteit, mobiliteit en toegankelijkheid',
    description: `
      <p>Voor TNO hebben we diverse interne communicatiecampagnes ontwikkeld, gericht op thema's als vitaliteit, mobiliteit en toegankelijkheid.</p>
      <p>Deze campagnes helpen TNO om hun eigen organisatie te versterken en de werkervaring van medewerkers te verbeteren.</p>
    `,
    image: '/videos/_medium/190614-TNO-intern.jpg',
    video: '/videos/190614-TNO-intern.mov',
    client: 'TNO',
    year: '2019',
    services: ['Interne communicatie', 'Campagne ontwikkeling', 'Visual design', 'Animatie']
  },
  'ing-think': {
    title: 'ING THINK',
    subtitle: 'Dagelijks internationale analyses en prognoses door ING analisten en editors',
    description: `
      <p>Voor ING THINK hebben we een platform ontwikkeld waarop ING analisten en editors dagelijks internationale economische analyses en prognoses kunnen delen.</p>
      <p>Het platform combineert diepgaande financiële inzichten met een toegankelijke presentatie, waardoor complexe economische data begrijpelijk wordt voor een breed publiek.</p>
    `,
    image: '/img/projects/_medium/THINK-r-Realigned-1920x1080-8-2-main.jpg',
    client: 'ING',
    year: '2020',
    services: ['UX/UI design', 'Content strategie', 'Web development', 'Visual design']
  },
  'imaging-center-adore': {
    title: 'Amsterdam UMC Imaging Center',
    subtitle: 'De nieuwste imaging beeldtechnieken en de bundeling van onderzoek op de Zuidas',
    description: `
      <p>Voor het Amsterdam UMC Imaging Center hebben we communicatiematerialen ontwikkeld die de geavanceerde beeldvormende technieken en het onderzoek van het centrum presenteren.</p>
      <p>Onze visualisaties maken de complexe medische technologieën begrijpelijk voor zowel medische professionals als patiënten.</p>
    `,
    image: '/videos/_medium/230615-ImagingCenter.jpg',
    video: '/videos/230615-ImagingCenter.mov',
    client: 'Amsterdam UMC',
    year: '2023',
    services: ['Medical visualization', 'Animatie', 'Content ontwikkeling', 'Visual design']
  },
  'citrienfonds': {
    title: 'Citrienfonds',
    subtitle: 'Duurzame en breed inzetbare verbeteringen in de huidige gezondheidszorg',
    description: `
      <p>Voor het Citrienfonds hebben we materialen ontwikkeld die hun missie om duurzame verbeteringen in de gezondheidszorg te stimuleren communiceren.</p>
      <p>We hebben complexe zorgverbetertrajecten vertaald naar heldere en aansprekende visuele verhalen.</p>
    `,
    image: '/videos/_medium/211026-citrienfonds.jpg',
    video: '/videos/211026-citrienfonds.mov',
    client: 'Citrienfonds',
    year: '2021',
    services: ['Strategie', 'Visual design', 'Animatie', 'Content ontwikkeling']
  },
  'artificiele-intelligentie': {
    title: 'Artificiële Intelligentie',
    subtitle: 'Kunstmatige intelligentie gaat ons leven en werk veranderen, zo veel is duidelijk',
    description: `
      <p>In deze campagne hebben we de impact van artificiële intelligentie op onze toekomst gevisualiseerd en uitgelegd.</p>
      <p>Door complexe AI-concepten om te zetten in begrijpelijke visuele verhalen, maken we het onderwerp toegankelijk voor een breed publiek.</p>
    `,
    image: '/videos/_medium/181221-AI.jpg',
    video: '/videos/181221-AI.mov',
    client: 'Diverse klanten',
    year: '2018',
    services: ['Concept ontwikkeling', 'Animatie', 'Tech visualisatie', 'Content strategie']
  },
  'go-kinderopvang': {
    title: 'GO! Kinderopvang',
    subtitle: 'Pedagogisch beleid in animaties uitgelegd',
    description: `
      <p>Voor GO! Kinderopvang hebben we een serie animaties ontwikkeld die hun pedagogisch beleid op een toegankelijke en aansprekende manier uitleggen.</p>
      <p>De animaties zijn gericht op zowel ouders als medewerkers, en vertalen pedagogische principes naar de dagelijkse praktijk.</p>
    `,
    image: '/img/projects/_large/220901-GO-kinderopvang3.jpg',
    client: 'GO! Kinderopvang',
    year: '2022',
    services: ['Animatie', 'Character design', 'Visual storytelling', 'Content ontwikkeling']
  },
  'pcsi': {
    title: 'Partnership for Cyber Security Innovation',
    subtitle: 'Hoe beschermen we ons tegen de cyberaanvallen van morgen?',
    description: `
      <p>Voor het Partnership for Cyber Security Innovation hebben we communicatiematerialen ontwikkeld die de gezamenlijke aanpak van cyberbeveiligingsuitdagingen visualiseren.</p>
      <p>We hebben complexe cybersecurity-concepten vertaald naar begrijpelijke beelden die de noodzaak van samenwerking en innovatie benadrukken.</p>
    `,
    image: '/img/projects/_large/PCSI-case2.jpg',
    client: 'PCSI',
    year: '2021',
    services: ['Tech visualisatie', 'Visual design', 'Content strategie', 'Infographics']
  },
  'cyber-security': {
    title: 'Cyber Security',
    subtitle: 'Gebundelde kracht om onze digitale wereld veiliger te maken',
    description: `
      <p>In deze campagne hebben we het belang van cybersecurity en de gebundelde aanpak van digitale dreigingen gevisualiseerd.</p>
      <p>Door complexe cyberdreigingen en beveiligingsmaatregelen te visualiseren, maken we het onderwerp begrijpelijk en urgent voor diverse doelgroepen.</p>
    `,
    image: '/videos/_medium/200311-Smart-Security.jpg',
    video: '/videos/200311-Smart-Security.mov',
    client: 'Diverse klanten',
    year: '2020',
    services: ['Concept ontwikkeling', 'Animatie', 'Visual design', 'Content strategie']
  },
  'wilhelmina-ziekenhuis': {
    title: 'UMC Utrecht Wilhelmina Kinderziekenhuis',
    subtitle: 'Hoe Osteogenesis Imperfecta afwijkende botgroei veroorzaakt',
    description: `
      <p>Voor het UMC Utrecht Wilhelmina Kinderziekenhuis hebben we Osteogenesis Imperfecta (OI) en de effecten op botgroei gevisualiseerd.</p>
      <p>Onze medische animaties maken het ziektebeeld begrijpelijk voor zowel patiënten en families als medische professionals.</p>
    `,
    image: '/videos/_medium/221005-OI.jpg',
    video: '/videos/221005-OI.mov',
    client: 'UMC Utrecht Wilhelmina Kinderziekenhuis',
    year: '2022',
    services: ['Medical visualization', 'Animatie', 'Visual storytelling', 'Content ontwikkeling']
  },
  'antoni-van-leeuwenhoek': {
    title: 'Antoni van Leeuwenhoek',
    subtitle: 'Baanbrekende therapieën en technieken in begrijpelijke taal en duidelijke stijl',
    description: `
      <p>Voor het Antoni van Leeuwenhoek ziekenhuis hebben we baanbrekende kankerbehandelingen en -technieken gevisualiseerd.</p>
      <p>Onze animaties en visualisaties maken complexe medische procedures en behandelingen toegankelijk voor patiënten en hun families.</p>
    `,
    image: '/videos/_medium/220322-NKI.jpg',
    video: '/videos/220322-NKI.mov',
    client: 'Antoni van Leeuwenhoek',
    year: '2022',
    services: ['Medical visualization', 'Animatie', 'Content ontwikkeling', 'Visual design']
  },
  'nfu-nfukwaliteit': {
    title: 'NFU en NFU Kwaliteit',
    subtitle: 'Design voor de overkoepelende organisatie van de umc\'s',
    description: `
      <p>Voor de Nederlandse Federatie van Universitair Medische Centra (NFU) hebben we een duidelijke visuele identiteit en communicatiematerialen ontwikkeld.</p>
      <p>Onze ontwerpen helpen de NFU om hun rol als koepelorganisatie van de UMC's effectief te communiceren en hun kwaliteitsinitiatieven zichtbaar te maken.</p>
    `,
    image: '/img/projects/_large/NFU-case-1.jpg',
    client: 'NFU',
    year: '2020',
    services: ['Branding', 'Visual design', 'Infographics', 'Content strategie']
  },
  'vuyk-engineering': {
    title: 'Vuyk Engineering',
    subtitle: 'Identiteit voor Vuyk Engineering, een vermaard high-tech scheepsbouwer',
    description: `
      <p>Voor Vuyk Engineering, een gerenommeerd bedrijf in high-tech scheepsbouw, hebben we een krachtige visuele identiteit ontwikkeld.</p>
      <p>De nieuwe identiteit reflecteert de expertise, precisie en innovatieve aanpak van Vuyk in de scheepsbouwsector.</p>
    `,
    image: '/img/projects/_large/Vuyk1.jpg',
    client: 'Vuyk Engineering',
    year: '2021',
    services: ['Branding', 'Visual design', 'Website ontwikkeling', 'Content strategie']
  },
  'tno-strategische-analyses-beleid': {
    title: 'TNO Strategische Analyses & Beleid',
    subtitle: 'Hoe complexe en abstracte vraagstukken uit te leggen?',
    description: `
      <p>Voor TNO's unit Strategische Analyses & Beleid hebben we communicatiematerialen ontwikkeld die complexe beleidsvraagstukken visualiseren.</p>
      <p>Onze infographics en visualisaties maken abstracte strategische concepten toegankelijk voor beleidsmakers en andere stakeholders.</p>
    `,
    image: '/img/projects/_large/200610-Collaboratieve-Business-Modellen-6.jpg',
    client: 'TNO',
    year: '2020',
    services: ['Infographics', 'Visual design', 'Content ontwikkeling', 'Strategie']
  },
  'biorizon': {
    title: 'Biorizon',
    subtitle: 'Verduurzaming van aromaten uit restbiomassa en recyclestromen',
    description: `
      <p>Voor Biorizon hebben we communicatiematerialen ontwikkeld die hun innovatieve aanpak voor het produceren van duurzame aromaten uit restbiomassa visualiseren.</p>
      <p>Onze visualisaties maken de complexe chemische processen en de duurzaamheidsvoordelen begrijpelijk voor diverse doelgroepen.</p>
    `,
    image: '/img/projects/_large/240228-biorizon.jpg',
    client: 'Biorizon',
    year: '2024',
    services: ['Visual storytelling', 'Infographics', 'Content ontwikkeling', 'Visual design']
  },
  'boele-de-bever-voor-heutinkgroep': {
    title: 'Boele de bever voor de Heutinkgroep',
    subtitle: 'Een sympathieke campagne waarin bouwen de leefomgeving verrijkt',
    description: `
      <p>Voor de Heutinkgroep hebben we het karakter Boele de bever ontwikkeld als onderdeel van een sympathieke campagne over bouwen en het verrijken van de leefomgeving.</p>
      <p>Door middel van storytelling en character design communiceren we hoe bouwactiviteiten positief kunnen bijdragen aan de leefomgeving.</p>
    `,
    image: '/videos/_medium/200921-Boele_MovingStill.jpg',
    video: '/videos/200921-Boele_MovingStill.mp4',
    client: 'Heutinkgroep',
    year: '2020',
    services: ['Character design', 'Campagne ontwikkeling', 'Animatie', 'Storytelling']
  }
};

export default function CaseDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const caseData = id && casesData[id];

  // Gebruik de hook voor lazy-loading video's
  useLazyVideo();

  // Functie om lazy-loaded iframes te activeren
  useEffect(() => {
    const lazyIframes = document.querySelectorAll('iframe[data-src]');
    if (lazyIframes.length) {
      lazyIframes.forEach(iframe => {
        if (iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
        }
      });
    }
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (lazyImages.length) {
      lazyImages.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    }
  }, [id]);

  // Als de pagina nog aan het laden is of de case niet gevonden is
  if (!id || !caseData) {
    return (
      <Layout title="Case laden...">
        <div className="container py-5 mt-5 text-center">
          <p>Laden...</p>
        </div>
      </Layout>
    );
  }

  // Bepaal expertises op basis van services
  const expertises = caseData.services.map(service => {
    const serviceMap = {
      'Strategie': 'strategie',
      'Video productie': 'film',
      'Website ontwerp': 'website',
      'Social media': 'campagne',
      'Animatie': 'animatie',
      'Visual design': 'visuele-identiteit',
      'Content strategie': 'content-strategie',
      'Branding': 'branding',
      'Website ontwikkeling': 'website',
      'UX/UI design': 'website',
      'Concept ontwikkeling': 'concept',
      'Character design': 'karakter-design',
      'Art direction': 'art-direction',
      'Interne communicatie': 'interne-communicatie',
      'Campagne ontwikkeling': 'campagne',
      'Tech visualisatie': 'tech-visualisatie',
      'Medical visualization': 'medische-visualisatie',
      'Visual storytelling': 'storytelling',
      'Infographics': 'infographics',
      'Logo design': 'logo-design',
      'Decor ontwerp': 'decor-ontwerp',
      'Vormgeving': 'vormgeving'
    };
    return serviceMap[service] || service.toLowerCase().replace(/\s+/g, '-');
  });

  return (
    <Layout title={caseData.title} description={caseData.subtitle}>
      {/* Back Button */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <Link href="/cases" className="btn btn-outline-primary mb-4">
              ← Terug naar cases
            </Link>
          </div>
        </div>
      </div>

      {/* Header met titel */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h1 className="display-3 mt-3 mt-lg-5">{caseData.subtitle}</h1>
          </div>
          <div className="col-md-12 mb-3 my-sm-3 text-center">
            <ul className="list-group list-group-horizontal text-lowercase justify-content-center expertises">
              {expertises.map((expertise, index) => (
                <li className="list-group-item fs-small" key={index}>
                  <a href={`/expertises/${expertise}`}>{caseData.services[index]}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Header image */}
      <div className="container-fluid px-0 my-lg-3">      
        <div className="image_wrapper">
          <img 
            src={caseData.image.replace('_medium', '_giant')} 
            className="w-100 mb-3" 
            alt={caseData.title} 
          />
        </div>
      </div>

      {/* Introductie tekst */}
      <div className="container">      
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="fs-3 my-lg-5" dangerouslySetInnerHTML={{ __html: caseData.description }} />
          </div>
        </div>
      </div>

      {/* Project informatie */}
      <div className="container-fluid px-0 pb-5 pb-sm-5 bg-light shadow-lg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <section className="col-lg-8 offset-lg-2 mt-2 mb-3 text-center">
                  <p className="pt-3 mb-0">{caseData.title}</p>
                  <h2 className="display-4 mt-3 mb-lg-4">{caseData.subtitle}</h2>
                  
                  <ul className="list-group list-group-horizontal-lg text-lowercase justify-content-center expertises">
                    {expertises.map((expertise, index) => (
                      <li className="list-group-item bg-transparent" key={index}>
                        <a href={`/expertises/${expertise}`}>{caseData.services[index]}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Verantwoordelijkheden */}
            <section className="col-md-4 col-lg-2 order-last order-md-2 pt-3">
              <small className="text-muted d-none d-md-block mb-2">{caseData.year}</small>
              
              <ul className="list-group list-group-flush deliverables">
                <li className="list-group-item"><strong>Terralemon is verantwoordelijk voor</strong></li>
                {caseData.services.map((service, index) => (
                  <li className="list-group-item" key={index}>{service}</li>
                ))}
              </ul>
            </section>

            {/* Content */}
            <section className="col-md-8 col-lg-6 offset-lg-3 mt-sm-3 mb-0 mb-md-3 fs-large">
              <p className="lead" dangerouslySetInnerHTML={{ __html: caseData.description }} />
            </section>
          </div>

          {/* Media gallery */}
          <div className="row">
            {/* Als er een video is */}
            {caseData.video && (
              <section className="col-md-10 offset-md-1 my-3">
                <div className="d-flex justify-content-center">
                  <div className="ratio ratio-16x9 mb-lg-4">
                    <video 
                      poster={caseData.image} 
                      className="card-img-top lazy w-100" 
                      controls
                    >
                      <source data-src={caseData.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Interesse in een soortgelijk project?</h2>
              <p className="lead mb-4">Laat ons weten wat je doel is. We denken graag met je mee.</p>
              <div>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Neem contact op
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 