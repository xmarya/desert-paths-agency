import { FaGlobe, FaPeopleGroup, FaPlaneUp } from "react-icons/fa6";
import { List, ListItem } from "./ListAndListItem";
import { GiStarsStack } from "react-icons/gi";

export default function EnglishVision() {
  return (
    <List>
      <ListItem>
        <FaGlobe className="svg" />
        Adopting digital transformation to facilitate access to our tourism services.{" "}
      </ListItem>
      <ListItem>
        <FaPeopleGroup className="svg" />
        Developing national competencies and empowering youth in the tourism sector.{" "}
      </ListItem>

      <ListItem>
        <GiStarsStack className="svg" />
        Improving the quality of tourism services in line with the highest international standards.{" "}
      </ListItem>

      <ListItem>
        <FaPlaneUp className="svg" />
        Supporting domestic tourism and encouraging citizens and residents to discover the beauty of the Kingdom.{" "}
      </ListItem>
    </List>
  );
}
