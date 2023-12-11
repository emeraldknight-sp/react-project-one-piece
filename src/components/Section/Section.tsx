import { ComponentProps } from "../../interfaces/ComponentProps";
import { StyledSection } from "./Section.style";

export const Section = ({ children }: ComponentProps) => {
	return <StyledSection>{children}</StyledSection>;
};
