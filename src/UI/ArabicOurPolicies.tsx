import styled from "styled-components";
import { SectionHeading } from "./Headings";
import Link from "./Link";
import NestedUl from "./NestedUl";

const Contents = styled.section`
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
export default function ArabicOurPolicies() {
  return (
    <Contents>
      <SectionHeading>سياسة الحجز والإلغاء</SectionHeading>
      <p>نحرص في وكالة مسارات الصحراء للسفر والسياحة على توفير تجربة حجز مريحة وآمنة لعملائنا، مع الالتزام التام بالأنظمة والتعليمات الصادرة عن وزارة السياحة في المملكة العربية السعودية.</p>
      <div>
        <h5>سياسة الحجز:</h5>
        <ul>
          <li>
            تتم عملية الحجز عبر القنوات الرسمية للمؤسسة:
            <NestedUl>
              <li>الموقع الإلكتروني الرسمي</li>
              <li>
                البريد الإلكتروني :{" "}
                <Link href="mailto:Finance@desertpathsagency.com" style={{ textDecoration: "underline" }}>
                  Finance@desertpathsagency.com
                </Link>
              </li>
              <li>الرقم الموحد: [0599009252]</li>
            </NestedUl>
          </li>

          <li>يتم تأكيد الحجز بعد استلام المبلغ المطلوب أو الدفعة المقدمة حسب نوع الخدمة.</li>
          <li>الأسعار تشمل الضرائب الحكومية والرسوم الإدارية ما لم يُذكر خلاف ذلك.</li>
          <li>يُرسل تأكيد الحجز للعميل عبر البريد الإلكتروني أو رسالة نصية.</li>
        </ul>
      </div>

      <div>
        <h5>سياسة الإلغاء:</h5>
        <ul>
          <li>يحق للعميل إلغاء الحجز خلال المدة المحددة في شروط الخدمة قبل موعد التنفيذ، وقد تُطبّق رسوم إلغاء حسب نوع الحجز.</li>
          <li>في حال تم الإلغاء من قبل المؤسسة لأسباب طارئة أو خارجة عن الإرادة، يُعاد المبلغ المدفوع بالكامل للعميل.</li>
          <li>يمكن تعديل الحجوزات بالتنسيق المسبق مع خدمة العملاء وفق التوافر المتاح.</li>
        </ul>
      </div>
    </Contents>
  );
}
