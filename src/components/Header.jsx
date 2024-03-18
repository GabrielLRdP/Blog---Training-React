import Baseline from "./Baseline";
import Title from "./title";

const Header = (props) => {
  return (
    <header>
      <Title content={props.title} />
      <Baseline content={props.baseline} />
    </header>
  );
};

export default Header;
