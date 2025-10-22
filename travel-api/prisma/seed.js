const {PrismaClient} = require('./../src/generated/prisma')
const prisma = new PrismaClient();

const city = [
  {
    city: 'Jakarta',
    country: 'Indonesia',
  },
  {
    city: 'Bandung',
    country: 'Indonesia',
  },
];

const travelRoutes = [
  {
    originId: '228c6374-3409-43cd-9091-7f90b6a45bfe', 
    destinationId: 'cc74da20-e871-4c40-b9a5-75762ab7df4b',
    distanceKilometers: 122, 
    durationMinutes: 160
  }
]

async function main() {
  // await prisma.city.createMany({
  //   data: city,
  // });

  await prisma.route.createMany({
    data: travelRoutes
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
