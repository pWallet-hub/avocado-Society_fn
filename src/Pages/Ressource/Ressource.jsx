import React from 'react';
import './Ressource.css';

// Import PDF and image files
import pdf1 from '../../assets/docs/Avocado Society of Rwanda - pWallet Info Booklet avocado.pdf';
import pdf2 from '../../assets/docs/Avocado Society of Rwanda - pWallet Info Booklet avocado.pdf';
import pdf3 from '../../assets/docs/Avocado Society of Rwanda - pWallet Info Booklet avocado.pdf';
import cover1 from '../../assets/docs/bg.jpg';
import cover2 from '../../assets/docs/bg.jpg';
import cover3 from '../../assets/docs/bg.jpg';

const pdfs = [
  { title: 'Avocado Society Rwanda', link: pdf1, cover: cover1 },
  { title: 'Sustainable Agriculture', link: pdf2, cover: cover2 },
  { title: 'Organic Farming', link: pdf3, cover: cover3 },
];

const news = [
  { title: 'Avocado Market Trends', date: '2023-10-01', content: 'The avocado market is seeing unprecedented growth...' },
  { title: 'New Farming Techniques', date: '2023-09-15', content: 'Innovative farming techniques are being adopted...' },
  { title: 'Climate Impact on Avocado', date: '2023-09-10', content: 'Climate change is affecting avocado production...' },
];

export default function Ressource() {
  return (
    <div className="resources-container">
      <section className="pdf-section">
        <h2>Documents and Books</h2>
        <div className="pdf-grid">
          {pdfs.map((pdf, index) => (
            <div key={index} className="pdf-card">
              <img src={pdf.cover} alt={pdf.title} className="pdf-cover" />
              <a href={pdf.link} download className="pdf-download">{pdf.title}</a>
            </div>
          ))}
        </div>
      </section>
      <section className="news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          {news.map((article, index) => (
            <div key={index} className="news-card">
              <h3>{article.title}</h3>
              <p className="news-date">{article.date}</p>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
        <button className="view-all-button">View All News</button>
      </section>
    </div>
  );
}