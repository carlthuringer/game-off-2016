/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:9000/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const electron_1 = __webpack_require__(4);
	const Main_1 = __webpack_require__(5);
	Main_1.default.main(electron_1.app, electron_1.BrowserWindow);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	class Main {
	    static onWindowAllClosed() {
	        if (process.platform !== 'darwin')
	            Main.application.quit();
	    }
	    static onClose() {
	        // Dereference the window object
	        Main.mainWindow = null;
	    }
	    static onReady() {
	        Main.mainWindow = new Main.BrowserWindow({ width: 1000, height: 750 });
	        Main.mainWindow.loadURL('file://' + __dirname + '/index.html');
	        Main.mainWindow.on('closed', Main.onClose);
	    }
	    static main(app, browserWindow) {
	        // we pass the Electron.App object and the
	        // Electron.BrowserWindow into this function
	        // so this class has no dependencies.  This
	        // makes the code easier to write tests for
	        Main.BrowserWindow = browserWindow;
	        Main.application = app;
	        Main.application.on('window-all-closed', Main.onWindowAllClosed);
	        Main.application.on('ready', Main.onReady);
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Main;


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map