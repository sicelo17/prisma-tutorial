import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "john.doe@example.com",
            age: 27,
            userPreference: {
                create: {
                    emailUpdates: true
                },
            },
        },
        select: {
            name: true,
            userPreference:true
        }
    })
    console.log(user)
}

main() 
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
