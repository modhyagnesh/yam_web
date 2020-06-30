/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line no-unused-vars
const Services = ({ data }) => {
  return (
    <section id="services" className="section gray-bg services-section">
      <div className="container">
        <div className="row justify-content-center m-45px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row">
          <For each="item" of={data.servicesList}>
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="feature-box-02">
                <span className="icon theme-bg">
                  {/* <FontAwesomeIcon icon={item.icon.split('_')} /> */}
                </span>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <div className="read-more">
                    <a href="#" className="more-btn">
                      Read More
                      {/* <FontAwesomeIcon icon="arrow-right" /> */}
                    </a>
                  </div>
                </div>
              </div>
              {/* feature-box-02 */}
            </div>
          </For>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default Services;
