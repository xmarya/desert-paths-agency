import styled from "styled-components";

export const ContactInfo = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
`;

export const PhoneNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  @media (max-width: 25em) {
    // 600 /16
    align-items: center;
    justify-content: center;
  }
`;

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Copyrights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 5rem;
  p {
    font-size: 1.2rem;
  }
`;