import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

const courses = async () => {
  const query = gql`
    query MyQuery {
      courses {
        title
        slug
        description
        mediumPaymentPackage
        proPaymentPackage
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.courses;
  } catch (error) {
    console.error("Error fetching timer:", error);
  }
};

export default courses;
