import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

// export a default function for API route to work
export const PartnerOrSponsorUs = async (
  fullName,
  email,
  amount,
  phoneNumber,
  currentAddress,
  organizationName,
  organizationAddress,
  organizationWebsite,
  partnershipType,
  comment
) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreatePartnerWithUs(
      $fullName: String!
      $email: String!
      $amount: String!
      $phoneNumber: String!
      $currentAddress: String!
      $organizationName: String!
      $organizationAddress: String!
      $organizationWebsite: String!
      $partnershipType: String!
      $comment: String!
    ) {
      createPartnerWithUs(
        data: {
          fullName: $fullName
          email: $email
          amount: $amount
          phoneNumber: $phoneNumber
          currentAddress: $currentAddress
          organizationName: $organizationName
          organizationAddress: $organizationAddress
          organizationWebsite: $organizationWebsite
          partnershipType: $partnershipType
          comment: $comment
        }
      ) {
        id
      }
    }
  `;

  const response = await graphQLClient.request(query, {
    fullName,
    email,
    amount,
    phoneNumber,
    currentAddress,
    organizationName,
    organizationAddress,
    organizationWebsite,
    partnershipType,
    comment,
  });

  return response;
};
