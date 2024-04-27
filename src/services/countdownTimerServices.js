import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

const cohortCountDowntimer = async () => {
  const query = gql`
    query CountdownTimer {
      countDownTimer(where: { id: "clvcfb34o05w207mhcrroo3wp" }) {
        countdowntimer
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.countDownTimer.countdowntimer;
  } catch (error) {
    console.error("Error fetching timer:", error);
  }
};

export default cohortCountDowntimer;
