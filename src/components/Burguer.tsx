import Image from "next/image"

import style from "../style/burguer.module.css"

interface Props {
	img: string
}

const Burguer = ({ img }: Props) => {
	return (
		<div className="flex flex-col items-center w-1/3 md:w-5/6 mx-auto mb-10 mt-10 md:mt-60 2sm:mt-20">
			<div className="relative bottom-0">
				<Image src="/prato.png" height="400" width="1200" priority/>
				<div className={`absolute -bottom-20 z-10 sm:-bottom-10 lg:-bottom-8 ${style.burguer}`}>
					<Image src={img} height="1200" width="1200" quality="100" priority/>
				</div>
			</div>
		</div>
	)
}

export default Burguer
