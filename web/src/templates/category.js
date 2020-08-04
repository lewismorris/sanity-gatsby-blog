import React from "react";
import { graphql } from "gatsby";

import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      posts {
        id
        publishedAt
        mainImage {
          ...SanityImage
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
      id
      description
      title
      slug {
        current
      }
    }
  }
`;

const Category = (props) => {
  const { data, erors } = props;
  const category = data && data.category;

  return (
    <Layout>
      <SEO title="Category" />
      <Container>
        <h1>{category.title}</h1>
        {category.posts && category.posts.length > 0 ? (
          <BlogPostPreviewGrid nodes={category.posts} />
        ) : null}
      </Container>
    </Layout>
  );
};

export default Category;
