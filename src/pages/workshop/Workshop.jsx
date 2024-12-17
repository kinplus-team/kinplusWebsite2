import WorkshopGallery from "./components/WorkshopGallery.jsx";
import ReachOut from "./components/ReachOut.jsx";
import PreviousWorkshop from "./components/PreviousWorkshop.jsx";
import useDocumentTitle from "../../hooks/useDocumentTitle.jsx";
import HeroWorkshop from "./components/HeroWorkshop.jsx";

export default function Workshop() {
  useDocumentTitle("Workshop");
  return (
    <div className="overflow-x-hidden">
      <HeroWorkshop />
      <WorkshopGallery />
      <ReachOut />
      <PreviousWorkshop />
      {/* <Gallery /> */}
    </div>
  );
}
