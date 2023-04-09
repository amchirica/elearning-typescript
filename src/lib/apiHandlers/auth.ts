 import { verify } from "jsonwebtoken";
 import { NextApiRequest, NextApiResponse } from "next";
 
 const STR = process.env.STR
 
 const auth = (fn: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.cookies.auth) {
        return res.status(401).send('Unauthorized');
      }
   verify(req.cookies.auth, STR!, async (err, decoded) => {
     if (!err && decoded) {
       return await fn(req, res);
     } else {
       res
         .status(200)
         .json({ message: "You are not authenticated!" });
     }
   });
 };
 
 export default auth;