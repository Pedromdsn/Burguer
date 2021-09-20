import Burguer from "../components/Burguer"
import Infos from "../components/Infos"
import Title from "../components/Title"
import axios from "axios"

import {Burger } from "../types/Data"
import { GetStaticPaths, GetStaticProps } from "next"
import { getRandomBurguer } from "./api/burguer"

interface Props {
	chosen: Burger
}

export default function Home({ chosen }: Props) {
	return (
		<div className="flex flex-col justify-around min-h-screen bg-principal bg-cover bg-yellow-500 gap-20 py-10">
			<Title />
			<Infos calories={chosen.calories} description={chosen.description} name={chosen.name} />
			<Burguer img={chosen.img}/>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const chosen = getRandomBurguer()

	return {
		props: { chosen },
		redirect: 60,
	}
}
