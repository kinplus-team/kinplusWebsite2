import DesktopViewCatalogue from "./DesktopView.jsx";
import MobileViewCatalogue from "./MobileView.jsx";

export default function Catalogue({
  title,
  catalouges,
  sidebarImage,
  isLinked,
}) {
  return (
    <div className="relative z-50">
      <div className="hidden lg:block ">
        <DesktopViewCatalogue
          title={title}
          catalogues={catalouges}
          isLinked={isLinked}
        />
      </div>

      <div className="lg:hidden block">
        <MobileViewCatalogue title={title} catalogues={catalouges} />
      </div>
    </div>
  );
}
