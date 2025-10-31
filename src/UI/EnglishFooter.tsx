import { NavLink } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import Link from "./Link";

import { useRef } from "react";
import BankInfo from "./BankInfo";
import CopyButton from "./CopyButton";
import { BusinessInfo, ContactInfo, Copyrights, PhoneNumbers } from "./FooterBlocks";
import Signature from "./Signature";

export default function EnglishFooter() {
  const textRef = useRef<null | HTMLSpanElement>(null);
  const ibanRef = useRef<null | HTMLSpanElement>(null);

  return (
    <>
      <NavLink to="/#home-top" style={{ fontSize: "var(--md-text)" }}>
        {" "}
        &uarr; Back to the top of the page
      </NavLink>

      <FooterLinks>
        <ContactInfo>
          <PhoneNumbers>
            <div>
              <p>Phone Number:</p>
              <Link target="_blank" aria-label="Contact Phone Number" href="tel:966590669961+">
                +966590669961
              </Link>
            </div>
            <div>
              <p>Whatsapp:</p>
              <Link target="_blank" aria-label="Whatsapp Number" href="https://iwtsp.com/966590669961">
                +966590669961
              </Link>
            </div>
            <div>
              <p>WeeChat:</p>
              <p>+966558634415</p>
            </div>
          </PhoneNumbers>
          <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
            <p>Email Addresses:</p>
            <Link target="_blank" aria-label="Email Address" href="mailto:desertpathsagency@gmail.com">
              desertpathsagency@gmail.com
            </Link>
            <Link target="_blank" aria-label="Email Address" href="mailto:majinli@desertpaths.com.cn">
              majinli@desertpaths.com.cn
            </Link>
          </div>
        </ContactInfo>

        <BusinessInfo>
          <NavLink style={{ fontSize: "var(--md-text)" }} to="/our-policies" reloadDocument>Our Policies</NavLink>
          <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
            <p>The Head Office: Riyadh, Saudi Arabia</p>
            <p>Ministry of Tourism license number: 73104158</p>
            <p>Tax Number: 311547389200003</p>
            <p>Commercial Registration No: 1010858731</p>
            <p>Bank Name: Saudi National Bank</p>
            <BankInfo>
              <p>
                Account Name:<span ref={textRef}>Desert Paths Agency for Travel and Tourism</span>
              </p>
              <CopyButton copyRef={textRef} language="en"/>
            </BankInfo>
            <BankInfo>
              <p>
                Bank IBAN:<span ref={ibanRef}>SA7610000001400019612610</span>
              </p>
              <CopyButton copyRef={ibanRef} language="en"/>
            </BankInfo>
          </div>
        </BusinessInfo>
      </FooterLinks>
      <Copyrights style={{ textAlign: "center" }}>
        <p>All rights reserved to Desert Paths Agency for Travel And Tourism</p>
        <p>&copy; 2025</p>
      </Copyrights>
      <Signature />
    </>
  );
}
