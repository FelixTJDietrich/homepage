import React from "react";
import { Badge } from "reactstrap";
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
            <Badge color="primary" className="text-uppercase" href={`/tag/${slugify(tag)}`}>
              {tag + " (" +  tagPostCounts[tag] + ")"}
            </Badge>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage