import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const contactUsForTraining = async (
  fullName,
  email,
  phoneNumber,
  religion,
  dateOfBirth,
  gender,
  address,
  learningTrack,
  paymentPackage,
  availability
) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateTrainingContact(
      $fullName: String!
      $email: String!
      $phoneNumber: String!
      $religion: String!
      $dateOfBirth: String!
      $gender: String!
      $address: String!
      $learningTrack: String!
      $paymentPackage: String!
      $availability: String!
    ) {
      createTrainingContact(
        data: {
          fullName: $fullName
          email: $email
          phoneNumber: $phoneNumber
          religion: $religion
          dateOfBirth: $dateOfBirth
          gender: $gender
          address: $address
          learningTrack: $learningTrack
          paymentPackage: $paymentPackage
          availability: $availability
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
    religion,
    dateOfBirth,
    gender,
    address,
    learningTrack,
    paymentPackage,
    availability,
  });
  console.log("From server:",response)

  return response;
};

// export a default function for API route to work
export const contactUsForServices = async (
  fullName,
  email,
  phoneNumber,
  companyName,
  description
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
      $description: String!
    ) {
      createPartnersContact(
        data: {
          fullName: $fullName
          email: $email
          phoneNumber: $phoneNumber
          companyName: $companyName
          description: $description
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
    description,
  });

  return response;
};
