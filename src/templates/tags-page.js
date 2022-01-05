import React from "react";
import { Badge, Button } from "reactstrap";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { slugify } from "../util/utilityFunctions";

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout>
      <Seo title="Topics" keywords={["tags", "topics"]}/>
      <h1>Topics</h1>
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px"}}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light" style={{ color: "black" }}>{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage