import styled from "styled-components";

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 2rem;

	max-width: 500px;

	position: relative;
	z-index: 1;

	img {
		width: 200px;
		height: auto;
	}

	@media (min-width: 1024px) {
		justify-content: center;
	}
`;
