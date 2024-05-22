import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const submitResume = async (
  fullName,
  email,
  phoneNumber,
  jobRole,
  resume
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
      $resume: AssetCreateOneInlineInput!
    ) {
      createJobApplication(
        data: {
          fullName: $fullName
          email: $email
          phoneNumber: $phoneNumber
          jobRole: $jobRole
          resume: $resume
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
    resume,
  });

  return response;
};
