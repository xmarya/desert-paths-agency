import styled from "styled-components";
import { SectionHeading } from "../UI/Headings";
import Link from "../UI/Link";
import NestedUl from "../UI/NestedUl";

const Contents = styled.section`
  direction: ltr;
  min-height: 100svh;
  background-color: var(--colour-highlight-background);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--contents-gap);
  padding: 2rem 4rem;
  margin-inline: 2rem;
  border-radius: var(--sm-radius);

  > * {
    width: 100%;
  }

  ${SectionHeading} {
    color: var(--colour-primary-dark-brown);
  }
  h5 {
    color: var(--colour-primary-dark-brown);
    font-size: var(--lg-text);
    font-weight: 800;
    font-family: var(--font-paragraph);
    text-align: start;
  }

  p {
    text-align: start !important;
    font-size: var(--xl-text);
    margin-top: 2.5rem;
    max-width: 75ch;
  }
  ul {
    font-family: var(--font-paragraph);
    font-size: var(--md-text);
    font-weight: 600;
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  @media (max-width: 28em) {
    // 370 /16
    padding: 1rem 2rem;
    margin-inline: 1rem;
  }
`;

export default function EnglishOurPolicies() {
  return (
    <Contents>
      <SectionHeading>Our Policies</SectionHeading>
      <p>
        At Desert Paths Travel and Tourism Agency, we are committed to providing a comfortable and safe booking experience for our clients, with full compliance with the regulations and instructions
        issued by the Ministry of Tourism in the Kingdom of Saudi Arabia.{" "}
      </p>
      <div>
        <h5>Booking policy:</h5>
        <ul>
          <li>
            The booking process is done through the official channels of the institution:{" "}
            <NestedUl>
              <li>Official website</li>
              <li>
                Email Address:
                <Link href="mailto:Finance@desertpathsagency.com" style={{ textDecoration: "underline" }}>
                  Finance@desertpathsagency.com
                </Link>
              </li>
              <li>Unified number: [0599009252]</li>
            </NestedUl>
          </li>

          <li>The booking is confirmed after receiving the required amount or advance payment, depending on the type of service.</li>
          <li>Prices include government taxes and administrative fees unless otherwise stated.</li>
          <li>The booking confirmation is sent to the customer via email or text message.</li>
        </ul>
      </div>

      <div>
        <h5>Cancellation policy:</h5>
        <ul>
          <li>
            The customer has the right to cancel the booking within the period specified in the terms of service before the execution date, and cancellation fees may be applied depending on the type
            of booking.
          </li>
          <li>If the cancellation is due to unforeseen circumstances or circumstances beyond the customer's control, the full amount paid will be refunded to the customer.</li>
          <li>Reservations can be modified by prior coordination with customer service, subject to availability.</li>
        </ul>
      </div>
    </Contents>
  );
}
