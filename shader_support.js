"use strict" // variables must be dexlared before use

import * as core from "./core.js"; //access as a core module
import * as vertexBuffer from "./vertex_buffer.js" // vertexBuffer module

let mCompailedShader = null;
let mVertexPositionRef = null;

function loadAndCompileShader(id, shaderType) {
    let shaderSource = null,
        compiledShader = null;
    //step A: get the shader source from ther index.html
    const shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;
    const gl = core.getGl()

}