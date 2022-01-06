import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, Link } from "gatsby";
import { Card, CardBody, CardSubtitle, CardTitle, CardFooter, Badge } from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { slugify } from "../util/utilityFunctions";

import author from "../util/author";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { DiscussionEmbed } from "disqus-react";

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const file = data.markdownRemark.parent
  const baseUrl = "https://felixdietrich.com/"

  const disqusShortname = "felixtjdietrich"
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: baseUrl + pageContext.slug,
  }


  return (
    <Layout>
      <Seo title={post.title}/>
      <Card>
        <GatsbyImage className="card-image-top rounded-top" image={getImage(post.image)} style={{ width: "100%" }} imgStyle={{ objectFit: "cover" }}/>
        <CardBody>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {post.date}
          </CardSubtitle>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          <ul className="post-tags mb-0">
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
        <CardFooter className="text-muted">
          <small>
            Updated  {file.modifiedTime},&nbsp;
            <Link 
              href={`https://github.com/FelixTJDietrich/homepage/commits/main/${file.sourceInstanceName}/${file.relativePath}`}
              className="github"
              target="_blank" 
              rel="noopener noreferrer"
            >
              view changes on GitHub <FontAwesomeIcon icon={faGithub} fixedWidth/>
            </Link>
          </small>
          </CardFooter>
      </Card>

      <h3 className="text-center">
        Share this post
      </h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a 
              href={"https://www.facebook.com/sharer/sharer.php?u=" + baseUrl + pageContext.slug} 
              className="facebook" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" fixedWidth/>
            </a>
          </li>
          <li>
            <a 
              href={
                "https://www.twitter.com/share?url=" + 
                baseUrl + 
                pageContext.slug + 
                "&text=" + 
                post.title +
                "&via=" +
                author.handles.twitter
              } 
              className="twitter" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth/>
            </a>
          </li>
          <li>
            <a 
              href={
                "https://www.linkedin.com/shareArticle?url=" + 
                baseUrl + pageContext.slug
              } 
              className="linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth/>
            </a>
          </li>
        </ul>
      </div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
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
      parent {
        ... on File {
          relativePath
          sourceInstanceName
          modifiedTime(formatString: "MMM Do YYYY")
        }
      }
    }
  }
`

export default SinglePost