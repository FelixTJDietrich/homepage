import * as React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>Oops, something went wrong...</h1>
      <Link className="btn btn-primary text-uppercase" to="/">
        Go home
      </Link>
    </Layout>
  );
}

export default NotFoundPage;
