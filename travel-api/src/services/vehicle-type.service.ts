import prisma from '../config/prisma-client';
import { VehicleType } from '../generated/prisma';

interface CreateVehicleTypeProps
  extends Pick<VehicleType, 'name' | 'availableSeat'> {
  files: Express.Multer.File[];
  description: string;
}

export async function createVehicleTypeService({
  name,
  availableSeat,
  files,
  description,
}: CreateVehicleTypeProps) {
  await prisma.$transaction(async (tx) => {
    const createdVehicleType = await tx.vehicleType.create({
      data: {
        name,
        availableSeat,
      },
    });

    /*
    Restruktur format data agar menyesuaikan dengan field model VehicleImages
  */
    const newFiles = files?.map((file) => {
      return {
        imageUrl: file?.filename,
        description,
        vehicleId: createdVehicleType?.id,
      };
    });

    await tx.vehicleImage.createMany({
      data: newFiles,
    });
  });
}
/*
    createMany: [{imageUrl, description, vehicleTypeId}, {imageUrl, description, vehicleTypeId}]

    ATOMIC PROSES
*/
