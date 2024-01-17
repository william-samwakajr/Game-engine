"use strict";
import * as core from "./core.js"

let mGLVertexBuffer = null;

function get() {
    return mGLVertexBuffer
};

let mVerticesOfSquare = [
    0.5, 0.5, 0.0, -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0, -0.5, -0.5, 0.0
];
/* 
allocate buffer in the GPU using gl context
load vertices to the allocated buffer in the GPU
*/
function init() {
    const gl = core.getGL();
    // ste A: creat a buffer on the GL context for our vertex positisons
    mGLVertexBuffer = gl.createBuffer();

    // step B: Activate vertexBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, mGLVertexBuffer);

    // step C: loads mVerticesOfSquare into the vertexBuffer
    gl.bufferData(gl.ARRAY_BUFFER,
        new Float32Array(mVerticesOfSquare), gl.STATIC_DRAW)
}
export { init, get }