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
  const response = await fetch("https://kinpluswebsite2backend.onrender.com/api/partnership", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
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
    }),
  });

  return response;
};
