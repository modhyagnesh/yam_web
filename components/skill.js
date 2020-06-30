/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({ data }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const bounding = sectionRef.current.getBoundingClientRect();
      const progressbars = document.querySelectorAll('.progress .progress-bar');
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        progressbars.forEach((ele) => {
          const element = ele;
          const progressWidth = `${element.getAttribute('aria-valuenow')}%`;
          element.style.width = progressWidth;
        });
      } else {
        progressbars.forEach((ele) => {
          const element = ele;
          element.style.width = 0;
        });
      }
    };
    document.addEventListener('scroll', onScroll, false);
    return () => {
      document.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <section id="skill" className="section skill-section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="skill-left p-80px-r md-p-40px-r sm-p-0px-r sm-m-30px-b">
              <h3 className="font-alt">{data.title}</h3>
              <p className="m-40px-b">{data.description}</p>
              <a href={data.buttonLink} className="m-btn m-btn-theme">
                {data.buttonText}
                {/* <FontAwesomeIcon icon="arrow-right" /> */}
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skills p-t-10px-sm">
              <For each="item" of={data.skillList}>
                <div className="progress-lt" key={item.id}>
                  <h6>{item.skillName}</h6>
                  <span>{`${item.experty}%`}</span>
                  <div className="progress">
                    <div
                      className="progress-bar theme-g-bg"
                      role="progressbar"
                      aria-valuenow={item.experty}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                    {/* /progress-bar */}
                  </div>
                  {/* /progress */}
                </div>
              </For>
              {/* /progress-lt */}
            </div>
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default Skill;
