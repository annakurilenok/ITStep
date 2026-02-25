/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/oop.ts"
/*!***********************!*\
  !*** ./src/js/oop.ts ***!
  \***********************/
() {

eval("{var __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n    return extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar User = /** @class */function () {\n  function User(name, gender, age) {\n    this.name = name;\n    this._age = age;\n    this.gender = gender;\n  }\n  User.prototype.showInfo = function () {\n    console.log(\"My name is \".concat(this.name, \". I'm \").concat(this._age, \" years old\"));\n  };\n  User.prototype.toString = function () {\n    return \"\".concat(this.name, \": \").concat(this._age);\n  };\n  Object.defineProperty(User.prototype, \"setAge\", {\n    set: function (n) {\n      this._age = n;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(User.prototype, \"age\", {\n    get: function () {\n      return this._age;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return User;\n}();\nvar Employee = /** @class */function (_super) {\n  __extends(Employee, _super);\n  function Employee(name, gender, age) {\n    return _super.call(this, name, gender, age) || this;\n  }\n  Employee.prototype.toString = function () {\n    console.log(_super.prototype.toString.call(this));\n    return \"\".concat(this.name, \": \").concat(this._age, \": \").concat(this.company);\n  };\n  Employee.calculateYears = function (age) {\n    return Employee.retirementAge - age;\n  };\n  Employee.retirementAge = 65;\n  return Employee;\n}(User);\nvar user = new User('Ivan', 'male');\nvar worker = new Employee('Anna', 'male', 45);\nworker.company = 'Amazon';\n// user.name = 'Ivan';\n// user.age = 25;\nconsole.log(user.age);\nuser.showInfo();\nconsole.log(user.toString());\nconsole.log(worker.toString());\nvar Figure = /** @class */function () {\n  function Figure() {}\n  return Figure;\n}();\nvar Rectangle = /** @class */function (_super) {\n  __extends(Rectangle, _super);\n  function Rectangle(width, height) {\n    var _this = _super.call(this) || this;\n    _this.width = width;\n    _this.height = height;\n    return _this;\n  }\n  Rectangle.prototype.getArea = function () {\n    return this.width * this.height;\n  };\n  return Rectangle;\n}(Figure);\nvar rect = new Rectangle(100, 30);\nconsole.log(\"Rectangle area = \".concat(rect.getArea()));\nconsole.log(Employee.calculateYears(34));\nvar employee = {\n  id: 1,\n  name: 'Mia'\n};\nvar Vehicle = /** @class */function () {\n  function Vehicle(id, name, weight) {\n    this.id = 1;\n    this.name = 'Ford';\n    this.id = id;\n    this.name = name;\n    this.weight = weight;\n  }\n  Vehicle.prototype.showInfo = function () {\n    console.log(\"\".concat(this.name));\n  };\n  return Vehicle;\n}();\n// let car1 = new Sedan(1, 'Ford', 4712);\nvar car2 = new Vehicle(2, 'Mersedes', 3466);\nfunction showCarInfo(car) {\n  car.showInfo();\n}\n// showCarInfo(car1);\nshowCarInfo(car2);\n\n//# sourceURL=webpack://quickstart/./src/js/oop.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/oop.ts"].call(__webpack_exports__);
/******/ 	
/******/ })()
;