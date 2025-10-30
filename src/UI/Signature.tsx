import styled from "styled-components";
import { Divider } from "./Divider";
import Link from "./Link";

const StyledSignature = styled.div`
  grid-column: 1/-1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--xsm-text);

  p {
    font-size: var(--sm-text);
  }
`;

export default function Signature() {
  return (
    <StyledSignature>
        <Divider $type="horizontal" />
        <p>
          built by:{" "}
          <Link target="_blank" aria-label="built by" href="https://marya-alharbi.com">
            Marya for Full-stack web development.
          </Link>
        </p>
    </StyledSignature>
  )
}

