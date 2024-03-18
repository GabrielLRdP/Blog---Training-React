import Item from "./Item";

const MainContent = () => {
  const lorem =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis veniam dolorem rerum corrupti animi, quis dolore fugiat quasi et consequatur rem inventore, amet distinctio sunt tempora debitis deleniti, explicabo cupiditate.";
  return (
    <div className="main-content">
      <Item
        title="Title Heading 1"
        subtitle="This is a subtitle"
        imgSrc="https://magazine.sportihome.com/wp-content/uploads/2021/02/montagne-ete-scaled.jpg"
        imgAlt="ceci est une image"
        text={lorem}
      />
      <Item
        title="Title Heading 1"
        subtitle="This is a subtitle"
        imgSrc="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/1/1/a/11a3b884f1_50170595_alpes-elevation.jpg"
        imgAlt="ceci est une image"
        text={lorem}
      />
    </div>
  );
};

export default MainContent;
