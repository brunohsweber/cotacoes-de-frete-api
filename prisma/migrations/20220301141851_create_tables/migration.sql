-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carries" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "cnpj" VARCHAR(50) NOT NULL,

    CONSTRAINT "carries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "freight_type" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(50) NOT NULL,

    CONSTRAINT "freight_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotations" (
    "id" TEXT NOT NULL,
    "id_user" VARCHAR(36) NOT NULL,
    "id_carrier" VARCHAR(36) NOT NULL,
    "id_freight_type" VARCHAR(36) NOT NULL,
    "sender_name" VARCHAR(50) NOT NULL,
    "receiver_name" VARCHAR(50) NOT NULL,
    "reference_doc" INTEGER NOT NULL,
    "quotation_number" INTEGER,
    "price" DECIMAL(9,2) NOT NULL,
    "observations" VARCHAR(50) NOT NULL,
    "responsible" VARCHAR(25) NOT NULL,
    "has_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "has_paid" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quotations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "carries_cnpj_key" ON "carries"("cnpj");

-- AddForeignKey
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_id_carrier_fkey" FOREIGN KEY ("id_carrier") REFERENCES "carries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_id_freight_type_fkey" FOREIGN KEY ("id_freight_type") REFERENCES "freight_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
