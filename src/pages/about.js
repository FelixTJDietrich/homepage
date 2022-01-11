import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { 
  Card, 
  CardTitle, 
  CardText, 
  CardSubtitle, 
  CardBody,
} from "reactstrap"
import { Link } from "gatsby"

import author from "../util/author";

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Card className="mb-2">
      <CardBody>
        <CardTitle tag="h3">
          Hey 👋 I'm Felix T.J. Dietrich 
        </CardTitle>
        <CardSubtitle className="mb-1 text-muted">
          M.Sc. Informatics student at Technical University of Munich. 
        </CardSubtitle>
        <CardText>
          Welcome to my website where I try to share my thoughts, interests, and things I care about. 
        </CardText>
      </CardBody>
    </Card>
    <Card className="mb-2">
      <CardBody>
        <CardTitle tag="h5">
          How I like being called
        </CardTitle>
        <CardText>
          I like being called by the initials of my middle names T.J., however you may want to pronounce it.
        </CardText>
        <CardText>
          I also don't mind Felix.
        </CardText>
      </CardBody>
    </Card>
    <Card className="mb-2">
      <CardBody>
        <CardTitle tag="h5">
          Interests or things I care about
        </CardTitle>
        <CardSubtitle className="mb-1 text-muted">
          This list is neither exhaustive nor ordered. My interests change and fluctuate constantly.
        </CardSubtitle>
        <CardText>
          mental health. self-improvement. compassion. being free, open minded, and non-judgemental. behavior. emotions. emotional intelligence. decreasing (unhealthy) shame. overcoming biases. decreasing (harmful) ignorance. productivity. money. work-life-balance. blogging. machine learning. natural language processing. computer vision. iOS development. web development. UI/UX. internet. technology. languages. Japanese. Japan. long hair. spaceflight. travelling. different cultures. people. toxic masculinity. identity. sexuality. self-expression. acceptance. being more social. social skills. peace. 
        </CardText>
      </CardBody>
    </Card>
    <Card className="mb-2">
      <CardBody>
        <CardTitle tag="h5">
          Why this blog?
        </CardTitle>
        <CardText>
          I want to win friends and influence people. Also self-expression, I used to suppress myself instead of expressing myself. Starting this blog will be the next major step in my journey.
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          Feedback or thoughts?
        </CardTitle>
        <CardText>
          Feel free to <Link href={"mailto:" + author.email} target="_blank" rel="noopener noreferrer" className="email">contact me</Link> with feedback, constructive criticism, or thoughts. I will try to respond.
        </CardText>
      </CardBody>
    </Card>
  </Layout>
)

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

export default AboutPage
