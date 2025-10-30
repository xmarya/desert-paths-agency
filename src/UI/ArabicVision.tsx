import { FaGlobe, FaPeopleGroup, FaPlaneUp } from "react-icons/fa6";
import { List, ListItem } from "./ListAndListItem";
import { GiStarsStack } from "react-icons/gi";

export default function ArabicVision() {
    return (
        <List>
            <ListItem>
              <FaPlaneUp className="svg" />
              دعم السياحة الداخلية وتشجيع المواطنين والمقيمين على اكتشاف جمال المملكة.
            </ListItem>
            <ListItem>
              <GiStarsStack className="svg" />
              رفع جودة الخدمات السياحية بما يتماشى مع أعلى المعايير العالمية.
            </ListItem>
            <ListItem>
              <FaPeopleGroup className="svg" />
              تطوير الكفاءات الوطنية وتمكين الشباب في قطاع السياحة.
            </ListItem>
            <ListItem>
              <FaGlobe className="svg" />
              اعتماد التحول الرقمي لتسهيل الوصول إلى خدماتنا السياحية.
            </ListItem>
          </List>
    )
}

