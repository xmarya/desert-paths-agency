import { SectionHeading } from "./Headings";
import { List, ListItem } from "./ListAndListItem";
import { FaHandshake, FaDollarSign } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
export default function ArabicWhyUs() {
  return (
    <>
      <SectionHeading>لماذا وكالة مسارات الصحراء؟</SectionHeading>
      <List>
        <ListItem>
          <FaHandshake className="svg" />
          <p>المصداقية</p>
        </ListItem>
        <ListItem>
          <IoIosSpeedometer className="svg" />
          <p>سرعة الإنجاز</p>
        </ListItem>
        <ListItem>
          <FaDollarSign className="svg" />
          <p>أسعار تنافسية</p>
        </ListItem>
        <ListItem>
          <GiTeamIdea className="svg" />
          <p>فريق محترف و إبداعي</p>
        </ListItem>
      </List>
    </>
  );
}
