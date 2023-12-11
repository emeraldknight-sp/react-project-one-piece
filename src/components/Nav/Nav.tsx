import { ComponentProps } from "../../interfaces/ComponentProps";
import { StyledNav } from "./Nav.style";

export const Nav = ({ children }: ComponentProps) => {
	return <StyledNav>{children}</StyledNav>;
};
