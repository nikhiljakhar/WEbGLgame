var polz = -6;
var polx = 0;

function initBufferspo(gl) {

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

    0.0,  0.0,
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
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
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    // Left
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

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
    20, 21, 22,     20, 22, 23,

    0 + 24,  1 + 24,  2 + 24,      0 + 24,  2 + 24,  3 + 24,    // front
    4 + 24,  5 + 24,  6 + 24,      4 + 24,  6 + 24,  7 + 24,    // back
    8 + 24,  9 + 24,  10 + 24,     8 + 24,  10 + 24, 11 + 24,   // top
    12 + 24, 13 + 24, 14 + 24,     12 + 24, 14 + 24, 15 + 24,   // bottom
    16 + 24, 17 + 24, 18 + 24,     16 + 24, 18 + 24, 19 + 24,   // right
    20 + 24, 21 + 24, 22 + 24,     20 + 24, 22 + 24, 23 + 24,

    0 + 48,  1 + 48,  2 + 48,      0 + 48,  2 + 48,  3 + 48,    // front
    4 + 48,  5 + 48,  6 + 48,      4 + 48,  6 + 48,  7 + 48,    // back
    8 + 48,  9 + 48,  10 + 48,     8 + 48,  10 + 48, 11 + 48,   // top
    12 + 48, 13 + 48, 14 + 48,     12 + 48, 14 + 48, 15 + 48,   // bottom
    16 + 48, 17 + 48, 18 + 48,     16 + 48, 18 + 48, 19 + 48,   // right
    20 + 48, 21 + 48, 22 + 48,     20 + 48, 22 + 48, 23 + 48,

    0 + 72,  1 + 72,  2 + 72,      0 + 72,  2 + 72,  3 + 72,    // front
    4 + 72,  5 + 72,  6 + 72,      4 + 72,  6 + 72,  7 + 72,    // back
    8 + 72,  9 + 72,  10 + 72,     8 + 72,  10 + 72, 11 + 72,   // top
    12 + 72, 13 + 72, 14 + 72,     12 + 72, 14 + 72, 15 + 72,   // bottom
    16 + 72, 17 + 72, 18 + 72,     16 + 72, 18 + 72, 19 + 72,   // right
    20 + 72, 21 + 72, 22 + 72,     20 + 72, 22 + 72, 23 + 72,

    0 + 96,  1 + 96,  2 + 96,      0 + 96,  2 + 96,  3 + 96,    // front
    4 + 96,  5 + 96,  6 + 96,      4 + 96,  6 + 96,  7 + 96,    // back
    8 + 96,  9 + 96,  10 + 96,     8 + 96,  10 + 96, 11 + 96,   // top
    12 + 96, 13 + 96, 14 + 96,     12 + 96, 14 + 96, 15 + 96,   // bottom
    16 + 96, 17 + 96, 18 + 96,     16 + 96, 18 + 96, 19 + 96,   // right
    20 + 96, 21 + 96, 22 + 96,     20 + 96, 22 + 96, 23 + 96,

    0 + 120,  1 + 120,  2 + 120,      0 + 120,  2 + 120,  3 + 120,    // front
    4 + 120,  5 + 120,  6 + 120,      4 + 120,  6 + 120,  7 + 120,    // back
    8 + 120,  9 + 120,  10 + 120,     8 + 120,  10 + 120, 11 + 120,   // top
    12 + 120, 13 + 120, 14 + 120,     12 + 120, 14 + 120, 15 + 120,   // bottom
    16 + 120, 17 + 120, 18 + 120,     16 + 120, 18 + 120, 19 + 120,   // right
    20 + 120, 21 + 120, 22 + 120,     20 + 120, 22 + 120, 23 + 120,

    0 + 144,  1 + 144,  2 + 144,      0 + 144,  2 + 144,  3 + 144,    // front
    4 + 144,  5 + 144,  6 + 144,      4 + 144,  6 + 144,  7 + 144,    // back
    8 + 144,  9 + 144,  10 + 144,     8 + 144,  10 + 144, 11 + 144,   // top
    12 + 144, 13 + 144, 14 + 144,     12 + 144, 14 + 144, 15 + 144,   // bottom
    16 + 144, 17 + 144, 18 + 144,     16 + 144, 18 + 144, 19 + 144,   // right
    20 + 144, 21 + 144, 22 + 144,     20 + 144, 22 + 144, 23 + 144,
   // left
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
    -1.0,  0.0,  0.0,
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

function drawScenepo(gl, programInfo, buffers, texture, deltaTime) {

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
  // start drawing the square
  if(polz<-1)
  {
    polz += 0.02;
  }
  if(player.posx > -2.5 && player.posx<2.5)
  {
    polx = player.posx;
  }


  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [polx, -2, polz]);  // amount to translate

  //Write your code to Rotate the cube here//
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    1.57,     // amount to rotate in radians
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
    const vertexCount = 252;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
  //zmov += 0.003;

  // Update the rotation for the next draw

  //cubeRot1 += deltaTime;
}