import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const submitResume = async (
  fullName,
  email,
  phoneNumber,
  jobRole,
  resumeUrl
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
    ) {
      createJobApplication(
        data: {
          fullName: $fullName
          email: $email
          phoneNumber: $phoneNumber
          jobRole: $jobRole
          resumeUrl: $resumeUrl
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
  });

  return response;
};
