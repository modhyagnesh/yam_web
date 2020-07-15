import Head from 'next/head';
import { useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CMS_NAME } from '@constants';
import usePortfolio from '../hooks/usePortfolio';
import PortfolioList from '../components/PortfolioList';
import Pagination from '../components/Pagination';

const Portfolio = () => {
  const [page, setPage] = useState(0);
  const { data, error } = usePortfolio(page);

  if (error) return <div>failed to load</div>;
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <section className="page-title" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <h1 className="font-alt">Portfolio List</h1>
        </div>
        {/* container */}
      </section>

      <section className="section blog-lising">
        <div className="container">
          <div className="row">
            <PortfolioList data={data} />
          </div>
          <If condition={!!data?.totalcount}>
            <Pagination page={page} totalcount={data.totalcount} changePage={setPage} />
          </If>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
