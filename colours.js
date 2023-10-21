/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shaders/fragment.frag":
/*!***********************************!*\
  !*** ./src/shaders/fragment.frag ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#version 300 es\\n\\n// fragment shaders don't have a default precision so we need\\n// to pick one. highp is a good default. It means \\\"high precision\\\"\\nprecision highp float;\\n\\nuniform vec2 u_resolution;\\nuniform float u_time;\\n\\n// we need to declare an output for the fragment shader\\nout vec4 outColor;\\nconst float PI = 3.14159265358979323846264338327950288;\\nconst float TWO_PI = PI * 2.0;\\nvec3 compColor;\\n\\nvec3 mod289(vec3 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec2 mod289(vec2 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec3 permute(vec3 x) {\\n  return mod289(((x*34.0)+10.0)*x);\\n}\\n\\nfloat snoise(vec2 v)\\n  {\\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\\n                      0.024390243902439); // 1.0 / 41.0\\n// First corner\\n  vec2 i  = floor(v + dot(v, C.yy) );\\n  vec2 x0 = v -   i + dot(i, C.xx);\\n\\n// Other corners\\n  vec2 i1;\\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\\n  //i1.y = 1.0 - i1.x;\\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\\n  // x1 = x0 - i1 + 1.0 * C.xx ;\\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\\n  vec4 x12 = x0.xyxy + C.xxzz;\\n  x12.xy -= i1;\\n\\n// Permutations\\n  i = mod289(i); // Avoid truncation effects in permutation\\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\\n\\t\\t+ i.x + vec3(0.0, i1.x, 1.0 ));\\n\\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\\n  m = m*m ;\\n  m = m*m ;\\n\\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\\n\\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\\n  vec3 h = abs(x) - 0.5;\\n  vec3 ox = floor(x + 0.5);\\n  vec3 a0 = x - ox;\\n\\n// Normalise gradients implicitly by scaling m\\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\\n\\n// Compute final noise value at P\\n  vec3 g;\\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\\n  return 100.0 * dot(m, g);\\n}\\n\\nvoid main() {\\n  vec2 normCoords = gl_FragCoord.xy / u_resolution;\\n  vec2 centerCoords = normCoords - vec2(0.5);\\n  centerCoords.x *= snoise(centerCoords + 0.054*u_time);\\n  float r = snoise(centerCoords) + 0.3;\\n  centerCoords.y *= snoise(centerCoords - 0.054*u_time);\\n  float g = snoise(centerCoords) + 0.3;\\n  centerCoords.y += centerCoords.x;\\n  float b = snoise(centerCoords + 0.054*u_time) + 0.3;\\n  outColor = vec4(r, g, b, 1);\\n}\");\n\n//# sourceURL=webpack://sine/./src/shaders/fragment.frag?");

/***/ }),

/***/ "./src/shaders/vertex.vert":
/*!*********************************!*\
  !*** ./src/shaders/vertex.vert ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#version 300 es\\n\\n// an attribute is an input (in) to a vertex shader.\\n// It will receive data from a buffer\\nin vec4 a_position;\\n\\n// all shaders have a main function\\nvoid main() {\\n  // gl_Position is a special variable a vertex shader\\n  // is responsible for setting\\n  gl_Position = a_position;\\n}\\n\");\n\n//# sourceURL=webpack://sine/./src/shaders/vertex.vert?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/* eslint-disable @typescript-eslint/no-unused-vars */\n// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-ignore\nconst vertex_vert_1 = __importDefault(__webpack_require__(/*! ./shaders/vertex.vert */ \"./src/shaders/vertex.vert\"));\n/* eslint-disable @typescript-eslint/no-unused-vars */\n// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-ignore\nconst fragment_frag_1 = __importDefault(__webpack_require__(/*! ./shaders/fragment.frag */ \"./src/shaders/fragment.frag\"));\nconst boilerplate_1 = __webpack_require__(/*! ./utils/boilerplate */ \"./src/utils/boilerplate.ts\");\nlet sigma = 0;\nconst main = () => {\n    const glrc = (0, boilerplate_1.getGLRenderingContext)('mainCanvas');\n    if (!glrc) {\n        return;\n    }\n    // create GLSL shaders, upload the GLSL source, compile the shaders\n    const vertexShader = (0, boilerplate_1.createShader)(glrc, glrc.VERTEX_SHADER, vertex_vert_1.default);\n    const fragmentShader = (0, boilerplate_1.createShader)(glrc, glrc.FRAGMENT_SHADER, fragment_frag_1.default);\n    if (!vertexShader || !fragmentShader) {\n        return;\n    }\n    const program = (0, boilerplate_1.createAndLinkProgram)(glrc, [vertexShader, fragmentShader]);\n    if (!program) {\n        console.error('Could not create program');\n        return;\n    }\n    let then = 0;\n    requestAnimationFrame(drawScene);\n    function drawScene(now) {\n        // Convert to seconds\n        now *= 0.001;\n        // Subtract the previous time from the current time\n        const deltaTime = now - then;\n        // Remember the current time for the next frame.\n        then = now;\n        if (glrc && program) {\n            // lookup attribute\n            const positionAttributeLocation = glrc.getAttribLocation(program, 'a_position');\n            const deltaTimeUniformLocation = glrc.getUniformLocation(program, 'u_time');\n            const resolutionUniformLocation = glrc.getUniformLocation(program, 'u_resolution');\n            // make a buffer\n            const positionBuffer = glrc.createBuffer();\n            glrc.bindBuffer(glrc.ARRAY_BUFFER, positionBuffer);\n            // three 2d points\n            // prettier-ignore\n            const positions = [\n                -1, -1,\n                1, -1,\n                1, 1,\n                -1, -1,\n                -1, 1,\n                1, 1,\n            ];\n            glrc.bufferData(glrc.ARRAY_BUFFER, new Float32Array(positions), glrc.STATIC_DRAW);\n            glrc.enableVertexAttribArray(positionAttributeLocation);\n            const size = 2; // 2 components per iteration\n            const type = glrc.FLOAT; // the data is 32bit floats\n            const normalize = false; // don't normalize the data\n            const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position\n            const offset = 0; // start at the beginning of the buffer\n            glrc.vertexAttribPointer(positionAttributeLocation, 2, glrc.FLOAT, false, 0, 0);\n            (0, boilerplate_1.resizeCanvasToDisplaySize)(glrc.canvas);\n            glrc.viewport(0, 0, glrc.canvas.width, glrc.canvas.height);\n            glrc.clearColor(0, 0, 0, 0);\n            glrc.clear(glrc.COLOR_BUFFER_BIT);\n            glrc.useProgram(program);\n            glrc.uniform1f(deltaTimeUniformLocation, sigma);\n            sigma = sigma + 1.0 * deltaTime;\n            glrc.uniform2fv(resolutionUniformLocation, [\n                window.innerWidth,\n                window.innerHeight,\n            ]);\n            glrc.drawArrays(glrc.TRIANGLES, 0, 6);\n            // Call drawScene again next frame\n            requestAnimationFrame(drawScene);\n        }\n    }\n};\nmain();\n\n\n//# sourceURL=webpack://sine/./src/main.ts?");

/***/ }),

/***/ "./src/utils/boilerplate.ts":
/*!**********************************!*\
  !*** ./src/utils/boilerplate.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// code from https://webgl2fundamentals.org/webgl/lessons/webgl-fundamentals.html\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.resizeCanvasToDisplaySize = exports.getGLRenderingContext = exports.createAndLinkProgram = exports.createShader = void 0;\nconst createShader = (gl, type, source) => {\n    const shader = gl.createShader(type);\n    if (!shader) {\n        console.error('Could not create shader');\n        return null;\n    }\n    gl.shaderSource(shader, source);\n    gl.compileShader(shader);\n    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n    if (!success) {\n        // handle error\n        console.error(gl.getShaderInfoLog(shader));\n        gl.deleteShader(shader);\n        return null;\n    }\n    return shader;\n};\nexports.createShader = createShader;\n// link shaders\nconst createAndLinkProgram = (gl, shaders) => {\n    const program = gl.createProgram();\n    if (!program) {\n        console.error('Could not create program');\n        return null;\n    }\n    shaders.forEach((shader) => gl.attachShader(program, shader));\n    gl.linkProgram(program);\n    const success = gl.getProgramParameter(program, gl.LINK_STATUS);\n    if (!success) {\n        // handle error\n        console.error(gl.getProgramInfoLog(program));\n        gl.deleteProgram(program);\n        return null;\n    }\n    return program;\n};\nexports.createAndLinkProgram = createAndLinkProgram;\nconst getGLRenderingContext = (id) => {\n    // Get A WebGL context\n    const canvas = document.getElementById(id);\n    if (!canvas) {\n        console.error('Could not get canvas. id = ', id);\n        return null;\n    }\n    const glRenderingContext = canvas.getContext('webgl2');\n    if (!glRenderingContext) {\n        console.error('webgl2 not available');\n        return null;\n    }\n    return glRenderingContext;\n};\nexports.getGLRenderingContext = getGLRenderingContext;\nconst resizeCanvasToDisplaySize = (canvas) => {\n    // Lookup the size the browser is displaying the canvas in CSS pixels.\n    const displayWidth = canvas.clientWidth;\n    const displayHeight = canvas.clientHeight;\n    // Check if the canvas is not the same size.\n    const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;\n    if (needResize) {\n        // Make the canvas the same size\n        canvas.width = displayWidth;\n        canvas.height = displayHeight;\n    }\n    return needResize;\n};\nexports.resizeCanvasToDisplaySize = resizeCanvasToDisplaySize;\n\n\n//# sourceURL=webpack://sine/./src/utils/boilerplate.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;