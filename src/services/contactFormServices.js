import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

// export a default function for API route to work
export const contactUsForServices = async (
  fullName,
  email,
  phoneNumber,
  companyName,
  message
) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreatePartnersContact(
      $fullName: String!
      $email: String!
      $phoneNumber: String!
      $companyName: String!
      $message: String!
    ) {
      createPartnersContact(
        data: {
          fullName: $fullName
          email: $email
          phoneNumber: $phoneNumber
          companyName: $companyName
          message: $message
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
    companyName,
    message,
  });

  return response;
};
