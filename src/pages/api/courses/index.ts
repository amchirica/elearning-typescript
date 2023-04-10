import defaultHandler from "@/lib/apiHandlers/defaultHandler";
import prisma from "@/lib/prismaFunctions";

export default defaultHandler.get(async (req, res) => {
    try {
        const data = await prisma.course.findMany({
            include: {
                attending: true
            }
        })
        return res.status(200).send({
            data: data
        })
    } catch (err) {
        return res.status(500).send({
            message: "Ooops, nu am putut prelua cursurile!"
        })
    }
})