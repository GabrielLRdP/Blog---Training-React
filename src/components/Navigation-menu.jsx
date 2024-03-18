import Link from "./Link";

const NavigationMenu = (props) => {
  return (
    <nav className="navigation-menu">
      <div className="left-side-nav">
        <Link link="ceciestunlien" title="Lien1" />
        <Link link="ceciestunlien" title="Lien2" />
        <Link link="ceciestunlien" title="Lien3" />
      </div>
      <div className="right-side-nav">
        <Link link="ceciestunlien" title="Lien4" />
      </div>
    </nav>
  );
};

export default NavigationMenu;
