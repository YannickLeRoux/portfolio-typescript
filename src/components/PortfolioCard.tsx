import * as React from 'react';

interface PortfolioProps {
  source: string;
  link: string;
  title: string;
  desc: string;
}

const PortfolioCard = ({ source, link, title, desc }: PortfolioProps): JSX.Element => {
  return (
    <section className="portfolio-card">
      <div className="image-portfolio">
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="website screenshot">
          <img className="img-fluid" src={source} alt="" />
          <div className="overlay">
            <div className="text-image-portfolio">Visit →</div>
          </div>
        </a>
      </div>
      <h3 className="name">{title}</h3>
      <p className="description">{desc}</p>
    </section>
  );
};

export default PortfolioCard;
