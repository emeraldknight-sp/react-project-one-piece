import styled from "styled-components";

export const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 1rem;
	padding: 1.5rem;

	position: relative;
	z-index: 1;

	@media (min-width: 768px) {
		justify-content: space-around;
		background: rgba(0, 0, 0, 0.5);
	}

	@media (min-width: 1024px) {
		flex-direction: column;
		background: rgba(0, 0, 0, 0.5);
		justify-content: center;
	}
`;
