/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CSSTransition } from 'react-transition-group';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { decamelize } from '@utils';

import './portfolio.module.css';

const Portfolio = ({ data }) => {
  const [category, setCategory] = useState('');

  return (
    <section id="portfolio" className="section gray-bg">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-30px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">{data?.title ?? <Skeleton width={150} />}</h2>
              <p>{data?.description ?? <Skeleton height={16} width="100%" count={2} />}</p>
            </div>
          </div>
        </div>
        <div className="portfolio-filter m-30px-b">
          <Choose>
            <When condition={data?.portfolioList}>
              <ul className="filter text-center">
                <li
                  className={classNames({ active: category === '' })}
                  data-filter="*"
                  onClick={() => setCategory('')}
                  onKeyPress={() => setCategory('')}
                >
                  All
                </li>
                <For each="item" of={[...new Set(data.portfolioList.map((x) => x.category))]}>
                  <li
                    className={classNames({ active: category === item })}
                    data-filter={`.${item}`}
                    onClick={() => setCategory(item)}
                    onKeyPress={() => setCategory(item)}
                    key={item}
                  >
                    {decamelize(item)}
                  </li>
                </For>
              </ul>
            </When>
            <Otherwise>
              <div className="text-center">
                <For each="item" of={[...Array(3).keys()]}>
                  <Skeleton height={38} width={60} style={{ borderRadius: 30, margin: '0 10px' }} />
                </For>
              </div>
            </Otherwise>
          </Choose>
        </div>
        {/* Portfolio Filter */}
        <ul className="portfolio-cols portfolio-cols-3">
          <Choose>
            <When condition={data?.portfolioList}>
              <For each="item" of={data.portfolioList}>
                <CSSTransition
                  in={category === item.category || category === ''}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <li className={classNames('portfolio-item', item.category)} key={item.id}>
                    <div className="portfolio-col portfolio-hover-01">
                      <div className="portfolio-img">
                        <a href="#" aria-label="portfolio Images">
                          <img
                            className="lazyload"
                            data-src={item.portfolioImages[0].url}
                            title="portfolio Images"
                            alt="portfolio"
                          />
                        </a>
                        <div className="hover">
                          <div className="action-btn">
                            <a href={item.videoLink} className="popup-video theme-color">
                              {/* <FontAwesomeIcon icon="play" /> */}
                            </a>
                            <a
                              className="lightbox-gallery theme-color"
                              href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.portfolioImages[0].url}`}
                              title="Lightbox gallery image title..."
                            >
                              {/* <FontAwesomeIcon icon="expand" /> */}
                            </a>
                            <a href={item.portfolioLink} className="theme-color">
                              {/* <FontAwesomeIcon icon="link" /> */}
                            </a>
                          </div>
                          {/* Video Btn */}
                        </div>
                        {/* Hover */}
                      </div>

                      <div className="portfolio-info">
                        <h5>{item.title}</h5>
                        <span>{item.description}</span>
                      </div>
                    </div>
                    {/* Portfolio */}
                  </li>
                </CSSTransition>
              </For>
            </When>
            <Otherwise>
              <For each="item" of={[...Array(6).keys()]}>
                <li className={classNames('portfolio-item', item.category)} key={item.id}>
                  <div className="portfolio-col portfolio-hover-01">
                    <div className="portfolio-img">
                      {/*  eslint-disable-next-line no-script-url */}
                      <a href="javascript:void(0)" aria-label="portfolio Images">
                        <Skeleton height={250} width="100%" />
                      </a>
                      {/* Hover */}
                    </div>

                    <div className="portfolio-info">
                      <h5>
                        <Skeleton height={24} width="70%" />
                      </h5>
                      <span>
                        <Skeleton height={16} width="40%" />
                      </span>
                    </div>
                  </div>
                  {/* Portfolio */}
                </li>
              </For>
            </Otherwise>
          </Choose>
          {/* col */}
        </ul>
        {/* row */}
        {/* portfolio content */}
      </div>
      {/* Container */}
    </section>
  );
};

export default Portfolio;
