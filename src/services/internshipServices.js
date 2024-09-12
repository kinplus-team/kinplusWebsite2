import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const ApplyForSIWES = async (
  fullName,
  email,
  phoneNumber,
  religion,
  dateOfBirth,
  gender,
  address,
  institutionName,
  courseOfStudy,
  duration,
  startDate,
  endDate,
  anyHealthChallenges,
  healthChallengesDescription
) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateSiwesContact(
      $fullName: String!
      $email: String!
      $phoneNumber: String!
      $religion: String!
      $dateOfBirth: String!
      $gender: String!
      $address: String!
      $institutionName: String!
      $courseOfStudy: String!
      $duration: String!
      $startDate: String!
      $endDate: String!
      $anyHealthChallenges: String!
      $healthChallengesDescription: String!
    ) {
      createSiwesContact(
        data: {
          fullName: $fullName
          email: $email
          phoneNumber: $phoneNumber
          religion: $religion
          dateOfBirth: $dateOfBirth
          gender: $gender
          address: $address
          institutionName: $institutionName
          courseOfStudy: $courseOfStudy
          duration: $duration
          startDate: $startDate
          endDate: $endDate
          anyHealthChallenges: $anyHealthChallenges
          healthChallengesDescription: $healthChallengesDescription
        }
      ) {
        id
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query, {
      fullName,
      email,
      phoneNumber,
      religion,
      dateOfBirth,
      gender,
      address,
      institutionName,
      courseOfStudy,
      duration,
      startDate,
      endDate,
      anyHealthChallenges,
      healthChallengesDescription,
    });

    return response;
  } catch (error) {
    console.error('Error occurred while applying for SIWES:', error);
    throw new Error('Failed to apply for SIWES. Please try again later.');
  }
};
