/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '@components/layout';
import { CMS_NAME } from '@constants';
import Banner from '@components/banner';

const Resume = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      {/* Page Title */}
      <Banner />
      {/* / */}

      <section className="section blog-lising">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img2.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img3.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img4.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img2.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img3.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img4.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img2.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img3.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="blog-item md-m-15px-tb">
                <a href="#">
                  <img src="static/img/blog-img4.jpg" title="Ryan" alt="Ryan" />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    By <a href="">John Doe</a> <span>03.02.2018</span>
                  </div>
                  {/* /post-meta */}

                  <h4>
                    <a className="theme-color" href="#">
                      Lorem ipsum dolor sit amet.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
                {/* /blog-content */}
              </div>
              {/* Blog Item */}
            </div>
          </div>
          {/* row */}
          <div className="bottom-pagination">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
