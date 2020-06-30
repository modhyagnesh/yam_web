import Head from 'next/head';
import dynamic from 'next/dynamic';
import { CMS_NAME } from '@constants';
import Layout from '@components/layout';

import 'slick-carousel/slick/slick.css';
import useHomePage from '../hooks/useHomePage';

const Banner = dynamic(import('@components/banner'));
const About = dynamic(import('@components/about'));
const Counter = dynamic(import('@components/counter'));
const Services = dynamic(import('@components/services'));
const Skill = dynamic(import('@components/skill'));
const Portfolio = dynamic(import('@components/portfolio'));
const Testimonial = dynamic(import('@components/testimonial'));
const Blog = dynamic(import('@components/blog'));
const Contact = dynamic(import('@components/contact'));
const Loading = dynamic(import('@components/Loading'));

const Homepage = () => {
  const { data, error } = useHomePage();

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  const { home, aboutMe, counter, dynamicFields } = data;
  const { services, skills, portfolio, testimonial } = dynamicFields.reduce((p, c) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (c.__component) {
      case 'home-page.services':
        return { ...p, services: c };
      case 'home-page.skills':
        return { ...p, skills: c };
      case 'home-page.portfolio':
        return { ...p, portfolio: c };
      case 'home-page.testimonial':
        return { ...p, testimonial: c };

      default:
        return p;
    }
  }, {});

  return (
    <>
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
    </>
  );
};

// eslint-disable-next-line react/prop-types
const index = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Homepage />
    </Layout>
  );
};

index.displayName = 'HomePage';

export default index;
