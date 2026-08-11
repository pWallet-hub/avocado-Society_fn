import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Download, 
  FileText, 
  Calendar, 
  ArrowRight, 
  BookOpen, 
  Newspaper,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import './Ressource.css';

// Import PDF and image files
import pdf1 from '../../assets/docs/Avocado Society of Rwanda - pWallet Info Booklet avocado.pdf';
import pdf2 from '../../assets/docs/Avocado Society of Rwanda - pWallet Info Booklet avocado.pdf';
import pdf3 from '../../assets/docs/Avocado Society of Rwanda - pWallet Info Booklet avocado.pdf';
import cover1 from '../../assets/docs/bg.jpg';
import cover2 from '../../assets/docs/bg.jpg';
import cover3 from '../../assets/docs/bg.jpg';

const pdfs = [
  { 
    title: 'pWallet Info Booklet', 
    subtitle: 'Avocado Society of Rwanda Guide',
    size: '2.4 MB',
    type: 'PDF Guide',
    link: pdf1, 
    cover: cover1 
  },
  { 
    title: 'Sustainable Agriculture Handbook', 
    subtitle: 'Best Practices for High Yields',
    size: '1.8 MB',
    type: 'PDF Manual',
    link: pdf2, 
    cover: cover2 
  },
  { 
    title: 'Organic Farming Standards', 
    subtitle: 'Certification & Quality Protocols',
    size: '3.1 MB',
    type: 'PDF Document',
    link: pdf3, 
    cover: cover3 
  },
];

const news = [
  { 
    title: 'Avocado Market Trends 2026', 
    date: 'Oct 01, 2025', 
    category: 'Market Insights',
    content: 'The Rwandan avocado sector continues to see exponential export growth driven by increasing demand across regional and European markets.' 
  },
  { 
    title: 'New Precision Farming Techniques', 
    date: 'Sep 15, 2025', 
    category: 'Agronomy',
    content: 'Farmers are adopting micro-irrigation and targeted pest management to safeguard tree health and boost grade-A fruit yield.' 
  },
  { 
    title: 'Climate Resilience in Horticulture', 
    date: 'Sep 10, 2025', 
    category: 'Sustainability',
    content: 'Addressing rainfall variability with soil moisture retention strategies and shade management protocols for young orchards.' 
  },
];

export default function Ressource() {
  return (
    <div className="resources-wrapper">
      <Helmet>
        <title>Resources & Publications | Avocado Society of Rwanda</title>
        <meta name="description" content="Access technical guides, official publications, and horticultural news from the Avocado Society of Rwanda." />
        <link rel="canonical" href="https://avocado-society-rwanda.netlify.app/Resources" />
        <meta property="og:title" content="Resources | Avocado Society of Rwanda" />
        <meta property="og:description" content="Access official documents, guides, and horticultural news from the Avocado Society of Rwanda." />
        <meta property="og:url" content="https://avocado-society-rwanda.netlify.app/Resources" />
      </Helmet>

      {/* Hero Header Section */}
      <header className="resources-hero">
        <div className="hero-content">
          <span className="hero-badge">
            <BookOpen className="w-3.5 h-3.5" /> Knowledge Hub
          </span>
          <h1>Publications, Technical Guides & Field News</h1>
          <p>
            Explore our curated library of official documentation, agronomic manuals, and latest industry updates tailored for farmers, investors, and agricultural partners in Rwanda.
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="resources-main">
        
        {/* PDF Publications Section */}
        <section className="resource-section">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Documentation</span>
              <h2>Official Publications & Manuals</h2>
            </div>
            <p className="section-desc">Download digital copies of our technical handbooks and informational guides.</p>
          </div>

          <div className="pdf-cards-grid">
            {pdfs.map((pdf, index) => (
              <article key={index} className="publication-card">
                <div className="cover-wrapper">
                  <img src={pdf.cover} alt={pdf.title} className="publication-cover" />
                  <span className="file-badge">{pdf.type}</span>
                </div>

                <div className="card-body">
                  <div className="card-meta">
                    <span className="file-size">{pdf.size}</span>
                    <span className="verified-tag"><CheckCircle2 className="w-3 h-3" /> Official</span>
                  </div>
                  <h3>{pdf.title}</h3>
                  <p className="card-subtitle">{pdf.subtitle}</p>

                  <a href={pdf.link} download className="download-btn">
                    <span>Download File</span>
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="editorial-divider"></div>

        {/* News Section */}
        <section className="resource-section">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">News & Updates</span>
              <h2>Latest Industry Insights</h2>
            </div>
            <p className="section-desc">Stay informed with updates regarding avocado farming, trade, and agronomic science in Rwanda.</p>
          </div>

          <div className="news-cards-grid">
            {news.map((article, index) => (
              <article key={index} className="news-article-card">
                <div className="news-card-header">
                  <span className="category-pill">{article.category}</span>
                  <span className="news-date">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <div className="news-card-footer">
                  <span className="read-more-link">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="action-row">
            <button className="view-all-btn">
              <span>View All News Archives</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}