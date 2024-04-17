import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import FAQComponent from "../../components/FAQ";

export default function FAQ() {
  const FAQs = [
    {
      question: "Outside of Ado–Ekiti, where else can I get in contact with Kinplus Technologies?",
    },
    {
      question: "Can I repair my laptop at Kinplus Technologies?",
    },
    {
      question:
        "Can I observe my IT/SIWES at Kinplus?",
    },
    {
      question:
        "What training tracks are on offer for IT/SIWES?",
    },
    {
      question:
        "Is IT/SIWES at Kinplus Technologies open to only students of tertiary institutions in Ekiti State?",
    },
    {
      question:
        "Can I enroll in two training tracks for my IT/SIWES?",
    },
    {
      question:
        "Do I need to have experience on my preferred training track before I can observe my IT/SIWES at Kinplus Technologies?",
    },
    {
      question:
        "What training tracks are available in the Academy training category?",
    },
  ];

  return (
    <PageLayout>
      <FAQComponent FAQs={FAQs} />
    </PageLayout>
  );
}
