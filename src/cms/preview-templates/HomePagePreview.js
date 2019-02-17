import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      missionHeading={entry.getIn(['data', 'missionHeading'])}
      missionDescription={entry.getIn(['data', 'missionDescription'])}
      serviceHeading={entry.getIn(['data', 'serviceHeading'])}
      serviceDescription={entry.getIn(['data', 'serviceDescription'])}
      serviceOfferings={{ blurbs }}
      experienceHeading={entry.getIn(['data', 'experienceHeading'])}
      experienceDescription={entry.getIn(['data', 'experienceDescription'])}
      practiceHeading={entry.getIn(['data', 'practiceHeading'])}
      practiceDescription={entry.getIn(['data', 'practiceDescription'])}
      testimonials={testimonials}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
