import styled from "styled-components"

const StyledLogo = styled.div`
    border: var(--check);
    border-color: goldenrod;
`;
export default function Logo() {
    return (
        <StyledLogo>
            <h2>logo</h2>
        </StyledLogo>
    )
}

