import { useState } from "react";

import { Button } from "../../components/Button";
import { characters } from "../../mock/characters";
import { icons } from "../../mock/icons";

import OnePieceLogo from "../../assets/one-piece-logo.webp";

import { StyledHome } from "./Home.style";
import { Nav } from "../../components/Nav";
import { Main } from "../../components/Main";
import { Section } from "../../components/Section";

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
			<Main>
				<Section>
					<img src={OnePieceLogo} alt="one piece logo" width={200} />
					<h2>{characters[count].name}</h2>
					<p>{characters[count].description}</p>
				</Section>
			</Main>
			<Nav>
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
			</Nav>
		</StyledHome>
	);
};
