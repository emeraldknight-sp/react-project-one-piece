import { ButtonProps } from "../../interfaces/AppProps";
import { StyledButton } from "./Button.style";

export const Button = ({
	children,
	type = "button",
	ariaLabel,
	className,
	onClick,
}: ButtonProps) => {
	return (
		<StyledButton
			type={type}
			aria-label={ariaLabel}
			onClick={onClick}
			className={className}
		>
			{children}
		</StyledButton>
	);
};
