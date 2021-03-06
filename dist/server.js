"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _notificationRoutes = _interopRequireDefault(require("./routes/notificationRoutes"));

var _seed = _interopRequireDefault(require("./seed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])(); // Routes

//settings
app.set("port", process.env.PORT || 3002); //Middlewares

(0, _seed["default"])();
app.use((0, _express.json)()); //Routes

app.use("/notifications", _notificationRoutes["default"]);
var _default = app;
exports["default"] = _default;