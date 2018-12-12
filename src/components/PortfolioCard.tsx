import * as React from 'react';

type Props = {
  source: string;
  link: string;
  title: string;
  desc: string;
}

const PortfolioCard: React.SFC<Props> = ({ source, link, title, desc }) => {
  return (
    <section className="portfolio-card">
      <div className="image-portfolio">
        <a href={ link } target="_blank" rel="noopener noreferrer" aria-label="website screenshot">
          <img className="img-fluid" src={ source } alt="" />
          <div className="overlay">
              <div className="text-image-portfolio">Visit →</div>
            </div>
        </a>
      </div>
      <h3 className="name">{ title }</h3>
      <p className="description">{ desc }</p>
    </section>
  );
};


export default PortfolioCard;