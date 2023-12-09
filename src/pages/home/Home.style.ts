import styled from "styled-components";

export const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	h2 {
		color: white;
		font-size: 48px;
		font-family: var(--tipography-content--title);
		font-weight: 400;
	}

	p {
		color: white;
		font-family: var(--tipography-content--description);
		line-height: 24px;
		font-weight: 400;
	}

	@media (min-width: 1024px) {
		flex-direction: row;
	}

	&::after {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		min-height: 100vh;
		min-width: 100vw;

		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 10%,
			rgba(0, 0, 0, 0) 75%
		);

		@media (min-width: 768px) {
			background: rgb(0, 0, 0);
			background: linear-gradient(
				120deg,
				rgba(0, 0, 0, 1) 10%,
				rgba(0, 0, 0, 0) 75%
			);
		}

		@media (min-width: 1024px) {
			background: rgb(0, 0, 0);
			background: linear-gradient(
				120deg,
				rgba(0, 0, 0, 1) 40%,
				rgba(0, 0, 0, 0) 75%
			);
		}
	}
`;

export const StyledMain = styled.main`
	display: flex;
	flex: 1;
	padding: 1.5rem;
`;

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 2rem;

	max-width: 500px;

	position: relative;
	z-index: 1;

	@media (min-width: 1024px) {
		justify-content: center;
	}
`;

export const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 1rem;
	padding: 1.5rem;

	position: relative;
	z-index: 1;

	img {
		border-radius: 50%;
		width: 100%;
	}

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
