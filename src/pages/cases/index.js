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
    { id: 'all', name: 'Alle industrieën' },
    { id: 'hightech', name: 'High-tech industrie' },
    { id: 'duurzaamheid', name: 'Duurzaamheid' },
    { id: 'gezondheidszorg', name: 'Gezondheidszorg' },
    { id: 'ict', name: 'ICT' },
    { id: 'omroepen', name: 'Omroepen' }
  ];

  // Voorbeeld cases array met industrie tags
  const cases = [
    {
      id: 'tno-unboxed',
      title: 'TNO Unboxed',
      description: 'Campagne waarin TNO experts nieuwe innovaties binnen het veiligheidsdomein bespreken',
      image: '/videos/_medium/TNO-UB-project-image-5.jpg',
      video: '/videos/250113_Unboxed.mov',
      industries: ['hightech', 'ict'],
      size: 'large' // large voor col-lg-8, default voor col-lg-4
    },
    {
      id: 'tno-energy-materials',
      title: 'TNO Energy & Materials Transition',
      description: 'Klimaatverandering vraagt om duurzaamheid in energiesystemen, industrie en materialen',
      image: '/img/cases/case2.jpg',
      video: '/videos/210315-WarmingUP.mov',
      industries: ['duurzaamheid', 'hightech', 'ict']
    },
    {
      id: 'tno-healthy-living',
      title: 'TNO Healthy Living & Work',
      description: 'Wezenlijke innovaties in de gezondheidszorg helder in beeld gebracht',
      image: '/img/cases/case3.jpg',
      industries: ['duurzaamheid', 'gezondheidszorg', 'hightech']
    },
    {
      id: 'linxis',
      title: 'LinXis Biopharmaceuticals',
      description: 'Terralemon verzorgt de huisstijl voor LinXis Biopharmaceuticals',
      image: '/img/cases/case4.jpg',
      video: '/videos/250113_Unboxed.mov',
      industries: ['gezondheidszorg']
    },
    {
      id: 'tno-dit-is-onze-tijd',
      title: 'TNO #ditisonzetijd',
      description: '',
      image: '/img/cases/case5.jpg',
      video: '/videos/240614-dit-is-onze-tijd-720.mov',
      industries: ['gezondheidszorg', 'hightech']
    },
    {
      id: 'tno-mobility',
      title: 'TNO Mobility & Built Environment',
      description: 'Onze mobiliteit wordt steeds slimmer en efficiënter, maar ook complexer',
      image: '/img/cases/case6.jpg',
      video: '/videos/200409-Zero.mov',
      industries: ['duurzaamheid', 'hightech', 'ict'],
      size: 'large'
    }
  ];

  // Filter cases op basis van geselecteerde industrie
  const filteredCases = activeIndustry === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.industries.includes(activeIndustry));

  return (
    <Layout title="Cases" description="Bekijk onze portfolio van projecten en cases">
      {/* Header */}
      <div className="main_banner position-relative d-flex align-items-center bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-3 mb-2">Cases</h1>
              <h2 className="fs-3 fw-light mb-5">We zijn trots op alles wat we maken.</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Filter en Cases Grid */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-5">
              <h3 className="mb-4">Industrieën</h3>
              <ul className="list-group list-group-flush mb-5">
                {industries.map(industry => (
                  <li className="list-group-item fs-small" key={industry.id}>
                    <a 
                      href="#" 
                      className={`industry-link ${activeIndustry === industry.id ? 'active' : ''}`}
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
                    className={`col-md-${caseItem.size === 'large' ? '12' : '6'} col-lg-${caseItem.size === 'large' ? '8' : '4'}`} 
                    key={caseItem.id}
                  >
                    <Link 
                      href={`/cases/${caseItem.id}`} 
                      className="card card_case card-ripple-js w-100 border-0 bg-dark text-white"
                      data-industries={caseItem.industries.join('|')}
                    >
                      <div className="card-frame overflow-hidden">
                        <img 
                          src={caseItem.image} 
                          className="position-absolute object-fit-contain w-100" 
                          alt={caseItem.title} 
                        />
                        {caseItem.video && (
                          <video 
                            poster={caseItem.image} 
                            className="card-img-top lazy" 
                            loop 
                            muted
                          >
                            <source data-src={caseItem.video} type="video/mp4" />
                          </video>
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
      </div>
    </Layout>
  );
} 