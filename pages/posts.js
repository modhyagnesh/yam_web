import { useState } from 'react';
import Head from 'next/head';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CMS_NAME } from '@constants';
import useBlog from '../hooks/useBlog';
import BlogList from '../components/BlogList';
import Pagination from '../components/Pagination';

const Posts = () => {
  const [page, setPage] = useState(0);
  const { data, error } = useBlog(page);

  if (error) return <div>failed to load</div>;
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <section className="page-title" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <h1 className="font-alt">Blog List</h1>
        </div>
        {/* container */}
      </section>

      <section className="section blog-lising">
        <div className="container">
          <If condition={!!data}>
            <BlogList data={data} />
          </If>

          <If condition={!!data?.totalcount}>
            <Pagination page={page} totalcount={data.totalcount} changePage={setPage} />
          </If>
        </div>
      </section>
    </>
  );
};

export default Posts;
