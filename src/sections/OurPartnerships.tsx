import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import styled from "styled-components";
import { SectionHeading } from "../UI/Headings";
import partnerships from "../data/partnerships";
import { FaGlobe } from "react-icons/fa6";
import Link from "../UI/Link";
import dictionary from "../dictionary/dictionary";

const Contents = styled.section`
  --col-min-width: 42rem;
  text-align: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--col-min-width), 100%), 1fr));
  justify-content: center; */
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 4rem;

  p {
    margin-top: var(--contents-gap);
  }
`;

const PartnersWrapper = styled.div``;
const PartnersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  align-items: stretch;
  align-content: center;
  justify-content: center;
  row-gap: 1.8rem;
  margin-top: 5rem;
  h5 {
    grid-column: 1 / -1;
    font-size: var(--lg-text);
    margin-bottom: 1.8rem;
  }

  h6 {
    color: var(--colour-secondary-text);
    font-size: var(--md-text);
  }

  @media (max-width: 30em) {
    // 780 / 16
    grid-template-columns: repeat(auto-fit, 15rem);
  }
`;

const Hotel = styled.li`
  font-family: var(--font-paragraph);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 7rem;
  align-items: stretch;
  justify-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const TransportationCompany = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const HotelLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  fill: var(--colour-accent-dark-green);

  ${Link} {
    color: var(--colour-accent-dark-green);
    transition: all 0.3s ease;
    &:hover {
      color: var(--colour-accent-light-green);
    }
  }
`;

export default function OurPartnerships({ language }: { language: "ar" | "en" }) {
  const {
    partners: { mainHeading, paragraph, hotels, transports },
  } = dictionary[language];
  return (
    <Contents id="our-partnerships" style={{ ...(language === "en" && { direction: "ltr" }) }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SectionHeading>{mainHeading}</SectionHeading>
        <p style={{ alignSelf: "center", color: "var(--colour-primary-dark-brown)" }}>{paragraph}</p>
      </div>

      <PartnersWrapper>
        <PartnersList>
          <h5>{hotels}</h5>
          {partnerships.map(({ Logo, name, location, website, socialMedia }, index) => (
            <Hotel key={index}>
              <Logo />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
                <h6>{name[language]}</h6>
                <HotelLinks>
                  {website && (
                    <li>
                      <Link href={website[language]} target="_blank">
                        <FaGlobe className="svg" />
                      </Link>
                    </li>
                  )}
                  {location && (
                    <li>
                      <Link href={location} target="_blank">
                        <IoMdPin className="svg" />
                      </Link>
                    </li>
                  )}

                  {socialMedia?.instagram && (
                    <li>
                      <Link href={socialMedia.instagram} target="_blank">
                        <BsInstagram className="svg" />
                      </Link>
                    </li>
                  )}
                  {socialMedia?.twitter && (
                    <li>
                      <Link href={socialMedia.twitter} target="_blank">
                        <FaXTwitter className="svg" />
                      </Link>
                    </li>
                  )}
                </HotelLinks>
              </div>
            </Hotel>
          ))}
        </PartnersList>

        {language === "ar" && (
          <PartnersList>
            <h5>{transports}</h5>
            <TransportationCompany>
              <h6>معرض صقر العروبة للسيارات</h6>
              <h6>مؤسسة أزهري للنقليات</h6>
              <h6>شركة فهد الغامدي للنقل</h6>
            </TransportationCompany>
          </PartnersList>
        )}
      </PartnersWrapper>
    </Contents>
  );
}
