CREATE DATABASE notifications;

USE notifications;
DROP TABLE `Notificaciones`;

CREATE TABLE IF NOT EXISTS `Notificaciones`(
`id_notif` INT(10) unsigned NOT NULL AUTO_INCREMENT,
`id_persona` INT(10) unsigned NOT NULL,
`tipo` ENUM( 'informacion', 'promocion', 'recordatorio') NOT NULL,
`medio` ENUM( 'celular', 'correo') NOT NULL,
`titulo` VARCHAR(80) COLLATE utf8_unicode_ci NOT NULL,
`descripcion` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
`fecha_de_creacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
`fecha_de_modificacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY(`id_notif`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

DESCRIBE Notificaciones;