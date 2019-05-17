const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notifications',
    multipleStatements: true
})

let notificationModel = {};

notificationModel.getNotifications = (callback) => {
    if(connection){
        connection.query(
            'SELECT * FROM Notificaciones ORDER BY id_notif',
            (err, rows) => {
                if(err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};

notificationModel.createNotification = (notificationData, callback) => {
    if(connection){
        connection.query(
            'INSERT INTO Notificaciones set ?', notificationData,
            (err, result) => {
                if(err){
                    throw err;
                }else{
                    callback(null, {
                        'insertId': result.insertId
                    })
                }
            }
        )
    }
}
notificationModel.updateNotification = (notificationData, callback)=>{
    if(connection){
        const sql = `UPDATE Notificaciones SET
        id_persona= ${connection.escape(notificationData.id_persona)},
        tipo= ${connection.escape(notificationData.tipo)},
        medio= ${connection.escape(notificationData.medio)},
        titulo= ${connection.escape(notificationData.titulo)},
        descripcion= ${connection.escape(notificationData.descripcion)}
        WHERE id_notif = ${connection.escape(notificationData.id_notif)}`;
        connection.query(sql, (err, result) =>{
            if (err){
                throw err
            } else {
                callback(null, {
                    "msg": "success"
                });
            }
        })
    }
}

notificationModel.deleteNotification = (id_notif, callback) =>{
    if(connection){
        let sql = `
        SELECT * FROM Notificaciones WHERE id_notif = ${connection.escape(id_notif)}
        `
        connection.query(sql, (err, row) => {
            if(row){
                let sql = `
                DELETE FROM Notificaciones WHERE id_notif = ${connection.escape(id_notif)}
                `
                connection.query(sql, (err, res)=>{
                    if(err){
                        throw err
                    }else{
                        callback(null, {
                            msg: "Deleted"
                        })
                    }
                })
            }else{
                callback(null, {
                    msg: "Not exist"
                })
            }
        })
    }
}

module.exports = notificationModel