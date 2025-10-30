import styled from "styled-components";
import Link from "./Link";

const FooterLinks = styled.div`
  container-type: inline-size;

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-block: 1.8rem;

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: calc(100% / 2);
  }
  ${Link}, p {
    display: block;
    font-size: var(--md-text);
    margin-bottom: 1rem;
  }
`;

export default FooterLinks;