/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Slider from 'react-slick';

const Testimonial = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
              <h2 className="font-alt">{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
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
          {/* col */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
