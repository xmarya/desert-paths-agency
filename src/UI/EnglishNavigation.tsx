import { NavLink } from "react-router-dom";
import { List, ListItem } from "./ListAndListItem";

export default function EnglishNavigation() {
  return (
    <>
      <List>
        <ListItem>
          <NavLink to="/#contact-us">Contact us</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/#our-partnerships">Our Partnerships</NavLink>
        </ListItem>
        
        <ListItem>
          <NavLink to="/#our-services">Our Services</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/#who-we-are">?Who We Are</NavLink>
        </ListItem>
      </List>
    </>
  );
}
