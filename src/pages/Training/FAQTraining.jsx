import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import FAQComponent from "../../components/FAQ";
import FAQs from "../../repository/FAQ";

export default function FAQTraining() {
  return (
    <PageLayout>
      <FAQComponent FAQs={FAQs.FAQsOnTrainingPage} />
    </PageLayout>
  );
}
