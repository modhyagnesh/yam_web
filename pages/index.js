import Head from 'next/head';
import { CMS_NAME } from '@constants';
import Layout from '@components/layout';
import Banner from '@components/Banner';
import About from '@components/About';
import Counter from '@components/Counter';
import Services from '@components/Services';
import Skill from '@components/Skill';
import Portfolio from '@components/Portfolio';
import Testimonial from '@components/Testimonial';
import Blog from '@components/Blog';
import Contact from '@components/Contact';

import useHomePage from '../hooks/useHomePage';

const Index = () => {
  const { data, error } = useHomePage();

  if (error) return <div>failed to load</div>;

  const dynamicFields = (data?.dynamicFields || []).reduce((p, c) => {
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
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Banner data={data?.home} />
      <About data={data?.aboutMe} />
      <Counter data={data?.counter} />
      <Services data={dynamicFields?.services} />
      <Skill data={dynamicFields?.skills} />
      <Portfolio data={dynamicFields?.portfolio} />
      <Testimonial data={dynamicFields?.testimonial} />
      <Blog />
      <Contact />
    </Layout>
  );
};

Index.displayName = 'HomePage';

export default Index;
