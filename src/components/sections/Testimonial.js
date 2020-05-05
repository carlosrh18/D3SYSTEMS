import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Stack y tecnologías web',
    paragraph: 'Usamos las tecnologías backend y frontend más usadas en la industria del desarrollo de software'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                
          <Link to="/">
          <Image
            src={require('./../../assets/images/node3.png')}
            alt="Open"
            width={100}
            height={100} />
        </Link>
        </div>
        </div>
        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
        <Link to="/">
          <Image
            src={require('./../../assets/images/reactico.png')}
            alt="Open"
            width={100}
            height={100} />
        </Link>
        </div>
        </div>
        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
        <Link to="/">
          <Image
            src={require('./../../assets/images/mongo.png')}
            alt="Open"
            width={100}
            height={100} />
        </Link>
        </div>
        </div>
        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
        <Link to="/">
          <Image
            src={require('./../../assets/images/shopify.png')}
            alt="Open"
            width={100}
            height={100} />
        </Link>
        </div>
        </div>

        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
        <Link to="/">
          <Image
            src={require('./../../assets/images/python.png')}
            alt="Open"
            width={100}
            height={100} />
        </Link>
        </div>
        </div>
        
        
        
               
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"></span>
                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Tech Stack</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        
    
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;