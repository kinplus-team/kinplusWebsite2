import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import PreviousWorkshop from "./components/PreviousWorkshop.jsx";
import WorkshopReport from "./components/WorkshopReport.jsx";

export default function WorkshopDetails() {
  return (
    <div>
      <Hero />
      <About />
      <WorkshopReport />
      <PreviousWorkshop />
    </div>
  );
}
