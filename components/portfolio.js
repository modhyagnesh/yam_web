/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { decamelize } from '@utils';

const Portfolio = ({ data }) => {
  const [iso, setISO] = useState(null);

  useEffect(() => {
    setISO(
      // eslint-disable-next-line jsx-control-statements/jsx-jcs-no-undef
      new Isotope('.portfolio-content', {
        resizable: false,
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        filter: '*',
      }),
    );
  }, []);

  const filter = (e) => {
    iso.arrange({ filter: e.target.getAttribute('data-filter') });
  };

  return (
    <section id="portfolio" className="section gray-bg">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-30px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
        <div className="portfolio-filter m-30px-b">
          <ul className="filter text-center">
            <li role="presentation" className="active" data-filter="*" onClick={filter}>
              All
            </li>
            <For each="item" of={[...new Set(data.portfolioList.map((x) => x.category))]}>
              <li role="presentation" data-filter={`.${item}`} onClick={filter} key={item}>
                {decamelize(item)}
              </li>
            </For>
          </ul>
        </div>
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <For each="item" of={data.portfolioList}>
              <li className={classNames('portfolio-item', item.category)} key={item.id}>
                <div className="portfolio-col portfolio-hover-01">
                  <div className="portfolio-img">
                    <a href="#">
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.portfolioImages[0].url}`}
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="hover">
                      <div className="action-btn">
                        <a href={item.videoLink} className="popup-video theme-color">
                          <FontAwesomeIcon icon="play" />
                        </a>
                        <a
                          className="lightbox-gallery theme-color"
                          href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.portfolioImages[0].url}`}
                          title="Lightbox gallery image title..."
                        >
                          <FontAwesomeIcon icon="expand" />
                        </a>
                        <a href={item.portfolioLink} className="theme-color">
                          <FontAwesomeIcon icon="link" />
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
            </For>
            {/* col */}
          </ul>
          {/* row */}
        </div>
        {/* portfolio content */}
      </div>
      {/* Container */}
    </section>
  );
};

export default Portfolio;
