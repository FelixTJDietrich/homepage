import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from "reactstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, slug, date, body, tags, image }) => {
  return (
    <Card>
      <Link to={`/${slug}`}>
        <GatsbyImage className="card-image-top rounded-top" image={getImage(image)} style={{ width: "100%" }} imgStyle={{ objectFit: "cover" }}/>
      </Link>
      <CardBody>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {date}
        </CardSubtitle>
        <CardTitle tag="h5">
          <Link to={`/${slug}`} style={{color: "rgb(40, 40, 40)"}}>{title}</Link>
        </CardTitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="btn text-uppercase">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/${slug}`} className="btn btn-outline-primary float-right">Read more</Link>
      </CardBody>
    </Card>
  )
}

export default Post;