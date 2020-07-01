/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Skeleton from 'react-loading-skeleton';

import { useEffect, useRef } from 'react';
import './skill.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({ data }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const bounding = sectionRef.current.getBoundingClientRect();
      const progressbars = document.querySelectorAll('.progress .progress-bar');
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (bounding.top >= 0 && bounding.bottom <= windowHeight) {
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
              <h3 className="font-alt">{data?.title ?? <Skeleton />}</h3>
              <p className="m-40px-b">{data?.description ?? <Skeleton count={3} />}</p>
              <Choose>
                <When condition={data?.buttonText}>
                  <a href={data.buttonLink} className="m-btn m-btn-theme">
                    {data.buttonText}
                    {/* <FontAwesomeIcon icon="arrow-right" /> */}
                  </a>
                </When>
                <Otherwise>
                  <Skeleton height={45} width={165} style={{ borderRadius: 45 }} />
                </Otherwise>
              </Choose>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skills p-t-10px-sm">
              <Choose>
                <When condition={data?.skillList}>
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
                </When>
                <Otherwise>
                  <For each="item" of={[...Array(4).keys()]}>
                    <div className="progress-lt" key={item.id}>
                      <h6>
                        <Skeleton width={50} />
                      </h6>
                      <span>
                        <Skeleton width={30} />
                      </span>
                      <div>
                        <Skeleton height={6} style={{ borderRadius: 50, marginBottom: 0 }} />
                      </div>
                      {/* /progress-bar */}
                      {/* /progress */}
                    </div>
                  </For>
                </Otherwise>
              </Choose>
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
