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
  availability,
  chooseYourCohort,
  // promoCode,
  promoStatus
) => {
  // CALL THE BACKEND API

  const response = await fetch("https://kinpluswebsite2.onrender.com/api/training/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
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
      chooseYourCohort,
      promoStatus,
    }),
  });

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
  const response = await fetch("https://kinpluswebsite2.onrender.com/api/services/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName,
      email,
      phoneNumber,
      companyName,
      description,
    }),
  });

  return response;
};
