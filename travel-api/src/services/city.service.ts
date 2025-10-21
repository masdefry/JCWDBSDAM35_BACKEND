import prisma from '../config/prisma-client';
import { City } from '../generated/prisma';

export async function createCityService({
  city,
  country,
}: Pick<City, 'city' | 'country'>) {
    await prisma.city.create({
        data: {
            city,
            country
        }
    })
}
