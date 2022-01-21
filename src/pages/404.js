import * as React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

function NotFoundPage() {
  const browser = typeof window !== 'undefined' && window;

  return (
    browser && (
      <Layout>
        <Seo title="404: Page not found" />
        <div className="blog-post">
          <h1>Oops, something went wrong...</h1>
          <p className="text-muted">The page you are looking for could not be found.</p>
          <Link className="btn btn-primary text-uppercase mb-4" to="/">
            Go Back to Home
          </Link>
        </div>
      </Layout>
    )
  );
}

export default NotFoundPage;
