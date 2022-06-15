/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Ball.ts":
/*!************************!*\
  !*** ./src/ts/Ball.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar math_1 = __webpack_require__(/*! ./helper/math */ \"./src/ts/helper/math.ts\");\n\nvar Ball = function () {\n  function Ball(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.generate();\n    this.draw();\n    this.animate();\n  }\n\n  Ball.prototype.generate = function () {\n    this.position = {\n      x: this.canvasElement.width / 2,\n      y: this.canvasElement.height / 2\n    };\n  };\n\n  Ball.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = settings_1.settings.ball.color[(0, math_1.random)(0, 4, false)];\n    this.ctx.arc(this.position.x, this.position.y, settings_1.settings.ball.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.ctx.restore();\n  };\n\n  Ball.prototype.animate = function () {\n    var _this = this;\n\n    window.addEventListener('keydown', function (key) {\n      if (key.code === 'Space' && _this.position.y > 300) {\n        _this.draw();\n\n        _this.position.y -= settings_1.settings.ball.bounceheight;\n        console.log(_this.position.y);\n      }\n    });\n    window.addEventListener('keyup', function (key) {\n      if (key.code === 'Space' && _this.position.y < 300) {\n        _this.draw();\n\n        _this.position.y += settings_1.settings.ball.bounceheight;\n        console.log(_this.position.y);\n      }\n    });\n  };\n\n  return Ball;\n}();\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQmFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUVBO0FBTUksZ0JBQVlBLGFBQVosRUFBOENDLEdBQTlDLEVBQTJFO0FBQ3ZFLFNBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLElBQUw7QUFDQSxTQUFLQyxPQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS0MsUUFBTCxHQUFnQjtBQUNaQyxPQUFDLEVBQUcsS0FBS1AsYUFBTCxDQUFtQlEsS0FBbkIsR0FBMkIsQ0FEbkI7QUFFWkMsT0FBQyxFQUFHLEtBQUtULGFBQUwsQ0FBbUJVLE1BQW5CLEdBQTRCO0FBRnBCLEtBQWhCO0FBSUgsR0FMRDs7QUFPQUw7QUFDSSxTQUFLSixHQUFMLENBQVNVLElBQVQ7QUFDQSxTQUFLVixHQUFMLENBQVNXLFNBQVQ7QUFDQSxTQUFLWCxHQUFMLENBQVNZLFNBQVQsR0FBcUJDLG9CQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsbUJBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxLQUFYLENBQXBCLENBQXJCO0FBQ0EsU0FBS2YsR0FBTCxDQUFTZ0IsR0FBVCxDQUFhLEtBQUtYLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRyxDQUE1QyxFQUErQ0ssb0JBQVNDLElBQVQsQ0FBY0csTUFBN0QsRUFBcUUsQ0FBckUsRUFBd0UsSUFBSUMsSUFBSSxDQUFDQyxFQUFqRjtBQUNBLFNBQUtuQixHQUFMLENBQVNvQixJQUFUO0FBQ0EsU0FBS3BCLEdBQUwsQ0FBU3FCLFNBQVQ7QUFDQSxTQUFLckIsR0FBTCxDQUFTc0IsT0FBVDtBQUNILEdBUkQ7O0FBVUFsQjtBQUFBOztBQUNJbUIsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDQyxHQUFELEVBQW1CO0FBQ2xELFVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixLQUFhLE9BQWIsSUFBd0JDLEtBQUksQ0FBQ3RCLFFBQUwsQ0FBY0csQ0FBZCxHQUFnQixHQUE1QyxFQUFnRDtBQUM1Q21CLGFBQUksQ0FBQ3pCLElBQUw7O0FBQ0F5QixhQUFJLENBQUN0QixRQUFMLENBQWNHLENBQWQsSUFBbUJLLG9CQUFTQyxJQUFULENBQWNjLFlBQWpDO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFJLENBQUN0QixRQUFMLENBQWNHLENBQTFCO0FBQ0g7QUFDSixLQU5EO0FBT0FlLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsR0FBRCxFQUFtQjtBQUNoRCxVQUFJQSxHQUFHLENBQUNDLElBQUosS0FBYSxPQUFiLElBQXdCQyxLQUFJLENBQUN0QixRQUFMLENBQWNHLENBQWQsR0FBZ0IsR0FBNUMsRUFBZ0Q7QUFDNUNtQixhQUFJLENBQUN6QixJQUFMOztBQUNBeUIsYUFBSSxDQUFDdEIsUUFBTCxDQUFjRyxDQUFkLElBQW1CSyxvQkFBU0MsSUFBVCxDQUFjYyxZQUFqQztBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBSSxDQUFDdEIsUUFBTCxDQUFjRyxDQUExQjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBZkQ7O0FBZ0JKO0FBQUMsQ0EvQ0Q7O0FBQWF1QixZQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQmFsbC50cz8wZjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7cmFuZG9tfSBmcm9tIFwiLi9oZWxwZXIvbWF0aFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGwge1xyXG4gICAgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6ICh0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggLyAyKSxcclxuICAgICAgICAgICAgeTogKHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgLyAyKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHNldHRpbmdzLmJhbGwuY29sb3JbcmFuZG9tKDAsNCxmYWxzZSldO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgc2V0dGluZ3MuYmFsbC5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChrZXk6IEtleWJvYXJkRXZlbnQpPT57XHJcbiAgICAgICAgICAgIGlmIChrZXkuY29kZSA9PT0gJ1NwYWNlJyAmJiB0aGlzLnBvc2l0aW9uLnk+MzAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHNldHRpbmdzLmJhbGwuYm91bmNlaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3NpdGlvbi55KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoa2V5OiBLZXlib2FyZEV2ZW50KT0+e1xyXG4gICAgICAgICAgICBpZiAoa2V5LmNvZGUgPT09ICdTcGFjZScgJiYgdGhpcy5wb3NpdGlvbi55PDMwMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBzZXR0aW5ncy5iYWxsLmJvdW5jZWhlaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24ueSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJjdHgiLCJnZW5lcmF0ZSIsImRyYXciLCJhbmltYXRlIiwiQmFsbCIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsImhlaWdodCIsInNhdmUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJzZXR0aW5nc18xIiwiYmFsbCIsImNvbG9yIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5IiwiY29kZSIsIl90aGlzIiwiYm91bmNlaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Ball.ts\n");

/***/ }),

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.canvasElement = document.querySelector('#my-canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.resizeCanva();\n    this.addEventListeners();\n    this.ball = new Ball_1.Ball(this.canvasElement, this.ctx);\n    this.drawText();\n  }\n\n  Canvas.prototype.resizeCanva = function () {\n    this.canvasElement.width = window.innerWidth;\n    this.canvasElement.height = window.innerHeight;\n  };\n\n  Canvas.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanva();\n    });\n  };\n\n  Canvas.prototype.drawText = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.font = '50px Poppins';\n    this.ctx.fillText('Press the Spacebar to begin', this.canvasElement.width / 2 - 350, this.canvasElement.height / 2 + 300);\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBRUE7QUFLSTtBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0MsV0FBTDtBQUNBLFNBQUtDLGlCQUFMO0FBQ0EsU0FBS0MsSUFBTCxHQUFXLElBQUlDLFdBQUosQ0FBUyxLQUFLUixhQUFkLEVBQTZCLEtBQUtHLEdBQWxDLENBQVg7QUFDQSxTQUFLTSxRQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS1YsYUFBTCxDQUFtQlcsS0FBbkIsR0FBMkJDLE1BQU0sQ0FBQ0MsVUFBbEM7QUFDQSxTQUFLYixhQUFMLENBQW1CYyxNQUFuQixHQUE0QkYsTUFBTSxDQUFDRyxXQUFuQztBQUNILEdBSEQ7O0FBS0FMO0FBQUE7O0FBQ0lFLFVBQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUM7QUFDN0JDLFdBQUksQ0FBQ1osV0FBTDtBQUNILEtBRkQ7QUFHSCxHQUpEOztBQU1BSztBQUNJLFNBQUtQLEdBQUwsQ0FBU2UsU0FBVCxHQUFxQixPQUFyQjtBQUNBLFNBQUtmLEdBQUwsQ0FBU2dCLElBQVQsR0FBZ0IsY0FBaEI7QUFDQSxTQUFLaEIsR0FBTCxDQUFTaUIsUUFBVCxDQUFrQiw2QkFBbEIsRUFBaUQsS0FBS3BCLGFBQUwsQ0FBbUJXLEtBQW5CLEdBQXlCLENBQXpCLEdBQTJCLEdBQTVFLEVBQWlGLEtBQUtYLGFBQUwsQ0FBbUJjLE1BQW5CLEdBQTBCLENBQTFCLEdBQTRCLEdBQTdHO0FBQ0gsR0FKRDs7QUFLSjtBQUFDLENBOUJEOztBQUFhTyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQ2FudmFzLnRzPzg1YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtCYWxsfSBmcm9tIFwiLi9CYWxsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFze1xyXG4gICAgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGJhbGw6IEJhbGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLmJhbGw9IG5ldyBCYWxsKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemVDYW52YSgpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUZXh0KCl7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJzUwcHggUG9wcGlucydcclxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgdGhlIFNwYWNlYmFyIHRvIGJlZ2luJywgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoLzItMzUwLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0LzIrMzAwKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJlc2l6ZUNhbnZhIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJiYWxsIiwiQmFsbF8xIiwiZHJhd1RleHQiLCJDYW52YXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsImZpbGxTdHlsZSIsImZvbnQiLCJmaWxsVGV4dCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canva = new Canvas_1.Canvas();\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBR0E7QUFHSTtBQUNJLFNBQUtBLEtBQUwsR0FBWSxJQUFJQyxlQUFKLEVBQVo7QUFDSDs7QUFDTDtBQUFDLENBTkQ7O0FBT0EsSUFBSUMsSUFBSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcclxuXHJcblxyXG5jbGFzcyBNYWlue1xyXG4gICAgY2FudmE6IENhbnZhcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhPSBuZXcgQ2FudmFzKCk7XHJcbiAgICB9XHJcbn1cclxubmV3IE1haW4oKTsiXSwibmFtZXMiOlsiY2FudmEiLCJDYW52YXNfMSIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/helper/math.ts":
/*!*******************************!*\
  !*** ./src/ts/helper/math.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvaGVscGVyL21hdGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFnQkEsTUFBaEIsQ0FBdUJDLEdBQXZCLEVBQW9DQyxHQUFwQyxFQUFpREMsSUFBakQsRUFBcUU7QUFBcEI7QUFBQUE7QUFBb0I7O0FBQ2pFLE1BQUlBLElBQUosRUFBUztBQUNMLFdBQU9DLElBQUksQ0FBQ0QsSUFBTCxDQUFVRixHQUFHLEdBQUdHLElBQUksQ0FBQ0osTUFBTCxNQUFnQkUsR0FBRyxHQUFHRCxHQUF0QixDQUFoQixDQUFQO0FBQ0g7O0FBQ0QsU0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsR0FBR0csSUFBSSxDQUFDSixNQUFMLE1BQWdCRSxHQUFHLEdBQUdELEdBQXRCLENBQWpCLENBQVA7QUFDSDs7QUFMREssY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL2hlbHBlci9tYXRoLnRzPzU0YmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGNlaWw6IGJvb2xlYW4gPSB0cnVlKXtcclxuICAgIGlmIChjZWlsKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG1pbiArIE1hdGgucmFuZG9tKCkgKihtYXggLSBtaW4pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKihtYXggLSBtaW4pKTtcclxufSJdLCJuYW1lcyI6WyJyYW5kb20iLCJtaW4iLCJtYXgiLCJjZWlsIiwiTWF0aCIsImZsb29yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/helper/math.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  background: {\n    color: 'black'\n  },\n  ball: {\n    radius: 40,\n    color: ['red', 'blue', 'yellow', 'pink'],\n    bounceheight: 100\n  },\n  text: {\n    color: 'white'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsWUFBVSxFQUFFO0FBQ1JDLFNBQUssRUFBRTtBQURDLEdBRFE7QUFJcEJDLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUcsRUFETDtBQUVKRixTQUFLLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixRQUFoQixFQUEwQixNQUExQixDQUZIO0FBR0pHLGdCQUFZLEVBQUU7QUFIVixHQUpjO0FBU3BCQyxNQUFJLEVBQUU7QUFDRkosU0FBSyxFQUFFO0FBREw7QUFUYyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIGJhbGw6IHtcclxuICAgICAgcmFkaXVzOiAgNDAsXHJcbiAgICAgIGNvbG9yOiBbJ3JlZCcsICdibHVlJywgJ3llbGxvdycsICdwaW5rJ10sXHJcbiAgICAgIGJvdW5jZWhlaWdodDogMTAwLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJiYWxsIiwicmFkaXVzIiwiYm91bmNlaGVpZ2h0IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;