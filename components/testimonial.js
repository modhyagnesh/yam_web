/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import ItemsCarousel from 'react-items-carousel';
import { useState } from 'react';
import useMedia from '@hooks/useMedia';

const Testimonial = ({ data }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const columnCount = useMedia(
    // Media queries
    ['(min-width: 1280px)', '(min-width: 1024px)', '(min-width: 768px)', '(min-width: 640px)'],
    // Column counts (relates to above media queries by array index)
    [3, 3, 2, 1],
    // Default column count
    1,
  );

  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={columnCount}
          gutter={5}
          infiniteLoop
        >
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
        </ItemsCarousel>
        {/* col */}
      </div>
    </section>
  );
};

export default Testimonial;
