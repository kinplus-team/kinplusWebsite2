import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

const getPost = async () => {
  const query = gql`
    query GetPost {
      posts {
        author {
          id
          name
          bio
        }
        id
        title
        slug
        createdAt
        excerpt
        featuredPost
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response;
  } catch (error) {
    console.error("Error fetching timer:", error);
  }
};

export default getPost;
