import React from "react";
import FAQComponent from "../../../components/FAQ";
import FAQs from "../../../repository/FAQ";

export default function FAQ() {
  return (
    <div className="lg:px-[30px] bg-[#f1f3f9] px-4 max-w-[93rem] mx-auto pt-16">
      <FAQComponent FAQs={FAQs.FAQsOnHomePage} />
    </div>
  );
}
