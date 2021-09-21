interface Props {
	calories: number
	name: string
	description: string
}

const Infos = ({ calories, name, description }: Props) => {
	return (
		<div className="relative flex justify-around text-center md:flex-col md:items-center gap-60 md:gap-10 px-20">
			<div className="font-bold">
				<div className="text-primary text-5xl">Calories</div>
				<div className="text-white text-4xl">{calories} cal</div>
			</div>
			<div className="font-bold text-5xl text-white text-center md:order-first absolute md:static w-1/5 mx-auto md:w-full">
				<span className="text-primary">{name.slice(0, 3)}</span>
				{name.slice(3)}
			</div>
			<div className="flex flex-col items-center w-80 ml-10 md:ml-0">
				<div className="text-primary font-bold text-4xl">Description</div>
				<div className="text-white font-semibold text-2xl">{description}</div>
			</div>
		</div>
	)
}

export default Infos
