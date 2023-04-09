
 import { NextApiRequest, NextApiResponse } from "next"
 import nextConnect from "next-connect"
 
 const defaultHandler = nextConnect<NextApiRequest, NextApiResponse>({
     onError(error, req, res) {
         return res.status(501).json({ error: `Something happened! ${error}` })
     },
     onNoMatch(req, res) {
         return res.status(501).json({ error: `Something happened! ${req.method}` })
     }
 })
 
 export default defaultHandler