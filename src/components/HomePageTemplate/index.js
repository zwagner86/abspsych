import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  missionHeading,
  missionDescription,
  serviceHeading,
  serviceDescription,
  serviceOfferings,
  experienceHeading,
  experienceDescription,
  practiceHeading,
  practiceDescription,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div className='Home'>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {missionHeading}
                  </h3>
                  <p>{missionDescription}</p>
                </div>
                <h2 className='has-text-weight-semibold is-size-2'>
                  {serviceHeading}
                </h2>
                <p>{serviceDescription}</p>
                <Offerings gridItems={serviceOfferings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>
                  {experienceHeading}
                </h2>
                <p>{experienceDescription}</p>
                <h2 className='has-text-weight-semibold is-size-2'>
                  {practiceHeading}
                </h2>
                <p>{practiceDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  missionHeading: PropTypes.string,
  missionDescription: PropTypes.string,
  serviceHeading: PropTypes.string,
  serviceDescription: PropTypes.string,
  serviceOfferings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  experienceHeading: PropTypes.string,
  experienceDescription: PropTypes.string,
  practiceHeading: PropTypes.string,
  practiceDescription: PropTypes.string,
  testimonials: PropTypes.array,
}

export default HomePageTemplate
