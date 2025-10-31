import { useRef } from "react";
import BankInfo from "./BankInfo";
import CopyButton from "./CopyButton";
import { BusinessInfo, ContactInfo, Copyrights, PhoneNumbers } from "./FooterBlocks";
import FooterLinks from "./FooterLinks";
import Link from "./Link";
import { NavLink, Link as PageLink } from "react-router-dom";

import Signature from "./Signature";

export default function ArabicFooter() {
  const textRef = useRef<null | HTMLSpanElement>(null);
  const ibanRef = useRef<null | HTMLSpanElement>(null);
  return (
    <>
      <NavLink to="/#home-top" style={{ fontSize: "var(--md-text)" }}>
        {" "}
        &uarr; العودة لأعلى السفحة
      </NavLink>

      <FooterLinks>
        <BusinessInfo>
          <PageLink style={{ fontSize: "var(--md-text)" }} to="/our-policies" reloadDocument>سياسة الحجز والإلغاء</PageLink>
          <div>
            <p>المركز الرئيسي: الرياض ، المملكة العربية السعودية</p>
            <p>رقم ترخيص وزار ة السياحة: 73104158</p>
            <p>الرقم الضريبي : 311547389200003</p>
            <p>رقم السجل التجاري: 1010858713</p>
            <p>البنك : البنك الأهلي السعودي</p>
            <BankInfo>
              <p>
                اسم الحساب البنكي:
                <span ref={textRef}>وكالة مسارات الصحراء للسفر و السياحة</span>
              </p>
              <CopyButton copyRef={textRef} language="ar"/>
            </BankInfo>
            <BankInfo>
              <p>
                رقم الأيبان : <span ref={ibanRef}>SA7610000001400019612610</span>
              </p>
              <CopyButton copyRef={ibanRef} language="ar"/>
            </BankInfo>
          </div>
        </BusinessInfo>
        <ContactInfo>
          <PhoneNumbers>
            <div>
              <p>هاتف التواصل:</p>
              <Link target="_blank" aria-label="Contact Phone Number" href="tel:966590669961+">
                966590669961+
              </Link>
            </div>
            <div>
              <p>واتساب:</p>
              <Link target="_blank" aria-label="Whatsapp Number" href="https://iwtsp.com/966590669961">
                966590669961+
              </Link>
            </div>
            <div>
              <p>ويتشات:</p>
              <p>966558634415+</p>
            </div>
          </PhoneNumbers>
          <div>
            <p>البريد الإلكتروني:</p>
            <Link target="_blank" aria-label="Email Address" href="mailto:desertpathsagency@gmail.com">
              desertpathsagency@gmail.com
            </Link>
            <Link target="_blank" aria-label="Email Address" href="mailto:majinli@desertpaths.com.cn">
              majinli@desertpaths.com.cn
            </Link>
          </div>
        </ContactInfo>
      </FooterLinks>
      <Copyrights>
        <p>جميع الحقوق محفوظة لوكالة مسارات الصحراء للسفر والسياحة.</p>
        <p>&copy; 2025</p>
      </Copyrights>
      <Signature />
    </>
  );
}
