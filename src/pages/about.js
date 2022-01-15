import * as React from 'react';

import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

import author from '../util/author';

function AboutPage() {
  return (
    <Layout>
      <Seo title="About" />
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle tag="h3">
            Hi! 👋 I&apos;m Felix, also called T.J.
          </CardTitle>
          <CardSubtitle className="mb-1 text-muted">
            {author.bio}
          </CardSubtitle>
          <CardText>
            Welcome to my website where I try to share my thoughts,
            interests, and things I care about.
          </CardText>
        </CardBody>
      </Card>
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle tag="h5">
            How I like being called
          </CardTitle>
          <CardText>
            I usually like being called by the initials of my middle names T.J.,
            however you may want to pronounce it.
          </CardText>
          <CardText>
            I also don&apos;t mind Felix.
          </CardText>
        </CardBody>
      </Card>
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle tag="h5">
            Interests or things I care about
          </CardTitle>
          <CardSubtitle className="mb-1 text-muted">
            This list is neither exhaustive nor ordered.
            My interests change and fluctuate constantly.
          </CardSubtitle>
          <CardText>
            mental health. self-improvement. compassion.
            being free, open minded, and non-judgemental. behavior. emotions.
            emotional intelligence. decreasing (unhealthy) shame. overcoming biases.
            decreasing (harmful) ignorance. productivity. money. work-life-balance.
            blogging. machine learning. natural language processing. computer vision.
            iOS development. web development. UI/UX. internet. technology. languages.
            Japanese. Japan. long hair. spaceflight. travelling. different cultures.
            people. toxic masculinity. identity. sexuality. self-expression.
            acceptance. being more social. social skills. peace.
          </CardText>
        </CardBody>
      </Card>
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle tag="h5">
            Why this blog?
          </CardTitle>
          <CardText>
            The main reason is self-improvement and me wanting to show my work.
            There is also a more detailed blog post outlining my motivations:
            {' '}
            <Link to="/post/about-this-blog">
              Why I want to start a blog
            </Link>
            .
          </CardText>
        </CardBody>
      </Card>
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle tag="h5">
            Feedback or thoughts?
          </CardTitle>
          <CardText>
            Feel free to
            {' '}
            <Link href={`mailto:${author.email}`} target="_blank" rel="noopener noreferrer" className="email">contact me</Link>
            {' '}
            with feedback, constructive criticism, or thoughts. I will try to respond.
          </CardText>
        </CardBody>
      </Card>
    </Layout>
  );
}

/*
Might add my CV in the future...

<Card>
  <CardBody>
    <CardTitle tag="h5">
      Curriculum vitae
    </CardTitle>
    <CardText>
    Are you interested in my CV? Feel free to download the pdf or check it out on&nbsp;
    <Link href={"https://www.linkedin.com/in/" + author.handles.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</Link>.
    </CardText>
    // Link to cv.pdf generated with latex inside my github
  </CardBody>
</Card>
*/

export default AboutPage;
