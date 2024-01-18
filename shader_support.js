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

    //Step B: Create shader based on type : vertex or fragment
    compiledShader = gl.createdShader(shaderType);

    //Step C: Compile the created shader
    gl.shaderSource(compiledShader, shaderSource);
    gl.compiledShader(compiledShader);

    //Step D: check for the errors and return result (null if error)
    //the log info is how shader compilation errors are displayed.
    //this is useful for debugging the shaders.
    if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
        throw new Error("A shader compiled error occurred: " +
            gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
}