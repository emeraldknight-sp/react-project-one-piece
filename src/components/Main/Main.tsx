import { ComponentProps } from "../../interfaces/AppProps";
import { StyledMain } from "./Main.style";

export const Main = ({ children }: ComponentProps) => {
	return <StyledMain>{children}</StyledMain>;
};
