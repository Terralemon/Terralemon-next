import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Lijst met categorieën voor de filter
  const categories = [
    { id: 'all', name: 'Alle categorieën' },
    { id: 'updates', name: 'Updates' },
    { id: 'cases', name: 'Cases' },
    { id: 'events', name: 'Evenementen' },
    { id: 'awards', name: 'Awards' }
  ];

  // Voorbeeld nieuws array 
  const newsItems = [
    {
      id: 'nieuwe-website-2023',
      title: 'Nieuwe website Terralemon',
      excerpt: 'We hebben onze website vernieuwd met een fris ontwerp en verbeterde gebruikerservaring.',
      date: '15 maart 2023',
      image: '/img/news/news1.jpg',
      categories: ['updates']
    },
    {
      id: 'tno-animation-award',
      title: 'TNO Unboxed wint animatie award',
      excerpt: 'Onze animatie voor TNO Unboxed is bekroond met een internationale prijs voor innovatieve animatie.',
      date: '28 februari 2023',
      image: '/img/news/news2.jpg',
      categories: ['awards', 'cases']
    },
    {
      id: 'terralemon-op-award-show',
      title: 'Terralemon aanwezig op Dutch Design Week',
      excerpt: 'Kom ons ontmoeten op de Dutch Design Week waar we onze laatste projecten presenteren.',
      date: '10 januari 2023',
      image: '/img/news/news3.jpg',
      categories: ['events']
    },
    {
      id: 'case-study-linxis',
      title: 'Case study: LinXis website',
      excerpt: 'Lees onze nieuwe case study over de ontwikkeling van de LinXis website en hoe we hun visuele identiteit hebben vertaald naar een digitale ervaring.',
      date: '5 december 2022',
      image: '/img/news/news4.jpg',
      categories: ['cases']
    },
    {
      id: 'workshop-motion-design',
      title: 'Workshop Motion Design',
      excerpt: 'Terralemon organiseert een workshop over motion design in ons kantoor in Amsterdam.',
      date: '22 november 2022',
      image: '/img/news/news5.jpg',
      categories: ['events']
    },
    {
      id: 'nieuw-tno-partnership',
      title: 'Nieuw partnership met TNO',
      excerpt: 'We zijn verheugd om aan te kondigen dat we een langdurige samenwerking zijn aangegaan met TNO.',
      date: '15 oktober 2022',
      image: '/img/news/news6.jpg',
      categories: ['updates']
    }
  ];

  // Filter nieuws op basis van geselecteerde categorie
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.categories.includes(activeCategory));

  return (
    <Layout title="Nieuws" description="Blijf op de hoogte van het laatste nieuws over Terralemon en onze projecten.">
      {/* Header */}
      <div className="main_banner position-relative d-flex align-items-center bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-3 mb-2">Nieuws</h1>
              <h2 className="fs-3 fw-light mb-5">Blijf op de hoogte van het laatste Terralemon nieuws.</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Filter en Nieuws Grid */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-3">
              <h3 className="mb-4">Categorieën</h3>
              <ul className="list-group list-group-flush mb-5">
                {categories.map(category => (
                  <li className="list-group-item fs-small" key={category.id}>
                    <a 
                      href="#" 
                      className={`industry-link ${activeCategory === category.id ? 'active text-primary' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(category.id);
                      }}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {filteredNews.map((newsItem) => (
                  <div className="col-md-6 mb-4" key={newsItem.id}>
                    <Link href={`/news/${newsItem.id}`} className="card card-hover h-100 border-0">
                      <div className="card-frame ratio ratio-16x9 overflow-hidden">
                        <img 
                          src={newsItem.image} 
                          className="card-img-top object-fit-cover w-100 h-100" 
                          alt={newsItem.title} 
                        />
                      </div>
                      <div className="card-body px-0 pt-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="badge tl-bg-green text-dark">
                            {newsItem.categories[0]}
                          </span>
                          <small className="text-muted">{newsItem.date}</small>
                        </div>
                        <h4 className="card-title fw-bold">{newsItem.title}</h4>
                        <p className="card-text">{newsItem.excerpt}</p>
                        <div className="text-end mt-auto">
                          <span className="tl-text-green fw-bold">Lees meer →</span>
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

      {/* Newsletter */}
      <div className="container-fluid py-5 tl-bg-green">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title mb-3">Blijf op de hoogte</h2>
              <p className="fs-4 fw-light">Schrijf je in voor onze nieuwsbrief en ontvang updates over onze projecten.</p>
            </div>
            <div className="col-lg-6">
              <form className="d-flex flex-column flex-md-row gap-3">
                <input type="email" className="form-control form-control-lg" placeholder="Je e-mailadres" />
                <button type="submit" className="tl-btn tl-btn-secondary">
                  Inschrijven
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 