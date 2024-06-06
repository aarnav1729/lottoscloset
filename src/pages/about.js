import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Sydney \n A British brand since 1860`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded in 2024, Lotto's Closet is an innovative Minnesota based brand with a
              contemporary edge. We make timeless everyday luxury clothing.
            </p>
            <br />
            <br />
            <p>
              We created some of the world's first athlesuire T-shirts and spent decades
              perfecting the feel of the cotton. Today we are one of the only brands
              that makes our T-shirts in our own factory right here in the United States.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                Lotto's Closet is a brand that is committed to creating high-quality clothing
                that is both stylish and comfortable. We believe that everyone should have
                access to clothing that makes them feel good and that is why we are dedicated
                to creating clothing that is both affordable and fashionable. Our goal is to
                provide our customers with clothing that is made to last and that is designed
                to be worn for years to come. A portion of our profits goes to charity and we
                are always looking for ways to give back to our community.
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only natural materials</li>
              </ol>
              <img alt={'founder'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our founder, Ryan Martin, had both an eye for quality and a
                desire to innovate. He ensures that all his products are created using the finest fibres such as
                Sea Island cotton, cashmere and silk. He also ensures that all his products are made in
                the United States so he is able to give back to the community. 
                Moreover, all of our products are made with the environment in mind. We use only natural
                materials and we are always looking for ways to reduce our carbon footprint. We are
                committed to creating clothing that is both stylish and sustainable.
              </p>
              <p>
                Made in Minnesota and crafted from our luxurious long
                staple Supima cotton for unparalleled softness, comfort and
                durability, the Kingdom Dept. T-shirt has a classic fit and only the
                most essential details.{' '}
              </p>
              <p>
                With over 100 hours spent perfecting fabric, fit and style, the
                Kingdom Dept. Classic T-shirt is recognised as one the finest in the
                world.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
