 "use strict";
 import * as vertexBuffer from "./vertex_buffer.js";
 import * as simpleShader from "./shader_support.js";
 let mGL = null;

 function getGL() {
     return mGL;
 };

 /*
 initialises canvas element to canvas variable
 */
 function initWebGl(htmlCanvasID) {
     const canvas = document.getElementById(htmlCanvasID);
     //initialises mGl variable to webgl2 context of canvas element
     mGL = canvas.getContext('webgl2');

     if (mGL === null) {
         document.write("<br><b>WebGL 2 is not supported!</b>");
         return;
     }
     // colors canvas
     mGL.clearColor(0.0, 0.8, 0.0, 1.0);

 }

 //  clears the canvas element and fills it with color
 function clearCanvas() {
     mGL.clear(mGL.COLOR_BUFFER_BIT);
 }

 window.onload = function() {
     initWebGl('board')
     clearCanvas()
 }
 //joan was here
 //Chisela was here
 