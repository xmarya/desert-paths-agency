import Link from "../UI/Link";
import Logo from "../UI/Logo";
import Navigation, { List, ListItem } from "../UI/Navigation";
import StyledHeader from "../UI/StyledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <div>LANGUAGE</div>
      <Navigation>
        <List>
          <ListItem>
            <Link>تواصل معنا</Link>
          </ListItem>

          <ListItem>
            <Link>شركاءنا</Link>
          </ListItem>
          <ListItem>
            <Link>خدماتنا</Link>
          </ListItem>
          <ListItem>
            <Link>من نحن؟</Link>
          </ListItem>
        </List>
      </Navigation>
      <Logo />
    </StyledHeader>
  );
}
