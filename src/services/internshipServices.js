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
  try {
    const response = await fetch(
      "https://kinpluswebsite2backend.onrender.com/api/it-and-siwes/apply",
      {
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
          institutionName,
          courseOfStudy,
          duration,
          startDate,
          endDate,
          anyHealthChallenges,
          healthChallengesDescription,
        }),
      }
    );

    return response;
  } catch (error) {
    console.error("Error occurred while applying for SIWES:", error);
    throw new Error("Failed to apply for SIWES. Please try again later.");
  }
};
