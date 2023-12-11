export interface ButtonProps {
	type?: "button" | "submit" | "reset" | undefined;
	ariaLabel?: string;
	children?: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export interface CharacterProps {
	name: string;
	description: string;
	background: string;
}

export interface ComponentProps {
	children: React.ReactNode;
}

export interface IconProps {
	src: string;
	alt: string;
}
