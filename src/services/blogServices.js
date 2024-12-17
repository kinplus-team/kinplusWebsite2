import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const getMostEngagedPost = async () => {
  const query = gql`
    query GetMostEngagedPost {
      articles(orderBy: publishedAt_ASC, first: 1) {
        title
        slug
        featuredImage {
          url
        }
        content {
          raw
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.articles;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};
export const getPost = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      articles {
        admin {
          bio
          id
          name
        }
        id
        title
        slug
        createdAt
        excerpt
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.articles;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPosts {
      articles(orderBy: publishedAt_ASC, last: 3) {
        title
        slug
        featuredImage {
          url
        }
        createdAt
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.articles;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getFeaturedPost = async () => {
  const query = gql`
    query GetFeaturedArticles {
      articles(where: { featuredPost: true }) {
        admin {
          bio
          id
          name
        }
        id
        title
        slug
        createdAt
        excerpt
        featuredImage {
          url
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.articles;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// export a default function for API route to work
export const submitComment = async (name, email, comment, slug) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const response = await graphQLClient.request(query, {
    name,
    email,
    comment,
    slug,
  });

  return response;
};
