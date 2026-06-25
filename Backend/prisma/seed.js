import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient()
async function main(){
  await prisma.genre.createMany({data:
[
  { name: "Technology" },
      { name: "Web Development" },
      { name: "Mobile Development" },
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
      { name: "Cybersecurity" },
      { name: "Startups" },
      { name: "Career" },
      { name: "Business" },
      { name: "Finance" },
      { name: "Investing" },
      { name: "Productivity" },
      { name: "Health" },
      { name: "Fitness" },
      { name: "Lifestyle" },
      { name: "Personal Growth" },
      { name: "Education" },
      { name: "Science" },
      { name: "Design" },
      { name: "Entertainment" }
  
],
skipDuplicates:true
})
console.log("✅ Genres seeded successfully")
}
main().catch((e)=>{
  console.log("Seeding Failed",e)
   process.exit(1);
}).finally(async()=>{
  await prisma.$disconnect()
})