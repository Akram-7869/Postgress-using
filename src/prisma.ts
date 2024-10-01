import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();


async function insertUser(username:string,password:string,firstName:string,lastName:string) {
//    const res=await prisma.user.create({
//         data:{
//            username:username,
//            lastName,
//         }
//     })

//    console.log(res);

      const res=await prisma.user.create({
        data:{
            username:username,
            firstName,
            lastName,
            password,
        }
      })
      console.log(res);
}


insertUser("akramsulthan","akram","mohammed","sulthan");


async function getUser(username:string) {
    const res=await prisma.user.findFirst({
        where:{
            username:username,
        }
    })
    console.log(res);
}

getUser("akramsulthan");

