import prisma from '../config/prisma-client';
import { Route } from '../generated/prisma';

export async function createTravelRouteService({
  distanceKilometers,
  durationMinutes,
  originId,
  destinationId,
}: Pick<
  Route,
  'destinationId' | 'durationMinutes' | 'originId' | 'distanceKilometers'
>) {
  const findExistingRoute = await prisma.route.findMany({
    where: {
      originId,
      destinationId,
    },
  });

  if (findExistingRoute.length) throw new Error('Route already exist');

  await prisma.route.create({
    data: {
      distanceKilometers,
      durationMinutes,
      originId,
      destinationId,
    },
  });
}
