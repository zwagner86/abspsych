import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      missionHeading={frontmatter.missionHeading}
      missionDescription={frontmatter.missionDescription}
      serviceHeading={frontmatter.serviceHeading}
      serviceDescription={frontmatter.serviceDescription}
      serviceOfferings={frontmatter.serviceOfferings}
      experienceHeading={frontmatter.experienceHeading}
      experienceDescription={frontmatter.experienceDescription}
      practiceHeading={frontmatter.practiceHeading}
      practiceDescription={frontmatter.practiceDescription}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        missionHeading
        missionDescription
        serviceHeading
        serviceDescription
        serviceOfferings {
          blurbs {
            image
            text
          }
        }
        experienceHeading
        experienceDescription
        practiceHeading
        practiceDescription
        testimonials {
          author
          quote
        }
      }
    }
  }
`
