import { NextApiRequest, NextApiResponse } from "next"
import DB  from "../../database/MicroDB.json"

export default (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			res.json(getRandomBurguer())
			return
		default:
			return res.status(401).send("Error: Request method mush be GET")
	}
}

export const getRandomBurguer = () => DB[Math.floor(Math.random() * DB.length)]
