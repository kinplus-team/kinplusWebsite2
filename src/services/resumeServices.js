import { GraphQLClient, request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const submitResume = async (
  fullName,
  email,
  phoneNumber,
  jobRole,
  resumeUrl,
  portfolioLink
) => {
  const response = await fetch("https://kinpluswebsite2.onrender.com/api/resume/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName,
      email,
      phoneNumber,
      jobRole,
      resumeUrl,
      portfolioLink,
    }),
  });

  return response;
};
