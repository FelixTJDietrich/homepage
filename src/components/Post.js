import React from 'react';
import { Link } from 'gatsby';
import { Badge } from 'reactstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { slugify } from '../util/utilityFunctions';

function Post({
  title, slug, date, body, tags, image, timeToRead,
}) {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static blog-post">
        <h3 className="mb-0">{title}</h3>
        <div className="mb-1 text-muted">{date}</div>
        <p className="card-text mb-2">{body}</p>
        <p className="mb-2 text-muted">
          <Link to={`/${slug}`} className="stretched-link">Continue reading</Link>
          {` · ${timeToRead} min read`}
        </p>
        <ul className="post-tags mb-0">
          {tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="btn text-uppercase mb-0 stretched-link" style={{ position: 'relative' }}>{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {image && (
      <div className="col-auto d-none d-lg-block" style={{ maxWidth: '50%' }}>
        <GatsbyImage image={getImage(image)} style={{ height: '100%' }} imgStyle={{ objectFit: 'cover' }} alt="" />
      </div>
      )}
    </div>
  );
}

export default Post;
