import { Image } from "semantic-ui-react";

const Symbol = ({ props }) => {
  const getSymbol = () => {
    switch (props) {
      case "Aries":
        return "src/imgs/south_node.svg";
      case "Taurus":
        return "../imgs/taurus.svg";
      case "Gemini":
        return "../imgs/gemini.svg";
      case "Cancer":
        return "../imgs/cancer.svg";
      case "Leo":
        return "../imgs/leo.svg";
      case "Virgo":
        return "../imgs/virgo.svg";
      case "Libra":
        return "../imgs/libra.svg";
      case "Scorpio":
        return "../imgs/scorpoi.svg";
      case "Sagittarius":
        return "../imgs/sagittarius.svg";
      case "Capricorn":
        return "../imgs/capricorn.svg";
      case "Aquarius":
        return "../imgs/aquarius.svg";
      case "Pisces":
        return "../imgs/pisces.svg";
      case "Earth":
        return "../imgs/earth.svg";
      case "Sun":
        return "../imgs/sun.svg";
      case "Mercury":
        return "../imgs/mercury.svg";
      case "Venus":
        return "src/imgs/south_node.svg";
      case "Mars":
        return "../imgs/mars.svg";
      case "Jupiter":
        return "../imgs/jupiter.svg";
      case "Saturn":
        return "../imgs/saturn.svg";
      case "Uranus":
        return "../imgs/uranus.svg";
      case "Neptune":
        return "../imgs/neptune.svg";
      case "Pluto":
        return "../imgs/pluto.svg";
      case "Chiron":
        return "../imgs/chiron.svg";
      case "North Node":
        return "../imgs/northNode.svg";
      case "South Node":
        return "../imgs/southNode.svg";
      default:
        return null;
    }
  };

  console.log("Symbol: ", getSymbol(props));

  return <img className={props} src={getSymbol(props)} size="small" />;
};

export default Symbol;
