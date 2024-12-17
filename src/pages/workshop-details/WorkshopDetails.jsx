import WorkshopReportDetails from "./components/WorkshopReportDetails.jsx";
import AboutWorkshopDetails from "./components/AboutWorkshopDetails.jsx";
import HeroWorkshopDetails from "./components/HeroWorkshopDetails.jsx";

export default function WorkshopDetails() {
  return (
    <div className="overflow-x-hidden">
      <HeroWorkshopDetails />
      <AboutWorkshopDetails />
      <WorkshopReportDetails />
      {/* <PreviousWorkshop /> */}
    </div>
  );
}
