import auth from '@/lib/apiHandlers/auth'
import handler from '../../../lib/apiHandlers/defaultHandler'
import prisma from '@/lib/prismaFunctions'

export default auth(handler.post(async (req, res) => {
    const { email, firstName, lastName, role, password } = req.body;
    
    try {
        const user = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                email: email,
                firstName: firstName,
                lastName: lastName,
                role: role,
                password: password
            }
        })
        return res.status(200).send({
            message: 'Profil modificat cu succes!',
            user: user            
        })
    } catch (err: any) {
        return res.status(500).send({
            message: 'Nu am putut modifica profilul!',
            err: err.message
        })
    }
}))