import Hero from "./components/Hero.jsx";
import WorkshopGallery from "./components/WorkshopGallery.jsx";
import ReachOut from "./components/ReachOut.jsx";
import PreviousWorkshop from "./components/PreviousWorkshop.jsx";
import Gallery from "./components/Gallery.jsx";

export default function Workshop() {
  return (
    <div>
      <Hero />
      <WorkshopGallery />
      <ReachOut />
      <PreviousWorkshop />
      {/* <Gallery /> */}
    </div>
  );
}
