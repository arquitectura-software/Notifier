//nueva version:

import { Router } from "express";
const router = Router();

//Database conecction

import { connect } from "../database";
import { ObjectId } from "mongodb";

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db
    .collection("notifications")
    .find({})
    .toArray();
  res.json(result);
});

router.post("/", async (req, res) => {
  const db = await connect();
  const notificationData = {
    id_persona: req.body.id_persona,
    tipo: req.body.tipo,
    medio: req.body.medio,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    fecha_de_creacion: new Date(),
    fecha_de_modificacion: null
  };
  const result = await db
    .collection("notifications")
    .insertOne(notificationData);
  res.json({
    id_persona: notificationData.id_persona,
    tipo: notificationData.tipo,
    medio: notificationData.medio,
    titulo: notificationData.titulo,
    descripcion: notificationData.descripcion
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db
    .collection("notifications")
    .findOne({ _id: ObjectId(id) });
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db
    .collection("notifications")
    .deleteOne({ _id: ObjectId(id) });
  res.json({
    id: id
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const notificationData = {
    id_persona: req.body.id_persona,
    tipo: req.body.tipo,
    medio: req.body.medio,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    fecha_de_modificacion: new Date()
  };
  const db = await connect();
  await db
    .collection("notifications")
    .updateOne({ _id: ObjectId(id) }, { $set: notificationData });
  res.json({
    id_persona: notificationData.id_persona,
    tipo: notificationData.tipo,
    medio: notificationData.medio,
    titulo: notificationData.titulo,
    descripcion: notificationData.descripcion
  });
});
export default router;
