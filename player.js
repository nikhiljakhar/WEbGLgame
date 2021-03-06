var flag = 0;
var mop = 1;
var freefall = 0.0;
var rhjumps = 0.18;
var rhjump = 0;
var skaterot = 0;

var gt = -0.01;

var player = {
  posx:0,
  posy:-2,
  posz:-8,
  rotx: 0.0,
  roty: 0.0,
  rotz: 0.0,
}

var jump = {
  speed:0.18,
  flag:0,
}

var left = {
  dist:0,
  speed:0,
  flag:0,
}

var right = {
  dist:0,
  speed:0,
  flag:0,
}

var down = {
  rot:0,
  speed:0,
  flag:0,
}

function initBuffers(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.3, -0,  0.5,
     0.3, -0,  0.5,
     0.3,  0.1,  0.5,
    -0.3,  0.1,  0.5,
    
    // Back face
    -0.3, -0, -0.5,
    -0.3,  0.1, -0.5,
     0.3,  0.1, -0.5,
     0.3, -0, -0.5,
    
    // Top face
    -0.3,  0.1, -0.5,
    -0.3,  0.1,  0.5,
     0.3,  0.1,  0.5,
     0.3,  0.1, -0.5,
    
    // Bottom face
    -0.3, -0, -0.5,
     0.3, -0, -0.5,
     0.3, -0,  0.5,
    -0.3, -0,  0.5,
    
    // Right face
     0.3, -0, -0.5,
     0.3,  0.1, -0.5,
     0.3,  0.1,  0.5,
     0.3, -0,  0.5,
    
    // Left face
    -0.3, -0, -0.5,
    -0.3, -0,  0.5,
    -0.3,  0.1,  0.5,
    -0.3,  0.1, -0.5,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
   0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
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
    20, 21, 22,     20, 22, 23,   // left
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

function initBuffersb(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.14, 0.6+0.4,  0.2,
     0.14, 0.6+0.4,  0.2,
     0.14,  0.1+0.4,  0.2,
    -0.14,  0.1+0.4,  0.2,
    
    // Back face
    -0.14, 0.6+0.4, -0.2,
    -0.14,  0.1+0.4, -0.2,
     0.14,  0.1+0.4, -0.2,
     0.14, 0.6+0.4, -0.2,
    
    // Top face
    -0.14,  0.1+0.4, -0.2,
    -0.14,  0.1+0.4,  0.2,
     0.14,  0.1+0.4,  0.2,
     0.14,  0.1+0.4, -0.2,
    
    // Bottom face
    -0.14, 0.6+0.4, -0.2,
     0.14, 0.6+0.4, -0.2,
     0.14, 0.6+0.4,  0.2,
    -0.14, 0.6+0.4,  0.2,
    
    // Right face
     0.14, 0.6+0.4, -0.2,
     0.14,  0.1+0.4, -0.2,
     0.14,  0.1+0.4,  0.2,
     0.14, 0.6+0.4,  0.2,
    
    // Left face
    -0.14, 0.6+0.4, -0.2,
    -0.14, 0.6+0.4,  0.2,
    -0.14,  0.1+0.4,  0.2,
    -0.14,  0.1+0.4, -0.2,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
   0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
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
    20, 21, 22,     20, 22, 23,   // left
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

function initBuffersl1(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.1, 0.5,  0.1-0.15,
     0.1, 0.5,  0.1-0.15,
     0.1,  0.1,  0.1-0.15,
    -0.1,  0.1,  0.1-0.15,
    
    // Back face
    -0.1, 0.5, -0.1-0.15,
    -0.1,  0.1, -0.1-0.15,
     0.1,  0.1, -0.1-0.15,
     0.1, 0.5, -0.1-0.15,
    
    // Top face
    -0.1,  0.1, -0.1-0.15,
    -0.1,  0.1,  0.1-0.15,
     0.1,  0.1,  0.1-0.15,
     0.1,  0.1, -0.1-0.15,
    
    // Bottom face
    -0.1, 0.5, -0.1-0.15,
     0.1, 0.5, -0.1-0.15,
     0.1, 0.5,  0.1-0.15,
    -0.1, 0.5,  0.1-0.15,
    
    // Right face
     0.1, 0.5, -0.1-0.15,
     0.1,  0.1, -0.1-0.15,
     0.1,  0.1,  0.1-0.15,
     0.1, 0.5,  0.1-0.15,
    
    // Left face
    -0.1, 0.5, -0.1-0.15,
    -0.1, 0.5,  0.1-0.15,
    -0.1,  0.1,  0.1-0.15,
    -0.1,  0.1, -0.1-0.15,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
   0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
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
    20, 21, 22,     20, 22, 23,   // left
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

function initBuffersl2(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.1, 0.5,  0.1+0.15,
     0.1, 0.5,  0.1+0.15,
     0.1,  0.1,  0.1+0.15,
    -0.1,  0.1,  0.1+0.15,
    
    // Back face
    -0.1, 0.5, -0.1+0.15,
    -0.1,  0.1, -0.1+0.15,
     0.1,  0.1, -0.1+0.15,
     0.1, 0.5, -0.1+0.15,
    
    // Top face
    -0.1,  0.1, -0.1+0.15,
    -0.1,  0.1,  0.1+0.15,
     0.1,  0.1,  0.1+0.15,
     0.1,  0.1, -0.1+0.15,
    
    // Bottom face
    -0.1, 0.5, -0.1+0.15,
     0.1, 0.5, -0.1+0.15,
     0.1, 0.5,  0.1+0.15,
    -0.1, 0.5,  0.1+0.15,
    
    // Right face
     0.1, 0.5, -0.1+0.15,
     0.1,  0.1, -0.1+0.15,
     0.1,  0.1,  0.1+0.15,
     0.1, 0.5,  0.1+0.15,
    
    // Left face
    -0.1, 0.5, -0.1+0.15,
    -0.1, 0.5,  0.1+0.15,
    -0.1,  0.1,  0.1+0.15,
    -0.1,  0.1, -0.1+0.15,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
   0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
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
    20, 21, 22,     20, 22, 23,   // left
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

function initBuffersh1(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.08, 0.5+0.5,  0.1+0.25,
     0.08, 0.5+0.5,  0.1+0.25,
     0.08,  0.1+0.5,  0.1+0.25,
    -0.08,  0.1+0.5,  0.1+0.25,
    
    // Back face
    -0.08, 0.5+0.5, -0.1+0.25,
    -0.08,  0.1+0.5, -0.1+0.25,
     0.08,  0.1+0.5, -0.1+0.25,
     0.08, 0.5+0.5, -0.1+0.25,
    
    // Top face
    -0.08,  0.1+0.5, -0.1+0.25,
    -0.08,  0.1+0.5,  0.1+0.25,
     0.08,  0.1+0.5,  0.1+0.25,
     0.08,  0.1+0.5, -0.1+0.25,
    
    // Bottom face
    -0.08, 0.5+0.5, -0.1+0.25,
     0.08, 0.5+0.5, -0.1+0.25,
     0.08, 0.5+0.5,  0.1+0.25,
    -0.08, 0.5+0.5,  0.1+0.25,
    
    // Right face
     0.08, 0.5+0.5, -0.1+0.25,
     0.08,  0.1+0.5, -0.1+0.25,
     0.08,  0.1+0.5,  0.1+0.25,
     0.08, 0.5+0.5,  0.1+0.25,
    
    // Left face
    -0.08, 0.5+0.5, -0.1+0.25,
    -0.08, 0.5+0.5,  0.1+0.25,
    -0.08,  0.1+0.5,  0.1+0.25,
    -0.08,  0.1+0.5, -0.1+0.25,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
   0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
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
    20, 21, 22,     20, 22, 23,   // left
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

function initBuffersh2(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.08, 0.5+0.5,  0.1-0.25,
     0.08, 0.5+0.5,  0.1-0.25,
     0.08,  0.1+0.5,  0.1-0.25,
    -0.08,  0.1+0.5,  0.1-0.25,
    
    // Back face
    -0.08, 0.5+0.5, -0.1-0.25,
    -0.08,  0.1+0.5, -0.1-0.25,
     0.08,  0.1+0.5, -0.1-0.25,
     0.08, 0.5+0.5, -0.1-0.25,
    
    // Top face
    -0.08,  0.1+0.5, -0.1-0.25,
    -0.08,  0.1+0.5,  0.1-0.25,
     0.08,  0.1+0.5,  0.1-0.25,
     0.08,  0.1+0.5, -0.1-0.25,
    
    // Bottom face
    -0.08, 0.5+0.5, -0.1-0.25,
     0.08, 0.5+0.5, -0.1-0.25,
     0.08, 0.5+0.5,  0.1-0.25,
    -0.08, 0.5+0.5,  0.1-0.25,
    
    // Right face
     0.08, 0.5+0.5, -0.1-0.25,
     0.08,  0.1+0.5, -0.1-0.25,
     0.08,  0.1+0.5,  0.1-0.25,
     0.08, 0.5+0.5,  0.1-0.25,
    
    // Left face
    -0.08, 0.5+0.5, -0.1-0.25,
    -0.08, 0.5+0.5,  0.1-0.25,
    -0.08,  0.1+0.5,  0.1-0.25,
    -0.08,  0.1+0.5, -0.1-0.25,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
   0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
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
    20, 21, 22,     20, 22, 23,   // left
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

function initBuffershe(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // Front face
    -0.1, 1,  0.1,
     0.1, 1,  0.1,
     0.1,  1.2,  0.1,
    -0.1,  1.2,  0.1,
    
    // Back face
    -0.1, 1, -0.1,
    -0.1,  1.2, -0.1,
     0.1,  1.2, -0.1,
     0.1, 1, -0.1,
    
    // Top face
    -0.1,  1.2, -0.1,
    -0.1,  1.2,  0.1,
     0.1,  1.2,  0.1,
     0.1,  1.2, -0.1,
    
    // Bottom face
    -0.1, 1, -0.1,
     0.1, 1, -0.1,
     0.1, 1,  0.1,
    -0.1, 1,  0.1,
    
    // Right face
     0.1, 1, -0.1,
     0.1,  1.2, -0.1,
     0.1,  1.2,  0.1,
     0.1, 1,  0.1,
    
    // Left face
    -0.1, 1, -0.1,
    -0.1, 1,  0.1,
    -0.1,  1.2,  0.1,
    -0.1,  1.2, -0.1,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Top
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Bottom
   0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
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
    20, 21, 22,     20, 22, 23,   // left
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
//
// Draw the scene.
//
function drawScene(gl, programInfo, buffers, texture, deltaTime) {
  if(flag < 1){
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

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
  if(flag>1 && player.roty>0.01)
  {
    player.roty -= 0.02;
  }
  if(flag>1 && player.rotz>0.01)
  {
    player.rotz -= 0.02;
  }
  if(flag>1 && player.rotz<-0.01)
  {
    player.rotz += 0.02;
  }
  if(flag>1 && player.rotx>0.01)
  {
    player.rotx -= 0.02;
  }

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [player.posx, player.posy, player.posz]);  // amount to translate

  //Write your code to Rotate the cube here//
  if(flag>0)
  {
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    player.roty,     // amount to rotate in radians
    [0, 1, 0]);
  }
  if(flag>0)
  {
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    player.rotz,     // amount to rotate in radians
    [0, 0, 1]);
  }
  if(flag<1)
  {
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    skaterot,     // amount to rotate in radians
    [0, 0, 1]);
  }



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
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
  if(flag<1){
    if(fly==1 && player.posy<2.2)
    {
      player.posy += 0.1;
    }

    if(player.posy<base)
    {
      player.posy = base;
    }
    if(!sidecheck.l && !sidecheck.r && !sidecheck.f)
    {
      base = -2;
    }
    if(player.posx<1 && player.posx>-1)
    {
      base = -2;
    }
    if(sidecheck.f && player.posy > -0.2)
    {
      base = 0;
      //console.log("in base 0")
    }
    if(base>-0.1 && base<1 && !jump.flag && !fly && !rhjump)
    {
      if(player.posy <= base) {
        freefall = 0.0;
      }
      player.posy -= freefall;
      freefall -= gt;

    }
    if(base<-0.1 && !jump.flag && !fly && !rhjump)
    {
      if(player.posy <= base) {
        freefall = 0.0;
      }
      player.posy -= freefall;
      freefall -= gt;

    }
    if(sidecheck.f && player.posy > -0.2)
    {
      base = 0;
    }
    if(jump.flag) {
      player.posy += jump.speed;
      jump.speed += gt;
      if(player.posy <= base) {
        jump.flag = 0;
      }
    }
    if(left.flag && player.posx > - 2.5 && !sidecheck.l) {
      player.posx -= left.speed;
      left.dist += left.speed;
      if(left.dist > 2.5) {
        left.flag = 0;
        left.dist = 0;
      }
    }
    if(right.flag && player.posx < 2.5 && !sidecheck.r) {
      player.posx += right.speed;
      right.dist += right.speed;
      if(right.dist > 2.5) {
        right.flag = 0;
        right.dist = 0;
      }
    }
    if(left.flag && player.posx < - 2.5 && player.posy<0.2) {
      if(player.posx <= -3.3) {
        mop = -1;
      }
      player.posx -= mop*left.speed;
      zmov -= 0.1*factor;
      polz -= 0.25;
      if(player.posx >= -2.55) {
        left.flag = 0;
        left.dist = 0;
        mop = 1;
      }
    }
    if(right.flag && player.posx > 2.5 && player.posy<0.2) {
      if(player.posx >= 3.3) {
        mop = -1;
      }
      player.posx += mop*right.speed;
      zmov -= 0.1*factor;
      polz -= 0.25;
      if(player.posx <= 2.55) {
        right.flag = 0;
        right.dist = 0;
        mop = 1;
      }
    }
    if(left.flag && sidecheck.l && player.posy < -0.2) {
      if(player.posx <= -1.3) {
        mop = -1;
      }
      player.posx -= mop*left.speed;
      left.dist += mop*left.speed;
      zmov -= 0.15*factor;
      polz -= 0.2;
      if(player.posx >= -0.05) {
        left.flag = 0;
        left.dist = 0;
        mop = 1;
      }
    }
    if(right.flag && sidecheck.r && player.posy < -0.2) {
      if(player.posx >= 1.3) {
        mop = -1;
      }
      player.posx += mop*right.speed;
      right.dist += mop*right.speed;
      zmov -= 0.15*factor;
      polz -= 0.2;
      if(player.posx <= 0.05) {
        right.flag = 0;
        right.dist = 0;
        mop = 1;
      }
    }
    if(left.flag && sidecheck.l && player.posy > -0.2) {
      base = 0;
      player.posx -= left.speed;
      left.dist += left.speed;
      if(player.posx < -2.45) {
        left.flag = 0;
        left.dist = 0;
      }
    }
    if(right.flag && sidecheck.r && player.posy > -0.2) {
      base = 0;
      player.posx += right.speed;
      right.dist += right.speed;
      if(player.posx > 2.45) {
        right.flag = 0;
        right.dist = 0;
      }
    }
    if(rhjump == 1)
    {
      player.posy += rhjumps;
      rhjumps -= 0.0036;
      skaterot += 0.0306;
      player.roty += 0.05;
      zmov += 0.08;
      if(player.posy <= base) {
        rhjump = 0;
        rhjumps = 0.2;
        skaterot = 0;
        player.roty = 0;
      }
    }
    // if(right.flag && sidecheck.r && player.posy > -0.2) {
    //   base = 0;
    //   player.posx += right.speed;
    //   right.dist += right.speed;
    //   if(player.posx > 2.45) {
    //     right.flag = 0;
    //     right.dist = 0;
    // }
  }
  if(flag>1){
    if(down.flag && player.rotz < 1.5) {
      player.roty += down.speed;
      player.rotz += down.speed;
      if(player.rotz >= 1.5) {
        down.flag = 0;
      }
    }
  }
  score += 0.01;
  // Update the rotation for the next draw

  //player.rot += deltaTime;
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
