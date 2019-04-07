var zmov2 = -6.0;


function initBuffers3(gl) {

 const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the cube.

  var positions = [

  // -2,  0.0, -5.0,
  // -2,  0.0,  5.0,
  //  2,  0.0,  5.0,
  //  2,  0.0, -5.0,

  // -2 -3,  0.0, -5.0,
  // -2 -3,  0.0,  5.0,
  //  2 -3,  0.0,  5.0,
  //  2 -3,  0.0, -5.0,

  // -2 +3,  0.0, -5.0,
  // -2 +3,  0.0,  5.0,
  //  2 +3,  0.0,  5.0,
  //  2 +3,  0.0, -5.0,

  -3.5,  -2, -5.0,
  -3.5,  -2,  5.0,
  -3.5,  0,  5.0,
  -3.5,  0, -5.0,

   -3.5,  -2-2, -5.0,
  -3.5,  -2-2,  5.0,
  -3.5,  0-2,  5.0,
  -3.5,  0-2, -5.0,

   -3.5,  -2-4, -5.0,
  -3.5,  -2-4,  5.0,
  -3.5,  0-4,  5.0,
  -3.5,  0-4, -5.0,

  3.5,  -2-0, -5.0,
  3.5,  -2-0,  5.0,
  3.5,  0-0,  5.0,
  3.5,  0-0, -5.0,

  3.5,  -2-2, -5.0,
  3.5,  -2-2,  5.0,
  3.5,  0-2,  5.0,
  3.5,  0-2, -5.0,

  3.5,  -2-4, -5.0,
  3.5,  -2-4,  5.0,
  3.5,  0-4,  5.0,
  3.5,  0-4, -5.0,
  
  ];
  for (var i = 0; i < 100; i++) {
    var dec = 10*(i+1);
    for (var j = 0; j < 72; j += 3) {
      positions.push(positions[j], positions[j + 1], positions[j + 2] - dec);
    }
  }

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Now set up the colors for the faces. We'll use solid colors
  // for each face.

 const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  var textureCoordinates = [
    // // Front
    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,
    // // Back
    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,
    // Top
    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,

    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,

    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,

    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,

    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,

    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,

    // Bottom
    // 0.0,  0.0,
    // 1.0,  0.0,
    // 1.0,  1.0,
    // 0.0,  1.0,
    // // Right
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // // Left
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
  ];
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 48; j += 2) {
      textureCoordinates.push(textureCoordinates[j], textureCoordinates[j + 1]);
    }
  }

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);

  // Build the element array buffer; this specifies the indices
  // into the vertex arrays for each face's vertices.

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  var indices = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,   // left
    // 12 + 12, 13 + 12, 14 + 12,     12 + 12, 14 + 12, 15 + 12,   // bottom
    // 16 + 12, 17 + 12, 18 + 12,     16 + 12, 18 + 12, 19 + 12,   // right
    // 20 + 12, 21 + 12, 22 + 12,     20 + 12, 22 + 12, 23 + 12,
  ];
  for (var i = 0; i < 100; i++) {
    var addin = 24*(i+1);
    for (var j = 0 ; j < 36 ; j++) {
      indices.push(indices[j]+addin);
    }
  }

  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const vertexNormals = [
    // Front
    //  0.0,  0.0,  1.0,
    //  0.0,  0.0,  1.0,
    //  0.0,  0.0,  1.0,
    //  0.0,  0.0,  1.0,

    // // Back
    //  0.0,  0.0, -1.0,
    //  0.0,  0.0, -1.0,
    //  0.0,  0.0, -1.0,
    //  0.0,  0.0, -1.0,

    // // Top
    //  0.0,  1.0,  0.0,
    //  0.0,  1.0,  0.0,
    //  0.0,  1.0,  0.0,
    //  0.0,  1.0,  0.0,

    // // Bottom
    //  0.0, -1.0,  0.0,
    //  0.0, -1.0,  0.0,
    //  0.0, -1.0,  0.0,
    //  0.0, -1.0,  0.0,

    // Right
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

    // Left
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,

    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,

    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
  ];

  for (var i = 0; i < 100; i++) {
    var dec = 10*(i+1);
    for (var j = 0; j < 72; j += 3) {
      vertexNormals.push(vertexNormals[j], vertexNormals[j + 1], vertexNormals[j + 2]);
    }
  }

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
                gl.STATIC_DRAW);


  // Now send the element array to GL

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

   return {
    position: positionBuffer,
    normal: normalBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

//
// Draw the scene.
//
function drawScene3(gl, programInfo, buffers, texture, deltaTime) {

  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 1.0;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [0, 2,repz + zmov]);  // amount to translate

  //Write your code to Rotate the cube here//
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    cubeRot1,     // amount to rotate in radians
    [0, 1, 0]);

  const normalMatrix = mat4.create();
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute
  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL how to pull out the colors from the color buffer
  // into the vertexColor attribute.
  {
    const num = 2; // every coordinate composed of 2 values
    const type = gl.FLOAT; // the data in the buffer is 32 bit float
    const normalize = false; // don't normalize
    const stride = 0; // how many bytes to get from one set to the next
    const offset = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, num, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
  }

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexNormal,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexNormal);
  }

  // Tell WebGL we want to affect texture unit 0
  gl.activeTexture(gl.TEXTURE0);

  // Bind the texture to texture unit 0
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Tell the shader we bound the texture to texture unit 0
  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

  // Tell WebGL which indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.normalMatrix,
      false,
      normalMatrix);

  {
    const vertexCount = 3636;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
 

  // Update the rotation for the next draw

  //cubeRot1 += deltaTime;
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
