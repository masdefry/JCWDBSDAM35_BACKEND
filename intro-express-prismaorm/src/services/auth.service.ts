/*
    SERVICE:
    1. Business logic
    2. [Possible] Data access layer (komunikasi database)
*/
import prisma from '../config/prisma-client';
import { User } from '../generated/prisma';

export async function registerUserService({
    username, 
    email, 
    password
}) {
  // Step-02  : Insert data from client to db
  await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
}
