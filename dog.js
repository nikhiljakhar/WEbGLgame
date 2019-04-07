var djump = 0;
var dposy = -2;
var djumps = 0.1;
var legrot = 0;
var legrot2 = 0;
var legrc = 0.07;
var legrc2 = 0.07;

function initBuffersdfb(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.15, 0.2,  0.2,
     0.15, 0.2,  0.2,
     0.15,  0.4,  0.2,
    -0.15,  0.4,  0.2,
    
    // Back face
    -0.15, 0.2, -0.2,
    -0.15,  0.4, -0.2,
     0.15,  0.4, -0.2,
     0.15, 0.2, -0.2,
    
    // Top face
    -0.15,  0.4, -0.2,
    -0.15,  0.4,  0.2,
     0.15,  0.4,  0.2,
     0.15,  0.4, -0.2,
    
    // Bottom face
    -0.15, 0.2, -0.2,
     0.15, 0.2, -0.2,
     0.15, 0.2,  0.2,
    -0.15, 0.2,  0.2,
    
    // Right face
     0.15, 0.2, -0.2,
     0.15,  0.4, -0.2,
     0.15,  0.4,  0.2,
     0.15, 0.2,  0.2,
    
    // Left face
    -0.15, 0.2, -0.2,
    -0.15, 0.2,  0.2,
    -0.15,  0.4,  0.2,
    -0.15,  0.4, -0.2,

    // Front face
    -0.1, 0.35,  -0.4,
     0.1, 0.35,  -0.4,
     0.1,  0.5,  -0.4,
    -0.1,  0.5,  -0.4,
    
    // Back face
    -0.1, 0.35, -0.18,
    -0.1,  0.5, -0.18,
     0.1,  0.5, -0.18,
     0.1, 0.35, -0.18,
    
    // Top face
    -0.1,  0.5, -0.18,
    -0.1,  0.5,  -0.4,
     0.1,  0.5,  -0.4,
     0.1,  0.5, -0.18,
    
    // Bottom face
    -0.1, 0.35, -0.18,
     0.1, 0.35, -0.18,
     0.1, 0.35,  -0.4,
    -0.1, 0.35,  -0.4,
    
    // Right face
     0.1, 0.35, -0.18,
     0.1,  0.5, -0.18,
     0.1,  0.5,  -0.4,
     0.1, 0.35,  -0.4,
    
    // Left face
    -0.1, 0.35, -0.18,
    -0.1, 0.35,  -0.4,
    -0.1,  0.5,  -0.4,
    -0.1,  0.5, -0.18,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Back
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Right
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Left
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,

    // Front
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Back
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Right
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Left
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  const indices = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,
    0 + 24,  1+ 24,  2+ 24,      0+ 24,  2+ 24,  3+ 24,    // front
    4+ 24,  5+ 24,  6+ 24,      4+ 24,  6+ 24,  7+ 24,    // back
    8+ 24,  9+ 24,  10+ 24,     8+ 24,  10+ 24, 11+ 24,   // top
    12+ 24, 13+ 24, 14+ 24,     12+ 24, 14+ 24, 15+ 24,   // bottom
    16+ 24, 17+ 24, 18+ 24,     16+ 24, 18+ 24, 19+ 24,   // right
    20+ 24, 21+ 24, 22+ 24,     20+ 24, 22+ 24, 23+ 24,   // left
  ];

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

   const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const vertexNormals = [
    // Front
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,

    // Back
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,

    // Top
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,

    // Bottom
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,

    // Right
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

    // Left
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    // Front
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,

    // Back
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,

    // Top
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,

    // Bottom
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,

    // Right
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

    // Left
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
                gl.STATIC_DRAW);

   return {
    position: positionBuffer,
    normal: normalBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function drawScenedfb(gl, programInfo, buffers, texture, deltaTime) {

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
  // if(posz + zmov2 > 0)
  // {
  //   zmov2 = 0;
  // }

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [player.posx, dposy, player.posz+2.2]);  // amount to translate

  //Write your code to Rotate the cube here//
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    0,     // amount to rotate in radians
    [0, 1, 0]);



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
  const normalMatrix = mat4.create();
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

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
    const vertexCount = 72;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
  if(djump == 1)
  {
    dposy += djumps;
    djumps -= 0.01;
    if(dposy < -2)
    {
      djump = 0;
      djumps = 0.1;
      dposy = -2;
    }
  }
  //zmov2 += 0.016;

  // Update the rotation for the next draw
}

function initBuffersdlb(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.1, 0,  0.18,
    -0.17, 0,  0.18,
    -0.17,  -0.3,  0.18,
    -0.1,  -0.3,  0.18,
    
    // Back face
    -0.1, 0, 0.11,
    -0.1,  -0.3, 0.11,
     -0.17,  -0.3, 0.11,
     -0.17, 0, 0.11,
    
    // Top face
    -0.1, - 0.3, 0.11,
    -0.1,  -0.3,  0.18,
     -0.17,  -0.3,  0.18,
     -0.17,  -0.3, 0.11,
    
    // Bottom face
    -0.1, 0, 0.11,
     -0.17, 0, 0.11,
     -0.17, 0,  0.18,
    -0.1, 0,  0.18,
    
    // Right face
     -0.17, 0, 0.11,
     -0.17,  -0.3, 0.11,
     -0.17,  -0.3,  0.18,
     -0.17, 0,  0.18,
    
    // Left face
    -0.1, 0, 0.11,
    -0.1, 0,  0.18,
    -0.1,  -0.3,  0.18,
    -0.1,  -0.3, 0.11,

    // Front face
    0.1, 0,  0.18,
    0.17, 0,  0.18,
    0.17,  -0.3,  0.18,
    0.1,  -0.3,  0.18,
    
    // Back face
    0.1, 0, 0.11,
    0.1,  -0.3, 0.11,
    0.17,  -0.3, 0.11,
    0.17, 0, 0.11,
    
    // Top face
    0.1, - 0.3, 0.11,
    0.1,  -0.3,  0.18,
    0.17,  -0.3,  0.18,
    0.17,  -0.3, 0.11,
    
    // Bottom face
    0.1, 0, 0.11,
    0.17, 0, 0.11,
    0.17, 0,  0.18,
    0.1, 0,  0.18,
    
    // Right face
     0.17, 0, 0.11,
     0.17,  -0.3, 0.11,
     0.17,  -0.3,  0.18,
     0.17, 0,  0.18,
    
    // Left face
    0.1, 0, 0.11,
    0.1, 0,  0.18,
    0.1,  -0.3,  0.18,
    0.1,  -0.3, 0.11,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Back
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Right
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Left
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,

    // Front
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Back
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Right
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,
    // Left
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  const indices = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,
    0 + 24,  1+ 24,  2+ 24,      0+ 24,  2+ 24,  3+ 24,    // front
    4+ 24,  5+ 24,  6+ 24,      4+ 24,  6+ 24,  7+ 24,    // back
    8+ 24,  9+ 24,  10+ 24,     8+ 24,  10+ 24, 11+ 24,   // top
    12+ 24, 13+ 24, 14+ 24,     12+ 24, 14+ 24, 15+ 24,   // bottom
    16+ 24, 17+ 24, 18+ 24,     16+ 24, 18+ 24, 19+ 24,   // right
    20+ 24, 21+ 24, 22+ 24,     20+ 24, 22+ 24, 23+ 24,   // left
  ];

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

   const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const vertexNormals = [
    // Front
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,

    // Back
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,

    // Top
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,

    // Bottom
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,

    // Right
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

    // Left
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    // Front
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,

    // Back
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,

    // Top
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,

    // Bottom
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,

    // Right
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

    // Left
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
                gl.STATIC_DRAW);

   return {
    position: positionBuffer,
    normal: normalBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function drawScenedlb(gl, programInfo, buffers, texture, deltaTime) {

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
  // if(posz + zmov2 > 0)
  // {
  //   zmov2 = 0;
  // }
  legrot += legrc;
  if(legrot > 0.7 || legrot < -0.7)
  {
    legrc = -legrc;
  }
  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [player.posx, dposy + 0.3, player.posz+2.2]);  // amount to translate

  //Write your code to Rotate the cube here//
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    legrot,     // amount to rotate in radians
    [1, 0, 0]);



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
  const normalMatrix = mat4.create();
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

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
    const vertexCount = 72;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
  //zmov2 += 0.016;

  // Update the rotation for the next draw
}

function drawScenedlf(gl, programInfo, buffers, texture, deltaTime) {

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
  // if(posz + zmov2 > 0)
  // {
  //   zmov2 = 0;
  // }
  legrot2 -= legrc2;
  if(legrot2 > 0.7 || legrot2 < -0.7)
  {
    legrc2 = -legrc2;
  }
  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [player.posx, dposy + 0.3, player.posz+1.9]);  // amount to translate

  //Write your code to Rotate the cube here//
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    legrot2,     // amount to rotate in radians
    [1, 0, 0]);



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
  const normalMatrix = mat4.create();
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

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
    const vertexCount = 72;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
  //zmov2 += 0.016;

  // Update the rotation for the next draw
}

