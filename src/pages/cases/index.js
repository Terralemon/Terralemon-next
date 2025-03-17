import Layout from '../../components/Layout';
import Link from 'next/link';
import useLazyVideo from '../../components/LazyVideo';
import { useState } from 'react';

export default function Cases() {
  // Gebruik de hook voor lazy-loading video's
  useLazyVideo();
  
  const [activeIndustry, setActiveIndustry] = useState('all');

  // Lijst met industrieën voor de filter
  const industries = [
    { id: 'all', name: 'Alle cases' },
    { id: 'duurzaamheid', name: 'Duurzaamheid' },
    { id: 'gezondheidszorg', name: 'Gezondheidszorg' },
    { id: 'hightech', name: 'High-tech industrie' },
    { id: 'ict', name: 'ICT' },
    { id: 'omroepen', name: 'Omroepen' }
  ];

  // Cases array gebaseerd op de statische pagina
  const cases = [
    {
      id: 'tno-unboxed',
      title: 'TNO Unboxed',
      description: 'Campagne waarin TNO experts nieuwe innovaties binnen het veiligheidsdomein bespreken',
      image: 'https://terralemon.nl/videos/_medium/TNO-UB-project-image-5.jpg',
      video: 'https://terralemon.nl/videos/250113_Unboxed.mov',
      industries: ['hightech', 'ict'],
      size: 'large' // large voor col-lg-8, default voor col-lg-4
    },
    {
      id: 'tno-energy-materials-transition',
      title: 'TNO Energy & Materials Transition',
      description: 'Klimaatverandering vraagt om duurzaamheid in energiesystemen, industrie en materialen',
      image: 'https://terralemon.nl/videos/_medium/210315-WarmingUP.jpg',
      video: 'https://terralemon.nl/videos/210315-WarmingUP.mov',
      industries: ['duurzaamheid', 'hightech', 'ict']
    },
    {
      id: 'tno-healthy-living-work',
      title: 'TNO Healthy Living & Work',
      description: 'Wezenlijke innovaties in de gezondheidszorg helder in beeld gebracht',
      image: 'https://terralemon.nl/videos/_medium/201002-tnogezondleven.jpg',
      video: 'https://terralemon.nl/videos/201002-tnogezondleven.mov',
      industries: ['duurzaamheid', 'gezondheidszorg', 'hightech']
    },
    {
      id: 'linxis',
      title: 'LinXis Biopharmaceuticals',
      description: 'Terralemon verzorgt de huisstijl voor LinXis Biopharmaceuticals',
      image: 'https://terralemon.nl/videos/_medium/241118_LinXis.jpg',
      video: 'https://terralemon.nl/videos/241118_LinXis_6.mov',
      industries: ['gezondheidszorg']
    },
    {
      id: 'tno-ditisonzetijd',
      title: 'TNO #ditisonzetijd',
      description: '',
      image: 'https://terralemon.nl/videos/_medium/240614-Dit-is-onze-tijd.jpg',
      video: 'https://terralemon.nl/videos/240614-dit-is-onze-tijd-720.mov',
      industries: ['gezondheidszorg', 'hightech']
    },
    {
      id: 'tno-mobility-built-environment',
      title: 'TNO Mobility & Built Environment',
      description: 'Naar een slim en duurzaam logistiek- en mobiliteitssysteem',
      image: 'https://terralemon.nl/videos/_medium/200409-Zero.jpg',
      video: 'https://terralemon.nl/videos/200409-Zero.mov',
      industries: ['duurzaamheid', 'hightech', 'ict'],
      size: 'large'
    },
    {
      id: 'tno-ict-strategy-policy',
      title: 'TNO ICT, Strategy & Policy',
      description: 'Slimme campagnes voor de unit ICT, Strategy & Policy van TNO',
      image: 'https://terralemon.nl/videos/_medium/190916_FeedTheFuture.jpg',
      video: 'https://terralemon.nl/videos/190916_FeedTheFuture.mov',
      industries: ['gezondheidszorg', 'hightech', 'ict'],
      size: 'large'
    },
    {
      id: 'npo-zappelin-app',
      title: 'NPO Zappelin app',
      description: 'Bobbie en Ollie spelen een hoofdrol in de populaire Zappelin app',
      image: 'https://terralemon.nl/videos/_medium/240325-zappelinapp.jpg',
      video: 'https://terralemon.nl/videos/240325-zappelinapp.mov',
      industries: ['omroepen']
    },
    {
      id: 'zappelin',
      title: 'NPO Zappelin',
      description: 'Terralemon heeft de zender ontworpen van de grootste kinderzender van Nederland',
      image: 'https://terralemon.nl/videos/_medium/180626-NPO-Zappelin.jpg',
      video: 'https://terralemon.nl/videos/180626-NPO-Zappelin.mov',
      industries: ['omroepen']
    },
    {
      id: 'zin-in-zappelin',
      title: 'Zin in Zappelin',
      description: 'Een fantasiewereld die perfect aansluit bij de belevingswereld van jonge kinderen',
      image: 'https://terralemon.nl/videos/_medium/190819-ziz-avond.jpg',
      video: 'https://terralemon.nl/videos/190819-ziz-avond.mov',
      industries: ['omroepen']
    },
    {
      id: 'tno-interne-campagnes',
      title: 'TNO interne campagnes',
      description: 'TNO\'s interne campagnes voor vitaliteit, mobiliteit en toegankelijkheid',
      image: 'https://terralemon.nl/videos/_medium/190614-TNO-intern.jpg',
      video: 'https://terralemon.nl/videos/190614-TNO-intern.mov',
      industries: ['hightech']
    },
    {
      id: 'ing-think-r',
      title: 'ING Think-R',
      subtitle: 'Real-time visualisatie dashboard voor financiële gegevens',
      categories: ['dashboard', 'financieel', 'datavisualisatie'],
      excerpt: 'Een interactief dashboard dat complexe financiële gegevens visualiseert',
      client: 'ING',
      year: '2022',
      services: ['UX/UI design', 'Visual design', 'Datavisualisatie'],
      expertises: ['datavisualisatie', 'design'],
      image: 'https://terralemon.nl/img/projects/_medium/THINK-r-Realigned-1920x1080-8-2-main.jpg',
    },
    {
      id: 'imaging-center-adore',
      title: 'Amsterdam UMC Imaging Center',
      description: 'De nieuwste imaging beeldtechnieken en de bundeling van onderzoek op de Zuidas',
      image: 'https://terralemon.nl/videos/_medium/230615-ImagingCenter.jpg',
      video: 'https://terralemon.nl/videos/230615-ImagingCenter.mov',
      industries: ['gezondheidszorg'],
      size: 'large'
    },
    {
      id: 'citrienfonds',
      title: 'Citrienfonds',
      description: 'Duurzame en breed inzetbare verbeteringen in de huidige gezondheidszorg',
      image: 'https://terralemon.nl/videos/_medium/211026-citrienfonds.jpg',
      video: 'https://terralemon.nl/videos/211026-citrienfonds.mov',
      industries: ['gezondheidszorg', 'ict']
    },
    {
      id: 'artificiele-intelligentie',
      title: 'Artificiële Intelligentie',
      description: 'Kunstmatige intelligentie gaat ons leven en werk veranderen, zo veel is duidelijk',
      image: 'https://terralemon.nl/videos/_medium/181221-AI.jpg',
      video: 'https://terralemon.nl/videos/181221-AI.mov',
      industries: ['gezondheidszorg']
    },
    {
      id: 'go-kinderopvang',
      title: 'GO! Kinderopvang',
      subtitle: 'Nieuwe huisstijl en website voor kinderopvangorganisatie',
      categories: ['website', 'branding'],
      excerpt: 'Een frisse en toegankelijke huisstijl en website die past bij de visie van GO!',
      client: 'GO! Kinderopvang',
      year: '2023',
      services: ['Branding', 'Website ontwerp', 'UX/UI design'],
      expertises: ['branding', 'website'],
      image: 'https://terralemon.nl/img/projects/_large/220901-GO-kinderopvang3.jpg',
    },
    {
      id: 'pcsi-security',
      title: 'PCSI Security',
      subtitle: 'Visuele identiteit voor cybersecurity onderzoek',
      categories: ['branding', 'animatie'],
      excerpt: 'Een herkenbare visuele identiteit voor cybersecurity onderzoek',
      client: 'TNO',
      year: '2022',
      services: ['Visual design', 'Animatie', 'Infographics'],
      expertises: ['visuele-identiteit', 'animatie'],
      image: 'https://terralemon.nl/img/projects/_large/PCSI-case2.jpg',
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      description: 'Gebundelde kracht om onze digitale wereld veiliger te maken',
      image: 'https://terralemon.nl/videos/_medium/200311-Smart-Security.jpg',
      video: 'https://terralemon.nl/videos/200311-Smart-Security.mov',
      industries: ['ict'],
      size: 'large'
    },
    {
      id: 'wilhelmina-ziekenhuis',
      title: 'UMC Utrecht Wilhelmina Kinderziekenhuis',
      description: 'Hoe Osteogenesis Imperfecta afwijkende botgroei veroorzaakt',
      image: 'https://terralemon.nl/videos/_medium/221005-OI.jpg',
      video: 'https://terralemon.nl/videos/221005-OI.mov',
      industries: ['gezondheidszorg'],
      size: 'large'
    },
    {
      id: 'antoni-van-leeuwenhoek',
      title: 'Antoni van Leeuwenhoek',
      description: 'Baanbrekende therapieën en technieken in begrijpelijke taal en duidelijke stijl',
      image: 'https://terralemon.nl/videos/_medium/220322-NKI.jpg',
      video: 'https://terralemon.nl/videos/220322-NKI.mov',
      industries: ['gezondheidszorg']
    },
    {
      id: 'nfu-kwaliteit',
      title: 'NFU Kwaliteit van Zorg',
      subtitle: 'Website voor kwaliteitsverbetering in UMCs',
      categories: ['website', 'zorg'],
      excerpt: 'Een platform voor kennisdeling over kwaliteitsverbetering in UMCs',
      client: 'NFU',
      year: '2021',
      services: ['Website ontwerp', 'Content strategie', 'UX/UI design'],
      expertises: ['website', 'content-strategie'],
      image: 'https://terralemon.nl/img/projects/_large/NFU-case-1.jpg',
    },
    {
      id: 'vuyk-engineering',
      title: 'Vuyk Engineering',
      subtitle: 'Website voor maritiem ingenieursbureau',
      categories: ['website', 'maritiem'],
      excerpt: 'Een professionele website die de expertise van Vuyk laat zien',
      client: 'Vuyk Engineering',
      year: '2021',
      services: ['Website ontwerp', 'Visual design', 'UX/UI design'],
      expertises: ['website', 'visual-design'],
      image: 'https://terralemon.nl/img/projects/_large/Vuyk1.jpg',
    },
    {
      id: 'tno-strategische-analyses-beleid',
      title: 'TNO Strategische Analyses & Beleid',
      description: 'Hoe complexe en abstracte vraagstukken uit te leggen?',
      image: 'https://terralemon.nl/img/projects/_large/200610-Collaboratieve-Business-Modellen-6.jpg',
      industries: ['hightech', 'ict'],
      halfWidth: true
    },
    {
      id: 'business-modellen',
      title: 'Collaboratieve Business Modellen',
      subtitle: 'Handleiding voor innovatie en samenwerking',
      categories: ['publicatie', 'innovatie'],
      excerpt: 'Een visuele gids voor het ontwikkelen van samenwerkingsmodellen',
      client: 'TNO',
      year: '2020',
      services: ['Visual design', 'Content strategie', 'Infographics'],
      expertises: ['vormgeving', 'infographics'],
      image: 'https://terralemon.nl/img/projects/_large/200610-Collaboratieve-Business-Modellen-6.jpg',
    },
    {
      id: 'biorizon',
      title: 'Biorizon',
      subtitle: 'Animatievideo over bio-aromaten',
      categories: ['animatie', 'duurzaamheid'],
      excerpt: 'Een educatieve animatie over de toepassing van bio-aromaten',
      client: 'TNO',
      year: '2024',
      services: ['Animatie', 'Concept ontwikkeling', 'Visual storytelling'],
      expertises: ['animatie', 'storytelling'],
      image: 'https://terralemon.nl/img/projects/_medium/240228-biorizon.jpg',
    },
    {
      id: 'boele-de-bever-voor-heutinkgroep',
      title: 'Boele de bever voor de Heutinkgroep',
      description: 'Een sympathieke campagne waarin bouwen de leefomgeving verrijkt',
      image: 'https://terralemon.nl/videos/_medium/200921-Boele_MovingStill.jpg',
      video: 'https://terralemon.nl/videos/200921-Boele_MovingStill.mp4',
      industries: [],
      halfWidth: true
    }
  ];

  // Filter cases op basis van geselecteerde industrie
  const filteredCases = activeIndustry === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.industries.includes(activeIndustry));

  return (
    <Layout title="Cases" description="Bekijk onze portfolio van projecten en cases">
      {/* Header */}
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12">
            <h1 className="display-3 fw-medium mt-2 text-center">Cases</h1>
          </div>
          <div className="col-md-12 mb-3 my-sm-3 text-center">
            <ul className="list-group list-group-horizontal text-lowercase justify-content-center">
              {industries.map(industry => (
                <li 
                  className={`list-group-item fs-small ${activeIndustry === industry.id ? 'active' : ''}`} 
                  key={industry.id}
                >
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndustry(industry.id);
                    }}
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12">
            <div className="row bg-dark g-0">
              {filteredCases.map((caseItem) => (
                <div 
                  className={`${caseItem.halfWidth ? 'col-md-6 col-lg-6' : caseItem.size === 'large' ? 'col-md-12 col-lg-8' : 'col-md-6 col-lg-4'}`} 
                  key={caseItem.id}
                >
                  <Link 
                    href={`/cases/${caseItem.id}`} 
                    className="card card_case card-ripple-js w-100 border-0 bg-dark text-white"
                    data-industries={caseItem.industries.join('|')}
                  >
                    <div className="card-frame overflow-hidden">
                      {caseItem.video ? (
                        <>
                          <img 
                            src={caseItem.image} 
                            className="position-absolute object-fit-contain w-100" 
                            alt={caseItem.title} 
                          />
                          <video 
                            poster={caseItem.image} 
                            className="card-img-top lazy" 
                            loop 
                            muted
                          >
                            <source data-src={caseItem.video} type="video/mp4" />
                          </video>
                        </>
                      ) : (
                        <img src={caseItem.image} className="card-img-top" alt={caseItem.title} />
                      )}
                    </div>

                    <div className="card-img-overlay p-3 d-flex">
                      <div className="card-body p-0 align-self-end">
                        <p className="card-text fw-medium mb-2">{caseItem.title}</p>
                        <h4 className="card-title fs-3 fw-light text-white mt-0 d-none d-lg-block">
                          {caseItem.description}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 