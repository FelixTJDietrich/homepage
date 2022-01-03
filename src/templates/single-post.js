import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, Link } from "gatsby";
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { slugify } from "../util/utilityFunctions";

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout pageTitle={post.title}>
      <Seo title={post.title}/>
      <Card>
        <GatsbyImage className="card-image-top" image={getImage(post.image)} style={{ width: "100%" }} imgStyle={{ objectFit: "cover" }}/>
        <CardBody>
          <CardSubtitle>
            <span className="text-info">{post.date}</span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          <ul className="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary">
                    {tag}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            gatsbyImageData(height: 200)
          }
        }
      }
    }
  }
`

export default SinglePost