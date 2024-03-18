import ItemTitle from "./Item-title";
import ItemImage from "./Item-Image";
import ItemDescription from "./Item-description";

const AboutMe = () => {
  return (
    <div className="about-me">
      <ItemTitle title="About Me" />
      <ItemImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&usqp=CAU"
        alt="Avatar"
      />
      <ItemDescription text="Ceci est une courte description, un peu trop courte pour un lorem ipsum complet" />
    </div>
  );
};

export default AboutMe;
