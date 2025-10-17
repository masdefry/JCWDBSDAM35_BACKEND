-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRM', 'CANCELLED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "fullName" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" VARCHAR(15) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" TEXT NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_types" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "availableSeat" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "vehicle_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "distanceKilometers" DECIMAL(8,2) NOT NULL,
    "originId" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "departureTime" TIME NOT NULL,
    "arrivalTime" TIME NOT NULL,
    "price" INTEGER NOT NULL,
    "routeId" TEXT NOT NULL,
    "vehicleTypeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "totalSeat" INTEGER NOT NULL,
    "departureDate" DATE NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "userId" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passengers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idCardNumber" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "passengers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_originId_fkey" FOREIGN KEY ("originId") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "vehicle_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
