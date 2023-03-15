-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gymcheck
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gymcheck
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gymcheck` DEFAULT CHARACTER SET utf8 ;
USE `gymcheck` ;

-- -----------------------------------------------------
-- Table `gymcheck`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`user` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`address` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  `addition` VARCHAR(45) NULL,
  `street` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `postcode` VARCHAR(45) NOT NULL,
  `coords` POINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`gym`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`gym` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`gym` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `addressId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_gym_gym_address1_idx` (`addressId` ASC) VISIBLE,
  CONSTRAINT `fk_gym_gym_address1`
    FOREIGN KEY (`addressId`)
    REFERENCES `gymcheck`.`address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`equipment_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`equipment_category` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`equipment_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`equipment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`equipment` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`equipment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoryId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(1024) NULL,
  `imagePath` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_equipment_equipment_category1_idx` (`categoryId` ASC) VISIBLE,
  CONSTRAINT `fk_equipment_equipment_category1`
    FOREIGN KEY (`categoryId`)
    REFERENCES `gymcheck`.`equipment_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`user_owner`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`user_owner` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`user_owner` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_owner_user1_idx` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_user_owner_user1`
    FOREIGN KEY (`userId`)
    REFERENCES `gymcheck`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`gym_ownership`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`gym_ownership` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`gym_ownership` (
  `userOwnerId` INT NOT NULL,
  `gymId` INT NOT NULL,
  PRIMARY KEY (`userOwnerId`, `gymId`),
  INDEX `fk_user_owner_has_gym_gym1_idx` (`gymId` ASC) VISIBLE,
  INDEX `fk_user_owner_has_gym_user_owner1_idx` (`userOwnerId` ASC) VISIBLE,
  CONSTRAINT `fk_user_owner_has_gym_user_owner1`
    FOREIGN KEY (`userOwnerId`)
    REFERENCES `gymcheck`.`user_owner` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_owner_has_gym_gym1`
    FOREIGN KEY (`gymId`)
    REFERENCES `gymcheck`.`gym` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`report`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`report` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`report` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gymId` INT NOT NULL,
  `equipmentId` INT NOT NULL,
  `userId` INT NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `status` TINYINT NULL,
  `comment` VARCHAR(225) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_gym_has_equipment_equipment1_idx` (`equipmentId` ASC) VISIBLE,
  INDEX `fk_gym_has_equipment_gym1_idx` (`gymId` ASC) VISIBLE,
  INDEX `fk_gym_has_equipment_user1_idx` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `gymId_equipmentId_userId` (`gymId` ASC, `equipmentId` ASC, `userId` ASC) VISIBLE,
  CONSTRAINT `fk_gym_has_equipment_gym1`
    FOREIGN KEY (`gymId`)
    REFERENCES `gymcheck`.`gym` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_gym_has_equipment_equipment1`
    FOREIGN KEY (`equipmentId`)
    REFERENCES `gymcheck`.`equipment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_gym_has_equipment_user1`
    FOREIGN KEY (`userId`)
    REFERENCES `gymcheck`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gymcheck`.`report_verification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gymcheck`.`report_verification` ;

CREATE TABLE IF NOT EXISTS `gymcheck`.`report_verification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `reportId` INT NOT NULL,
  `verifiedBy` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `comment` VARCHAR(255) NULL,
  INDEX `fk_report_has_user_owner_user_owner1_idx` (`verifiedBy` ASC) VISIBLE,
  INDEX `fk_report_has_user_owner_report1_idx` (`reportId` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_report_has_user_owner_report1`
    FOREIGN KEY (`reportId`)
    REFERENCES `gymcheck`.`report` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_report_has_user_owner_user_owner1`
    FOREIGN KEY (`verifiedBy`)
    REFERENCES `gymcheck`.`user_owner` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
