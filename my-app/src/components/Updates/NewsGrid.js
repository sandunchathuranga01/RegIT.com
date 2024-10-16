import React from 'react';
import './NewsGrid.css';
import image1 from "../../Assets/PageCovers/cover\ 03.jpg"

const newsData = [
  { id: 1, title: 'Global renewables company RES selects IFS Cloud to support operations', image: image1 },
  { id: 2, title: 'Global renewables company RES selects IFS Cloud to support operations', image: image1 },
  { id: 3, title: 'Global renewables company RES selects IFS Cloud to support operations', image: image1 },
  { id: 4, title: 'Global renewables company RES selects IFS Cloud to support operations', image: image1 },
  { id: 5, title: 'Global renewables company RES selects IFS Cloud to support operations', image: image1 },
  { id: 6, title: 'Global renewables company RES selects IFS Cloud to support operations', image: image1 },
];

const NewsGrid = () => {
  return (
    <div className="news-section">
      <div className="news-grid">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <h3>{news.title}</h3>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="explore-more">
        <button className="explore-more-btn">
          Explore More <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default NewsGrid;
