import { SectionHeading } from "./Headings";
import { List, ListItem } from "./ListAndListItem";
import { FaHandshake, FaDollarSign } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
export default function EnglishWhyUs() {
  return (
    <>
      <SectionHeading>Why Desert Trails Agency?</SectionHeading>
      <List>
        <ListItem>
          <FaHandshake className="svg" />
          <p>Credibility</p>
        </ListItem>

        <ListItem>
          <IoIosSpeedometer className="svg" />
          <p>Speed in work</p>
        </ListItem>

        <ListItem>
          <FaDollarSign className="svg" />
          <p>Competitive prices</p>
        </ListItem>

        <ListItem>
          <GiTeamIdea className="svg" />
          <p>Professional and creative team</p>
        </ListItem>
      </List>
    </>
  );
}
