 import { hash } from 'bcrypt'
import defaultHandler from '@/lib/apiHandlers/defaultHandler'
import prisma from '@/lib/prismaFunctions'
 
 const salts = 10
 
 export default defaultHandler.post(async (req, res) => {
     const { password, email, firstname, lastname  } = await req.body
     const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
     })
     
     if (user) {
         return res.status(401).send({
                 message: `Acest email exista deja, te rugam incearca altul!`
             })
     }
 
     if (email && password) {
         const role = "user"
         hash(password, salts, async (err, hash) => {
            const user = await prisma.user.create({
                data: {
                    email: email,
                    firstName: firstname,
                    lastName: lastname,
                    password: hash,
                    role: role
                }
            })
             if (err) {
                 return res.status(500).send({
                         message: "Ooops, ceva nu a mers bine la inregistrare!"
                     })
             }
             return res.status(200).send({
                     user: user,
                     message: `Contul pentru ${email} a fost creat cu succes!`
                 })
         })
     } else {
         return res.send({
                 message: 'Nimic de creat!'
             })
     }
 })