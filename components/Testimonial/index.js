/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// import ItemsCarousel from 'react-items-carousel';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
// import { useState } from 'react';
import useMedia from '@hooks/useMedia';

import 'slick-carousel/slick/slick.css';
import './testimonial.module.css';

const Testimonial = ({ data }) => {
  // const [activeItemIndex, setActiveItemIndex] = useState(0);

  const columnCount = useMedia(
    // Media queries
    ['(min-width: 1280px)', '(min-width: 1024px)', '(min-width: 768px)', '(min-width: 640px)'],
    // Column counts (relates to above media queries by array index)
    [3, 3, 2, 1],
    // Default column count
    1,
  );

  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  const customPaging = () => <button type="button" />;

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">{data?.title ?? <Skeleton width={150} />}</h2>
              <p>{data?.description ?? <Skeleton height={16} width="100%" count={2} />}</p>
            </div>
          </div>
        </div>
        <Choose>
          <When condition={data?.testimonialList}>
            {/* <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={columnCount}
              gutter={5}
              infiniteLoop
            > */}
            <Slider {...settings}>
              <For each="item" of={data.testimonialList}>
                <div className="testimonial-col" key={item.id}>
                  <div className="img">
                    <img
                      className="lazyload"
                      data-src={item.avatar.url}
                      alt="Yagnesh"
                      title="Yagnesh"
                    />
                  </div>
                  <h6>{item.name}</h6>
                  <p>{item.testimonial}</p>
                </div>
              </For>
            </Slider>
            {/* </ItemsCarousel> */}
          </When>
          <Otherwise>
            <div style={{ display: 'flex' }}>
              <For each="item" of={[...Array(columnCount).keys()]}>
                <div className="testimonial-col" style={{ flex: 1 }} key={item}>
                  <div className="img">
                    <Skeleton
                      circle
                      height={70}
                      style={{ position: 'absolute', left: 0, top: 0 }}
                    />
                  </div>
                  <h6>
                    <Skeleton width={150} />
                  </h6>
                  <p>
                    <Skeleton count={3} />
                  </p>
                </div>
              </For>
            </div>
          </Otherwise>
        </Choose>
        {/* col */}
      </div>
    </section>
  );
};

export default Testimonial;
