import { ComponentProps } from "../../interfaces/AppProps";
import { StyledNav } from "./Nav.style";

export const Nav = ({ children }: ComponentProps) => {
	return <StyledNav>{children}</StyledNav>;
};
