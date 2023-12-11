import { AppComponentProps } from "../../interfaces/ComponentProps";
import { StyledSection } from "./Section.style";

export const Section = ({ children }: AppComponentProps) => {
	return <StyledSection>{children}</StyledSection>;
};
