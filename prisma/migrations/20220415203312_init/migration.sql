-- CreateTable
CREATE TABLE `Pokedex` (
    `pokemon` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pokedex_pokemon_key`(`pokemon`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
