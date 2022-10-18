import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const partsData: Prisma.PartCreateInput[] = [
    { name: "Horns", mod: 2 },
    { name: "Wings", mod: 4 },
    { name: "Sharp Stick", mod: 1 },
    { name: "Scales", mod: 2 }
  ];
  const parts = await Promise.all(
    partsData.map((p) => prisma.part.create({ data: p }))
  );

  const monstersData: Prisma.MonsterCreateInput[] = [
    {
      name: "Gerblin",
      description: "A nasty green guy",
      base: 0,
      parts: { connect: [{ id: parts[2].id }] }
    },
    {
      name: "Minotaur",
      description: "HOOORNS!",
      base: 3,
      parts: { connect: [{ id: parts[0].id }] }
    },
    {
      name: "Duranthrax",
      description: "Fly, you fools",
      base: 10,
      parts: { connect: [{ id: parts[3].id }, { id: parts[1].id }] }
    }
  ];
  const monsters = await Promise.all(
    monstersData.map((m) => prisma.monster.create({ data: m }))
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
