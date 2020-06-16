import Head from 'next/head';
import Layout from '@components/layout';
import { CMS_NAME } from '@constants';

const Resume = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
    </Layout>
  );
};

export default Resume;
