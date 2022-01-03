import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Sidebar from "../components/Sidebar";
import { graphql, Link } from "gatsby";
import { Row, Col, Card, CardBody, CardSubtitle, Badge } from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { slugify } from "../util/utilityFunctions";

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo title={post.title}/>
      <h1>{post.title}</h1>
      <Row>
        <Col md="8">
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
        </Col>
        <Col md="4">
          <Sidebar/>
        </Col>
      </Row>
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