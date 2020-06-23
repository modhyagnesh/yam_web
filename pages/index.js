import Head from 'next/head';
import PropTypes from 'prop-types';

import { CMS_NAME } from '@constants';
import Layout from '@components/layout';
import Banner from '@components/banner';
import About from '@components/about';
import Counter from '@components/counter';
import Services from '@components/services';
import Skill from '@components/skill';
import Portfolio from '@components/portfolio';
import Testimonial from '@components/testimonial';
import Blog from '@components/blog';
import Contact from '@components/contact';
import 'slick-carousel/slick/slick.css';
import { getHomePage } from '@lib/api';

// eslint-disable-next-line react/prop-types
const index = ({ home, aboutMe, counter, services, skills, portfolio, testimonial }) => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <If condition={!!home}>
        <Banner data={home} />
      </If>
      <If condition={!!aboutMe}>
        <About data={aboutMe} />
      </If>
      <If condition={!!counter}>
        <Counter data={counter} />
      </If>
      <If condition={!!services}>
        <Services data={services} />
      </If>
      <If condition={!!skills}>
        <Skill data={skills} />
      </If>
      <If condition={!!portfolio}>
        <Portfolio data={portfolio} />
      </If>
      <If condition={!!testimonial}>
        <Testimonial data={testimonial} />
      </If>
      <Blog />
      <Contact />
    </Layout>
  );
};

index.propTypes = {
  banner: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    backgroundMedia: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  about: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default index;

export async function getStaticProps() {
  const {
    homePage: { home, aboutMe, counter, dynamicFields },
  } = await getHomePage();

  const { services, skills, portfolio, testimonial } = dynamicFields.reduce((p, c) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (c.__typename) {
      case 'ComponentHomePageServices':
        return { ...p, services: c };
      case 'ComponentHomePageSkills':
        return { ...p, skills: c };
      case 'ComponentHomePagePortfolio':
        return { ...p, portfolio: c };
      case 'ComponentHomePageTestimonial':
        return { ...p, testimonial: c };

      default:
        return p;
    }
  }, {});

  return {
    props: {
      home,
      aboutMe,
      counter,
      services,
      skills,
      portfolio,
      testimonial,
    },
  };
}
