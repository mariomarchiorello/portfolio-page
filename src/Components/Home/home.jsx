import React from 'react';
import ClampLines from 'react-clamp-lines';
import './clampLinesStyle.css';
import pic1 from '../../Assets/homePictures/mario_bike.jpg';
import pic2 from '../../Assets/homePictures/IMG-20170118-WA0002.jpg';
import pic3 from '../../Assets/homePictures/IMG-20190829-WA0033 2.jpg';
import pic4 from '../../Assets/homePictures/IMG_4740.JPG';
import pic5 from '../../Assets/homePictures/IMG_4885.JPG';
import pic6 from '../../Assets/homePictures/IMG_5341.JPG';
import pic7 from '../../Assets/homePictures/IMG_7146.JPG';
import { BackgroundHome, Items } from './style';
import Carousel from 'react-elastic-carousel';

function Home() {
  const textMe =
    "My name is Mario Marchiorello, I'm a young at heart web developer\n" +
    'with a with a non-linear past, a large portion of motivation, and a well-balanced mix of\n' +
    'soft and hard skills.\n' +
    "I'm looking for a position as junior Front-End developer.\n" +
    'In April I successfully completed a Software Boot Camp\n' +
    'at the Propulsion Academy in Zurich. As part of this intensive training, I pitched an original\n' +
    'idea in a final project, convinced the course management to select it, and led an international team\n' +
    'in the implementation. The result, a web app, allows a climate protection organization to annotate\n' +
    'photos, collect the resulting data in a relational database, and store it in an open-source format for scientific purposes.\n' +
    'As team leader, I was responsible for communicating with the GOES Foundation, ensuring a\n' +
    'high-quality solution, and choosing appropriate technologies (react.js, NPM, Django, REST, etc.).\n';

  const textSauce =
    'I have been interested in the field of web and application development for a long time and at the\n' +
    'beginning of 2021, with the move from the hospitality industry to software engineering, I decided\n' +
    'to turn this passion into my profession. From my previous career I bring experience in customer\n' +
    'contact, motivation, energy, and flexibility.';

  return (
    <>
      <BackgroundHome>
        <section className={'pictures'}>
          <Carousel
            itemPosition={'center'}
            style={{
              height: '100%',
              padding: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            itemsToShow={1}
          >
            <Items>
              <img
                className={'carouselImage'}
                src={pic1}
                alt={'profile of Mario'}
              />
            </Items>
            <Items>
              <img
                className={'carouselImage'}
                src={pic2}
                alt={'profile of Mario'}
              />
            </Items>
            <Items>
              <img
                className={'carouselImage'}
                src={pic3}
                alt={'profile of Mario'}
              />
            </Items>
            <Items>
              <img
                className={'carouselImage'}
                src={pic4}
                alt={'profile of Mario'}
              />
            </Items>
            <Items>
              <img
                className={'carouselImage'}
                src={pic5}
                alt={'profile of Mario'}
              />
            </Items>
            <Items>
              <img
                className={'carouselImage'}
                src={pic6}
                alt={'profile of Mario'}
              />
            </Items>
            <Items>
              <img
                className={'carouselImage'}
                src={pic7}
                alt={'profile of Mario'}
              />
            </Items>
          </Carousel>
        </section>
        <section className={'text'}>
          <h1>Hi and welcome to my website!</h1>
          <h3>This is who I am:</h3>
          <ClampLines
            text={textMe}
            lines={4}
            id="custom"
            moreText="read more"
            className="custom-class"
            innerElement="span"
            lessText="read less"
            ellipsis="..."
          />
          <h3>This is my special sauce:</h3>
          <ClampLines
            text={textSauce}
            lines={4}
            id="custom"
            moreText="read more"
            className="custom-class"
            innerElement="span"
            lessText="read less"
            ellipsis="..."
          />
        </section>
      </BackgroundHome>
    </>
  );
}
export default Home;
