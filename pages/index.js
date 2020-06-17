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
import { getBanner, getAbout } from '@lib/api';
import markdownToHtml from '@lib/markdownToHtml';

const index = ({ banner, about }) => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      {banner && <Banner data={banner} />}
      {about && <About data={about} />}
      <Counter />
      <Services />
      <Skill />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
    </Layout>
  );
};

index.propTypes = {
  banner: PropTypes.shape({
    content: PropTypes.string,
    button_text: PropTypes.string,
    button_link: PropTypes.string,
    background_image: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  about: PropTypes.shape({
    content: PropTypes.string,
    button_text: PropTypes.string,
    button_link: PropTypes.string,
    About_img: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default index;

export async function getStaticProps() {
  const { banner } = await getBanner();
  const contentBanner = await markdownToHtml(banner.banner_text);

  const { about } = await getAbout();
  const contentAbout = await markdownToHtml(about.about_text);

  return {
    props: {
      banner: { ...banner, content: contentBanner },
      about: { ...about, content: contentAbout },
    },
  };
}
