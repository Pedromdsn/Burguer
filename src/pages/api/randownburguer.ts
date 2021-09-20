import { NextApiRequest, NextApiResponse } from "next"
import { DB } from "../../database/MicroDB"

export default (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			res.json(getRandomBurguer())
			return
		default:
			return res.status(401).send("Error")
	}
}

export const getRandomBurguer = () => DB[Math.floor(Math.random() * DB.length)]
