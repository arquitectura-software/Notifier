const Notification = require("../models/notification");
module.exports = function(app) {
  app.get("/notifications", (req, res) => {
    Notification.getNotifications((err, data) => {
      res.status(200).json(data);
    });
  });

  app.post("/notifications", (req, res) => {
    const notificationData = {
      id_notif: null,
      id_persona: req.body.id_persona,
      tipo: req.body.tipo,
      medio: req.body.medio,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      fecha_de_creacion: null,
      fecha_de_modificacion: null
    };
    console.log(notificationData)
    Notification.createNotification(notificationData, (err, data) => {
        console.log(notificationData.id_persona)
        if (data && data.insertId) {
        console.log(data);
        res.json({
          success: true,
          message: "Notificacion creada",
          data: data
        });
      } else {
        res.status(500).json({
          success: false,
          msg: "Error"
        });
      }
    });
  });

  app.put("/notifications/:id_notif", (req, res) => {
    const notificationData = {
      id_notif: parseInt(req.params.id_notif,10),
      id_persona: req.body.id_persona,
      tipo: req.body.tipo,
      medio: req.body.medio,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      fecha_de_creacion: null,
      fecha_de_modificacion: null
    };
    console.log(notificationData)
    Notification.updateNotification(notificationData, (err, data) => {
      if (data && data.msg) {
        res.json(data);
      } else {
        res.json({
          success: false,
          msg: "Error"
        });
      }
    });
  });

  app.delete("/notifications/:id_notif", (req, res) => {
    Notification.deleteNotification(req.params.id_notif, (err, data) => {
      if ((data && data.msg === "Deleted") || data.msg === "Not exist") {
        res.json({
          success: true,
          data
        });
      } else {
        res.status(500).json({
          msg: "Error"
        });
      }
    });
  });
};
