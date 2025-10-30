import { NavLink } from "react-router-dom";
import { List, ListItem } from "./ListAndListItem";

export default function ArabicNavigation() {
  return (
    <>
      <List>
        <ListItem>
          <NavLink to="/#who-we-are">من نحن؟</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/#our-services">خدماتنا</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/#our-partnerships">شركاءنا</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/#contact-us">تواصل معنا</NavLink>
        </ListItem>
      </List>
    </>
  );
}
