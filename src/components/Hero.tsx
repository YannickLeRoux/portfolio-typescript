import * as React from 'react';
import { Link } from 'react-router-dom';
// import Button from './Button';
import LazyHero from 'react-lazy-hero';
import '../assets/css/Paralax-Hero-Banner.css';

const backgroundImgURL = 'https://images.unsplash.com/photo-1541075217473-93119871682d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2eb08253df1eb24e6527cbc169440d&auto=format&fit=crop&w=2000&q=80';

export namespace Hero {
  export interface State {
    offsetHeight: string|null;
  }
}

class Hero extends React.Component<any, Hero.State> {
  constructor(props: any) {
    super(props);
    this.state  = {
      offsetHeight: '56px'
    }

  }

  componentDidMount() {
    const navbar = document.querySelector('nav');
    if (navbar) {
      this.setState({offsetHeight: navbar.offsetHeight + 'px'});
    }
  }

  render() {
    return (
      <section>
        <LazyHero
          imageSrc={backgroundImgURL}
          color='rgb(0,0,0)'
          opacity={0.2}
          minHeight='75vh'
          parallaxOffset={100}
          style={{padding: '-15px' }}
        >
          <div className="home-title-container">
            <h1 className="homepage-title"><i className="fa fa-quote-left"></i> Any fool can write code that a computer can understand.
Good programmers write code that humans can understand.<i className="fa fa-quote-right"></i></h1>
            <p style={{ color: 'white' }}> - Martin Fowler</p>
          </div>
          <Link to="/about">
          </Link>
        </ LazyHero>
      </section>
    );
  }
}


export default Hero;