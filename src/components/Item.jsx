import ItemTitle from "./Item-title";
import ItemSubTitle from "./Item-subtitle";
import ItemImage from "./Item-Image";
import ItemDescription from "./Item-description";

const Item = (props) => {
  return (
    <div className="item">
      <ItemTitle title={props.title} />
      <ItemSubTitle title={props.subtitle} />
      <ItemImage src={props.imgSrc} alt={props.imgAlt} />
      <ItemDescription text={props.text} />
    </div>
  );
};
export default Item;
