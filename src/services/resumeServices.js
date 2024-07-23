import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const submitResume = async (
  fullName,
  email,
  phoneNumber,
  jobRole,
  resumeUrl,
  portfolioLink
) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateJobApplication(
      $fullName: String!
      $email: String!
      $phoneNumber: String!
      $jobRole: String!
      $resumeUrl: String!
      $portfolioLink: String!
    ) {
      createJobApplication(
        data: {
          fullName: $fullName
          email: $email
          phoneNumber: $phoneNumber
          jobRole: $jobRole
          resumeUrl: $resumeUrl
          portfolioLink: $portfolioLink
        }
      ) {
        id
      }
    }
  `;

  const response = await graphQLClient.request(query, {
    fullName,
    email,
    phoneNumber,
    jobRole,
    resumeUrl,
    portfolioLink,
  });

  return response;
};
