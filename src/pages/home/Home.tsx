import { useState } from "react";

import { Button } from "../../components/Button";
import { characters } from "../../mock/characters";
import { icons } from "../../mock/icons";

import OnePieceLogo from "../../assets/one-piece-logo.webp";

import { StyledHome, StyledMain, StyledNav, StyledSection } from "./Home.style";

export const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<StyledHome
			style={{
				backgroundImage: `url(${characters[count].background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				objectFit: "cover",
			}}
		>
			<StyledMain>
				<StyledSection>
					<img src={OnePieceLogo} alt="one piece logo" width={200} />
					<h2>{characters[count].name}</h2>
					<p>{characters[count].description}</p>
				</StyledSection>
			</StyledMain>
			<StyledNav>
				{icons.map((icon, index) => (
					<Button
						key={index}
						onClick={() => setCount(index)}
						ariaLabel={`click to see details about ${icon.alt}`}
						className={index === count ? "selected" : ""}
					>
						<img src={icon.src} alt={icon.alt} />
					</Button>
				))}
			</StyledNav>
		</StyledHome>
	);
};
