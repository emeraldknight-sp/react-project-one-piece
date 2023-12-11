import { ComponentProps } from "../../interfaces/AppProps";
import { StyledSection } from "./Section.style";

export const Section = ({ children }: ComponentProps) => {
	return <StyledSection>{children}</StyledSection>;
};
