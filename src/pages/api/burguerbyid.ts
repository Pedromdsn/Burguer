import { NextApiRequest, NextApiResponse } from "next"
import DB from "../../database/MicroDB.json"

export default (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.body
	if (!checkValidID(+id)) return res.status(404).send("Error")
	switch (req.method) {
		case "GET":
			res.json(getBurguer(+id))
			return
		default:
			return res.status(401).send("Error")
	}
}

export const getBurguer = (id: number) => DB[id - 1]
export const checkValidID = (id: number) => id > 0 && id <= DB.length + 1
