import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../../styles/projects.module.css"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

export default function Projects( {data} ) {
    console.log(data);
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    
    return (
      <Layout>
      <div className={styles.portfolio}>
          <h2>Projects</h2>
          <h3>Projects & Websites I've created</h3>
          <div className={styles.projects}>
              {projects.map(project => (
                  
                      <div>
                      <GatsbyImage
                        image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
                        alt="not found" />
                          <h3>{ project.frontmatter.title }</h3>
                          <p>{ project.frontmatter.stack }</p>
                          <p className={styles.desc}>{ project.frontmatter.description }</p>
                      </div>
                  
              ))}
          </div>
          <p>Email me at { contact }</p>
      </div>
      </Layout>
    );
}

// export page query

export const query = graphql`query ProjectsPage {
  projects: allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
        description
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`