import DesktopViewCatalogue from "./DesktopView.jsx";
import MobileViewCatalogue from "./MobileView.jsx";

export default function Catalogue({ title, catalouges }) {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopViewCatalogue title={title} catalogues={catalouges} />
      </div>

      <div className="lg:hidden block">
        <MobileViewCatalogue title={title} catalogues={catalouges} />
      </div>
    </div>
  );
}
