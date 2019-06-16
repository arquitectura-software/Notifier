"use strict";

require("@babel/polyfill");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("mongodb"),
    MongoClient = _require.MongoClient;

function connect() {
  return _connect.apply(this, arguments);
}

function _connect() {
  _connect = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var client, db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return MongoClient.connect("mongodb://localhost:27017", {
              useNewUrlParser: true
            });

          case 3:
            client = _context.sent;
            db = client.db("notifications");
            console.log("DB is connected");
            return _context.abrupt("return", db);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _connect.apply(this, arguments);
}

function seed() {
  return _seed.apply(this, arguments);
} //const semilla = seed()


function _seed() {
  _seed = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var db, isEmpty, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return connect();

          case 3:
            db = _context2.sent;
            _context2.next = 6;
            return db.collection("notifications").find({}).toArray();

          case 6:
            isEmpty = _context2.sent;

            if (!(isEmpty.length > 0)) {
              _context2.next = 10;
              break;
            }

            console.log('already seeded');
            return _context2.abrupt("return");

          case 10:
            _context2.next = 12;
            return db.collection('notifications').insertMany([{
              id_persona: 1,
              tipo: 'recordatorio',
              medio: 'correo',
              titulo: "Evento de Crossfit",
              descripcion: "No olvides asistir al evento de Crossfit del dia de hoy ",
              fecha_de_creacion: new Date('2019-07-04 07:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 2,
              tipo: 'promocion',
              medio: 'correo',
              titulo: "Descuentos Pull and Bear",
              descripcion: "50% de descuento en toda la tienda (aplican condiciones y restricciones).",
              fecha_de_creacion: new Date('2019-07-03 06:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 3,
              tipo: 'recordatorio',
              medio: 'correo',
              titulo: "Evento de Crossfit",
              descripcion: "No olvides asistir al evento de Crossfit del dia de hoy ",
              fecha_de_creacion: new Date('2019-07-04 07:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 4,
              tipo: 'informacion',
              medio: 'celular',
              titulo: "Destino de mañana",
              descripcion: "El dia de mañana estaremos en la ciudad de Paris, preparate porque la aventura te espera. ",
              fecha_de_creacion: new Date('2019-07-05 15:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 5,
              tipo: 'recordatorio',
              medio: 'celular',
              titulo: "Spa romántico",
              descripcion: "Te esperamos en el spa para tu cita de relajación junto a tu pareja.",
              fecha_de_creacion: new Date('2019-07-06 10:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 6,
              tipo: 'informacion',
              medio: 'correo',
              titulo: "Dato curioso",
              descripcion: 'Sabias que si los peces no hacen nada',
              fecha_de_creacion: new Date('2019-07-02 11:20:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 7,
              tipo: 'informacion',
              medio: 'correo',
              titulo: "Descuentos Pull and Bear",
              descripcion: "50% de descuento en toda la tienda (aplican condiciones y restricciones).",
              fecha_de_creacion: new Date('2019-07-03 06:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 8,
              tipo: 'informacion',
              medio: 'correo',
              titulo: "Descuentos Pull and Bear",
              descripcion: "50% de descuento en toda la tienda (aplican condiciones y restricciones).",
              fecha_de_creacion: new Date('2019-07-03 06:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 9,
              tipo: 'recordatorio',
              medio: 'celular',
              titulo: "Noche de peliculas, alista todo para evitar dormir esta noche.",
              descripcion: "Noche de peliculas, alista todo para evitar dormir esta noche.",
              fecha_de_creacion: new Date('2019-07-05 12:00:00'),
              fecha_de_modificacion: null
            }, {
              id_persona: 10,
              tipo: 'recordatorio',
              medio: 'correo',
              titulo: "Noche de peliculas, alista todo para evitar dormir esta noche.",
              descripcion: "Noche de peliculas, alista todo para evitar dormir esta noche.",
              fecha_de_creacion: new Date('2019-07-05 12:02:00'),
              fecha_de_modificacion: null
            }]);

          case 12:
            result = _context2.sent;
            console.log('Seed completed');
            return _context2.abrupt("return", result);

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return _seed.apply(this, arguments);
}

module.exports = seed;
/* async function proof(){
    const db= await connect()
    const result = await db
    .collection("notifications")
    .find({})
    .toArray();
    console.log(result)
}

proof() */