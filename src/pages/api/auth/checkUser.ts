import defaultHandler from "@/lib/apiHandlers/defaultHandler";
import auth from "@/lib/apiHandlers/auth";
import { verify } from "jsonwebtoken";

const str = process.env.STR

export default auth(defaultHandler.get(async (req, res) => {
    if (!req.cookies.auth) {
        return res.status(401).send({
            message: 'Neautorizat!'
        })
    }
    verify(req.cookies.auth, str!, async (err, decoded) => {
        if (!err && decoded) {
            return res.status(200).send({
                message: 'Autorizat!',
                user: decoded
            })
        } else {
          res
            .status(200)
            .json({ message: "Nu esti conectat!" });
        }
      });
}))