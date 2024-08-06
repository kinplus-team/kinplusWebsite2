import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

const cohortCountDowntimer = async () => {
  const query = gql`
    query cohortCountDownTimer {
      nextCohortTime(where: { id: "clvkz4jfs00z507mkr6rcplj3" }) {
        nextCohortBegins
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.nextCohortTime.nextCohortBegins;
  } catch (error) {
    console.error("Error fetching timer:", error);
  }
};

export default cohortCountDowntimer;
