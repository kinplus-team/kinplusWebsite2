import CareerOpportunity from "./component/CareerOpportunity.jsx";
import ApplyForRole from "./component/ApplyForRole.jsx";
import useDocumentTitle from "../../hooks/useDocumentTitle.jsx";
import HeroCareers from "./component/HeroCareers.jsx";

export default function Career() {
  useDocumentTitle("Carrers")
  return (
    <div className="overflow-hidden">
      <HeroCareers />
      <CareerOpportunity />
      <ApplyForRole />
    </div>
  );
}
