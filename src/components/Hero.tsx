import * as React from 'react';
import * as LazyHero from 'react-lazy-hero';
// import Button from './Button';
import { Link } from 'react-router-dom';
import '../assets/css/Paralax-Hero-Banner.css';

export namespace Hero {
  export interface State{
    offsetHeight: string | null;
  }
}

class Hero extends React.Component<any, Hero.State> {
    state: Hero.State = {
        offsetHeight: '56px'
    }

    componentDidMount() {
        const navbar = document.querySelector('nav');
        if (navbar) {
            this.setState({offsetHeight: navbar.offsetHeight + 'px'})
        }
    }

    render() {
        return (
          <section>
            <LazyHero
            // className="hero"
            imageSrc='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3b92161cef01773ab8e0f83d4da1126&auto=format&fit=crop&w=1050&q=80'
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
                      {/*<Button>Learn About Me</Button> */}
                    </Link>
              </LazyHero>
          </section>
        );
    }
}


export default Hero;