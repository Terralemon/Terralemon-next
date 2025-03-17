import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import useLazyVideo from '../../components/LazyVideo';

// In een echte applicatie zou je dit uit een API of CMS halen
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
  'case-2': {
    title: 'Case 2',
    subtitle: 'Beschrijving van case 2',
    description: `
      <p>Dit is een voorbeeld beschrijving voor case 2.</p>
      <p>Hier komt meer informatie over het project.</p>
    `,
    image: '/img/cases/case2.jpg',
    client: 'Client 2',
    year: '2022',
    services: ['Strategie', 'UX Design', 'Development']
  }
};

export default function CaseDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const caseData = id && casesData[id];

  // Gebruik de hook voor lazy-loading video's
  useLazyVideo();

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

  return (
    <Layout title={caseData.title} description={caseData.subtitle}>
      {/* Header */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Link href="/cases" className="btn btn-outline-primary mb-4">
                ← Terug naar cases
              </Link>
              <h1 className="mb-3">{caseData.title}</h1>
              <p className="lead">{caseData.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image/Video */}
      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 bg-dark">
                <div className="card-frame overflow-hidden">
                  <img src={caseData.image} className="w-100" alt={caseData.title} />
                  {caseData.video && (
                    <video poster={caseData.image} className="w-100 lazy" controls>
                      <source data-src={caseData.video} type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div dangerouslySetInnerHTML={{ __html: caseData.description }} />
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Project informatie</h5>
                  <p><strong>Client:</strong> {caseData.client}</p>
                  <p><strong>Jaar:</strong> {caseData.year}</p>
                  <p><strong>Services:</strong></p>
                  <ul>
                    {caseData.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-light">
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