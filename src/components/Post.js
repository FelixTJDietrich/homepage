import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

import { GatsbyImage } from "gatsby-plugin-image"

const Post = ({ title, path, date, body, image }) => {
  return (
    <Card>
      <Link to={path}>
        <GatsbyImage className="card-image-top" image={image} />
      </Link>
      <CardBody>
        <CardTitle><Link to={path}>{title}</Link></CardTitle>
        <CardSubtitle><span className="test-info">{date}</span></CardSubtitle>
        <CardText>{body}</CardText>
        <Link to={path} className="btn btn-outline-primary float-right">Read more</Link>
      </CardBody>
    </Card>
  )
}

export default Post;