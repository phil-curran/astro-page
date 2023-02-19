import "./styles/hermetica.css";
import "./styles/symbol.css";

const Symbol = ({ props }) => {
  const getSymbol = (props) => {
    switch (props) {
      case "Aries":
        return "aries";
      case "Taurus":
        return "taurus";
      case "Gemini":
        return "gemini";
      case "Cancer":
        return "cancer";
      case "Leo":
        return "leo";
      case "Virgo":
        return "virgo";
      case "Libra":
        return "libra";
      case "Scorpio":
        return "scorpio";
      case "Sagittarius":
        return "sagittarius";
      case "Capricorn":
        return "capricorn";
      case "Aquarius":
        return "aquarius";
      case "Pisces":
        return "pisces";
      case "Earth":
        return "earth";
      case "Moon":
        return "moon";
      case "Sun":
        return "sun";
      case "Mercury":
        return "mercury";
      case "Venus":
        return "venus";
      case "Mars":
        return "mars";
      case "Jupiter":
        return "jupiter";
      case "Saturn":
        return "saturn";
      case "Uranus":
        return "uranus";
      case "Neptune":
        return "neptune";
      case "Pluto":
        return "pluto";
      case "Chiron":
        return "chiron";
      case "NorthNode":
        return "north_node";
      case "SouthNode":
        return "south_node";
      default:
        return null;
    }
  };

  return <span className={getSymbol(props)}></span>;
};

export default Symbol;
