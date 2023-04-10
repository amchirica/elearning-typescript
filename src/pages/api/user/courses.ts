import auth from '@/lib/apiHandlers/auth'
import handler from '../../../lib/apiHandlers/defaultHandler'
import prisma from '@/lib/prismaFunctions'

export default auth(handler.put(async (req, res) => {
    const { courseId, userId } = req.body;
    
    try {
        const data = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                courses: {
                   disconnect: [{ id: courseId }]
                }
            },
            include: {
                courses: true
            }
        })
        return res.status(200).send({
            message: 'Te-ai dezabonat cu success de la acest curs!',
            data: data
        })
    } catch (err) {
        console.error(err)
        res.status(500).send({
            message: 'Ooops, ceva nu a mers bine!'
        })
    }
}))