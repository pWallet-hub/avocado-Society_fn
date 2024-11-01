import React from 'react';
import './Ressource.css';
import avca from '../../assets/avca.jpg';
import image2 from '../../assets/image2.jpeg';

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
    <>
    <div className='active-hub'>
        <div className='active-content'>
          <img className='active-img' src={avca} alt="Description of image" />
          <h3>RESOURCES</h3>
        </div>
      </div>
    <div className="resources-container">
      <section className='tutotials-section'>
        <h2>Tutorials</h2>
        <div className="tutorials-grid">
          <div className='tutorials-card'>
            <div className='tutorial-cover one'></div>
            <div className='tutorial-description'>
              How to grow an avocado from seed to fruit
            </div>
            <div className='tutorial-footer'>
              <div className="tutorial-user"></div>
              <div className='tutorial-footer-names'>
                <h3>John Doe</h3>
                <h5>November 1,2024</h5>
              </div>
            </div>
          </div>
          <div className='tutorials-card'>
            <div className='tutorial-cover two'></div>
            <div className='tutorial-description'>
              How to grow an avocado from seed to fruit
            </div>
            <div className='tutorial-footer'>
              <div className="tutorial-user"></div>
              <div className='tutorial-footer-names'>
                <h3>John Doe</h3>
                <h5>November 1,2024</h5>
              </div>
            </div>
          </div>
          <div className='tutorials-card'>
            <div className='tutorial-cover three'></div>
            <div className='tutorial-description'>
              How to grow an avocado from seed to fruit
            </div>
            <div className='tutorial-footer'>
              <div className="tutorial-user"></div>
              <div className='tutorial-footer-names'>
                <h3>John Doe</h3>
                <h5>November 1,2024</h5>
              </div>
            </div>
          </div>
        </div>
        <button>See More</button>
      </section>
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
    </>
  );

}