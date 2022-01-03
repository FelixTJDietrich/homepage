import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, slug, date, body, tags, image }) => {
  return (
    <Card>
      <Link to={slug}>
        <GatsbyImage className="card-image-top" image={image} style={{ width: "100%" }} imgStyle={{ objectFit: "cover" }}/>
      </Link>
      <CardBody>
        <CardTitle><Link to={slug}>{title}</Link></CardTitle>
        <CardSubtitle><span className="test-info">{date}</span></CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`tag/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-outline-primary float-right">Read more</Link>
      </CardBody>
    </Card>
  )
}

export default Post;