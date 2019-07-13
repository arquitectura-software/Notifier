const {MongoClient} = require("mongodb");
import "@babel/polyfill";

async function connect() {
    try {
      const client = await MongoClient.connect("mongodb://notifications-db:27017", {
        useNewUrlParser: true
      });
      const db = client.db("notifications");
      console.log("DB is connected");
      return db;
    } catch (e) {
      console.log(e);
    }
  }
async function seed(){
    try{
    const db = await connect()
    const isEmpty = await db
    .collection("notifications")
    .find({})
    .toArray()
    if( isEmpty.length > 0){
        console.log('already seeded')
        return
    }
    const result = await db.collection('notifications').insertMany([
        {
            id_persona: 1,
            tipo: 'recordatorio',
            medio: 'correo',
            titulo: "Evento de Crossfit",
            descripcion: "No olvides asistir al evento de Crossfit del dia de hoy ",
            fecha_de_creacion: new Date('2019-07-04 07:00:00'),
            fecha_de_modificacion: null
        },
        {
            id_persona: 2,
            tipo: 'promocion',
            medio: 'correo',
            titulo: "Descuentos Pull and Bear",
            descripcion: "50% de descuento en toda la tienda (aplican condiciones y restricciones).",
            fecha_de_creacion: new Date('2019-07-03 06:00:00'),
            fecha_de_modificacion: null
        },
        {
            id_persona: 3,
            tipo: 'recordatorio',
            medio: 'correo',
            titulo: "Evento de Crossfit",
            descripcion: "No olvides asistir al evento de Crossfit del dia de hoy ",
            fecha_de_creacion: new Date('2019-07-04 07:00:00'),
            fecha_de_modificacion: null
        },
        {
            id_persona: 4,
            tipo: 'informacion',
            medio: 'celular',
            titulo: "Destino de mañana",
            descripcion: "El dia de mañana estaremos en la ciudad de Paris, preparate porque la aventura te espera. ",
            fecha_de_creacion: new Date('2019-07-05 15:00:00'),
            fecha_de_modificacion: null
        },
        {
            id_persona: 5,
            tipo: 'recordatorio',
            medio: 'celular',
            titulo: "Spa romántico",
            descripcion: "Te esperamos en el spa para tu cita de relajación junto a tu pareja.",
            fecha_de_creacion: new Date('2019-07-06 10:00:00'),
            fecha_de_modificacion: null
        },
        {
            id_persona: 6,
            tipo: 'informacion',
            medio: 'correo',
            titulo: "Dato curioso",
            descripcion: 'Sabias que si los peces no hacen nada',
            fecha_de_creacion: new Date('2019-07-02 11:20:00'),
            fecha_de_modificacion: null
        },
        {
            id_persona: 7,
            tipo: 'informacion',
            medio: 'correo',
            titulo: "Descuentos Pull and Bear",
            descripcion: "50% de descuento en toda la tienda (aplican condiciones y restricciones).",
            fecha_de_creacion: new Date('2019-07-03 06:00:00'),
            fecha_de_modificacion: null
       },
       {
        id_persona: 8,
        tipo: 'informacion',
        medio: 'correo',
        titulo: "Descuentos Pull and Bear",
        descripcion: "50% de descuento en toda la tienda (aplican condiciones y restricciones).",
        fecha_de_creacion: new Date('2019-07-03 06:00:00'),
        fecha_de_modificacion: null
       },
       {
        id_persona: 9,
        tipo: 'recordatorio',
        medio: 'celular',
        titulo: "Noche de peliculas, alista todo para evitar dormir esta noche.",
        descripcion: "Noche de peliculas, alista todo para evitar dormir esta noche.",
        fecha_de_creacion: new Date('2019-07-05 12:00:00'),
        fecha_de_modificacion: null
        },
        {
            id_persona: 10,
            tipo: 'recordatorio',
            medio: 'correo',
            titulo: "Noche de peliculas, alista todo para evitar dormir esta noche.",
            descripcion: "Noche de peliculas, alista todo para evitar dormir esta noche.",
            fecha_de_creacion: new Date('2019-07-05 12:02:00'),
            fecha_de_modificacion: null
        }
    ])
    console.log('Seed completed')
    return result

    }catch(e){
        console.log(e)
    }

}
//const semilla = seed()

module.exports = seed
/* async function proof(){
    const db= await connect()
    const result = await db
    .collection("notifications")
    .find({})
    .toArray();
    console.log(result)
}

proof() */
