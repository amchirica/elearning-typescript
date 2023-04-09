import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from 'cookie'
import defaultHandler from "@/lib/apiHandlers/defaultHandler";
import prisma from "@/lib/prismaFunctions";
 
 const key = process.env.STR
 
 export default defaultHandler.post(async (req, res) => {
     const { password, email } = req.body
     const user = await prisma.user.findFirst({
        where: {
            email: email
        }
     })
     if (user) {
         compare(password, user!.password, (err, result) => {
             if (result && !err) {
                 sign({
                     email: user.email,
                     firstname: user.firstName,
                     lastname: user.lastName,
                     role: user.role,
                 }, key!, (err: any, token: any) => {
                     if (err && !token) {
                         return res.status(500).send({
                                 message: "Nu am putut crea tokenul pentru autentificare!",
                                 error: err
                             })
                     } else {
                         res.setHeader(
                             "Set-Cookie",
                             cookie.serialize("auth", token, {
                                 httpOnly: true,
                                 secure: process.env.NODE_ENV !== "development",
                                 sameSite: "strict",
                                 maxAge: 60 * 60 * 24 * 7,
                                 path: "/",
                             })
                         );
                         return res.status(200).send({
                                 ok: true,
                                 message: `${user.email} autentificat cu succes!`,
                                 user: user,
                             })
                     }
                 })
             } else {
                 return res.status(404).send({
                         message: 'Parola incorecta!'
                     })
             }
         })
     } if (!user) {
         return res.status(404).send({
                 confirmed: false,
                 message: `${email} nu exista, te rugam sa creezi un cont pentru a beneficia de platforma!`
             })
     }
 })