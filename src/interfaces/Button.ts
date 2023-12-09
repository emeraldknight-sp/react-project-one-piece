export interface ButtonProps {
	type?: "button" | "submit" | "reset" | undefined;
	ariaLabel?: string;
	children?: React.ReactNode;
	className?: string;
	onClick?: () => void;
}
