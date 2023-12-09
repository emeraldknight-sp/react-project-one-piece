import { Character } from "../interfaces/Character";

import backgroundChopper from "../assets/personagem-tony-chopper.webp";
import backgroundZoro from "../assets/personagem-roronoa-zoro.webp";
import backgroundLuffy from "../assets/personagem-monkey-d-luffy.webp";
import backgroundNami from "../assets/personagem-nami.webp";
import backgroundSanji from "../assets/personagem-sanji.webp";

export const characters: Character[] = [
	{
		name: "Tony Chopper",
		description:
			"Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação.",
		background: backgroundChopper,
	},
	{
		name: "Roronoa Zoro",
		description:
			"Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação de Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão salvar sua vida.",
		background: backgroundZoro,
	},
	{
		name: "Monkey D. Luffy",
		description:
			"Luffy do Chapéu de Palha, como ficou conhecido, é o protagonista do anime, e o fundador e capitão da tripulação Piratas do Chapéu de Palha. Desde muito jovem, tem como seu maior sonho um dia encontrar o lendário tesouro de Gol D. Roger, para se tornar o novo Rei dos Piratas.",
		background: backgroundLuffy,
	},
	{
		name: "Nami",
		description:
			"Uma órfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo.",
		background: backgroundNami,
	},
	{
		name: "Sanji",
		description:
			"Também conhecido como 'Perna Negra' Sanji, este pirata foi o quinto a integrar a tripulação de Luffy. Suas ações como pirata lhe renderam a terceira maior recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro oficial do grupo.",
		background: backgroundSanji,
	},
];
