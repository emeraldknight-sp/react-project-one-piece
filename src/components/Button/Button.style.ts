import styled from "styled-components";

export const StyledButton = styled.button`
	display: flex;
	max-width: 90px;
	background: black;
	border-radius: 50%;
	cursor: pointer;
	outline: none;
	transition: all 0.6s;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9);
	}

	&.selected {
		transform: scale(1.2);
		box-shadow: 0 0 10px #d9d9d9;
	}
`;
