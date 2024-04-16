import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import FAQComponent from "../../components/FAQ";
import FAQs from "../../repository/FAQ";

export default function FAQ() {
  return (
    <PageLayout>
      <FAQComponent FAQs={FAQs} />
    </PageLayout>
  );
}
