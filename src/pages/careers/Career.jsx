import CareerOpportunity from "./component/CareerOpportunity.jsx";
import JoinOurTeam from "./component/JoinOurTeam.jsx";
import Hero from "./component/Hero.jsx";
import ApplyForRole from "./component/ApplyForRole.jsx";
import useDocumentTitle from "../../hooks/useDocumentTitle.jsx";

export default function Career() {
  useDocumentTitle("Carrers")
  return (
    <div>
      <Hero />
      <CareerOpportunity />
      <ApplyForRole />
    </div>
  );
}
