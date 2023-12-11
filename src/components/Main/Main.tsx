import { ComponentProps } from "../../interfaces/ComponentProps";
import { StyledMain } from "./Main.style";

export const Main = ({ children }: ComponentProps) => {
	return <StyledMain>{children}</StyledMain>;
};
