import { SectionStyle } from "./section.styled";

export const Section = ({ children, title }) => {
  return (
    <>
      <SectionStyle>
      <h2 className="title">{title}</h2>
        {children}
        </SectionStyle>
    </>
  );
}