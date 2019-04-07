var factor = 1;
var score = 0;
var coins = 0;
var base = -2;
var hjump = 0;
var fly = 0;
var coinup = 0;
var motrz = -1000;
var sidecheck = {
  r:0,
  l:0,
  f:0,
}
var flags = {
  grayf: 0,
  lightf: 0,
}
var scene4arrz = [];
var scene4arrx = [];
var scene5arrz = [];
var scene5arrx = [];
var scene6arrz = [];
var scene6arrx = [];
var scene6arry = [];
var scenetrfarrz = [];
var scenetrfarrx = [];
var scenetrsarrz = [];
var scenetrsarrx = [];

main();

Mousetrap.bind(['up'], function() {
  if (jump.flag == 0 && fly == 0) 
  {
    jump.flag = 1;
    if(hjump == 0)
    {
      jump.speed = 0.18;
    }
    if(hjump == 1)
    {
      jump.speed = 0.24;
    }
  }
});

Mousetrap.bind(['down'], function() {
  if (down.flag == 0) 
  {
    down.flag = 1;
    down.speed = 0.05;
  }
});

Mousetrap.bind(['left'], function() {
  if (left.flag == 0) 
  {
    left.flag = 1;
    //console.log("in left")
    left.speed = 0.1;
  }
});

Mousetrap.bind(['right'], function() {
  if (right.flag == 0) 
  {
    right.flag = 1;
    right.speed = 0.1;
  }
});

Mousetrap.bind(['g', 'G'], function () {
    flags.grayf = !flags.grayf;
});
//
// Start here
//
function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // If we don't have a GL context, give up now

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }
  var scoreElement = document.getElementById('score');
  var coinsElement = document.getElementById('coins');

  // Create text nodes to save some time for the browser.
  var scoreNode = document.createTextNode('');
  var coinsNode = document.createTextNode('');

  // Add those text nodes where they need to go
  scoreElement.appendChild(scoreNode);
  coinsElement.appendChild(coinsNode);


  // Vertex shader program

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform int lightpos;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      // Apply lighting effect

      highp vec3 ambientLight = vec3(1, 1, 1);
      highp vec3 directionalLightColor = vec3(0.7, 0.7, 0.7);
      highp vec3 directionalVector = normalize(vec3(0, 0, -1));
      if (lightpos == 1) {
        directionalVector = normalize(vec3(4, 0, 4));    
      }
      else if (lightpos == 2) {
        directionalVector = normalize(vec3(-4, 0, 4));    
      }
      else {
        directionalVector = normalize(vec3(0, 0, -1));
      }

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;

  // Fragment shader program

  const fsSource = `
    precision lowp float;
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;
    uniform int greyfs;

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      vec4 lightingd = vec4(texelColor.rgb * vLighting, texelColor.a);

      if (greyfs == 0){ 
        gl_FragColor = lightingd;  
      }
      else {
        float mean = (lightingd.r + lightingd.g + lightingd.b) / 4.0;
        gl_FragColor = vec4(mean, mean, mean, 1.0);
      }
    }
  `;


  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aVevrtexColor and also
  // look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
      lightpos: gl.getUniformLocation(shaderProgram, 'lightpos'),
      greyfs: gl.getUniformLocation(shaderProgram, 'greyfs'),
    },
  };

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  const buffers = initBuffers(gl);
  const buffers1 = initBuffers1(gl);
  const buffers2 = initBuffers2(gl);
  const buffers3 = initBuffers3(gl);
  const buffers4 = [initBuffers4(gl),];
  const buffers5 = [initBuffers5(gl),];
  const buffers6 = [initBuffers6(gl),];
  const bufferstrf = [initBufferstrf(gl),];
  const bufferstrs = [initBufferstrs(gl),];
  const buffersjsh = [initBuffersjsh(gl),];
  const buffersjet = [initBuffersjsh(gl),];
  const buffersb = initBuffersb(gl);
  const buffersl1 = initBuffersl1(gl);
  const buffersl2 = initBuffersl2(gl);
  const buffersh1 = initBuffersh1(gl);
  const buffersh2 = initBuffersh2(gl);
  const buffershe = initBuffershe(gl);
  const bufferspo = initBufferspo(gl);
  const bufferscop = initBuffersjsh(gl);
  const buffers2xpup = initBuffersjsh(gl);
  const bufferspoj = initBuffersjsh(gl);
  const bufferscope = initBuffersjsh(gl);
  const buffers2xpupe = initBuffersjsh(gl);
  const buffersjshe = initBuffersjsh(gl);
  const buffersdfb = initBuffersdfb(gl);
  const buffersdlb = initBuffersdlb(gl);
  const buffersbom = initBuffersjsh(gl);
  const buffersro = initBuffersjsh(gl);
  const bufferstrfm = initBufferstrf(gl);
  const bufferstrsm = initBufferstrs(gl);


  for (var i = 0; i < 10; i++) {
    buffers4.push(initBuffers4(gl));
    buffers5.push(initBuffers5(gl));
    bufferstrf.push(initBufferstrf(gl));
    bufferstrs.push(initBufferstrs(gl));
    buffersjsh.push(initBuffersjsh(gl));
    buffersjet.push(initBuffersjsh(gl));

  }
  for (var i = 0; i < 20; i++) {
    buffers6.push(initBuffers6(gl));
  }

  const texture = loadTexture(gl, 'skate.jpg');
  const textureshs = loadTexture(gl, 'shskate.jpg');
  const texture1 = loadTexture(gl, 'railtrac.jpg');
  const texture2 = loadTexture(gl, 'sky.PNG');
  const texture3 = loadTexture(gl, 'wallpic.jpg');
  const textureb = loadTexture(gl, 'body.jpeg');
  const texturedob = loadTexture(gl, 'dogf.jpeg');
  const textureha = loadTexture(gl, 'armhead.jpg');
  const textureup = loadTexture(gl, 'ups.png');
  const texturec = loadTexture(gl, 'coin.jpg');
  const texturecop = loadTexture(gl, 'coins.jpg');
  const texturepo = loadTexture(gl, 'poli.jpg');
  const texturetrf = loadTexture(gl, 'trainf.png');
  const texturetrs = loadTexture(gl, 'trainp.png');
  const texturejsh = loadTexture(gl, 'jumpsh.jpg');
  const texturejet = loadTexture(gl, 'jetpack.png');
  const texturejes = loadTexture(gl, 'jetskate.png');
  const texture2xpup = loadTexture(gl, '2xpup.jpg');
  const texturepoj = loadTexture(gl, 'pojump.png');
  const texturebom = loadTexture(gl, 'bomb.jpg');
  var taken = [];
  var staken = [];
  var jtaken = [];
  var bagtaken = 0;
  var tiptaken = 0;
  var bagtakene = 0;
  var tiptakene = 0;
  var stakene = 0;
  var tiptime = 0.0;
  var multiply = 0;
  var bagx = -2.5;
  var bagz = -10;
  var tipx = -2.5;
  var tipz = -150;
  var pojx = 0;
  var pojz = -80;
  var pojzb = -91;
  var pojzs = -91;
  var pojzp = -91;
  var pojtaken = 0;
  var trainin = 0;
  for (var i = 0; i < 11; i++)
  {
    scene4arrz.push(-20*(i+1));
    scene4arrx.push(2.5*((i%3) - 1));
    scene5arrz.push(-35*(i+1));
    scene5arrx.push(2.5*((i%2)*2 - 1));
    scenetrfarrz.push(-150*(i));
    scenetrfarrx.push(2.5*((i%2)*2 - 1));
    scenetrsarrz.push(-150*(i));
    scenetrsarrx.push(2.5*((i%2)*2 - 1));
  }
  for (var i = 0; i < 21; i++)
  {
    scene6arrz.push(-4*(i+1));
    scene6arrx.push(0);
    scene6arry.push(-2);
    taken.push(0);
    staken.push(0);
    jtaken.push(0);
  }

  var then = 0;
  var timestore = 0;
  var timestore2 = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    console.log(zmov);
    const deltaTime = now - then;
    then = now;
    coinsNode.nodeValue = coins;
    scoreNode.nodeValue = Math.ceil(score);
    if(multiply)
    {
      scoreNode.nodeValue = "2x " + Math.ceil(score);
      score += 0.001;
    }
    if(now - timestore>20 && hjump == 1)
    {
      hjump = 0;
    }
    if(now - timestore2>15.7 && fly == 1)
    {
      fly = 0;
    }
    if(now - timestore2>13 && coinup == 1)
    {
      coinup = 0;
    }
    if(now - tiptime>20 && multiply == 1)
    {
      multiply = 0;
    }

    var storecol = detect_collision();
    if(zmov > 4000)
    {
      scoreNode.nodeValue = Math.ceil(score) + 10*coins;
      document.getElementById('glcanvas').remove();
      document.getElementById('displaycoins').remove();
      var img = document.createElement('img');
      //img.src = './gameover.jpg';
      img.src = './youwin.jpg';
      img.height = '650';
      img.width = '1280';
      document.getElementById('frame').appendChild(img);
    }
    if (storecol == 1) {
      scoreNode.nodeValue = Math.ceil(score) + 10*coins;
      document.getElementById('glcanvas').remove();
      document.getElementById('displaycoins').remove();
      var img = document.createElement('img');
      img.src = './gameover.jpg';
      //img.src = './youwin.jpg';
      img.height = '650';
      img.width = '1280';
      document.getElementById('frame').appendChild(img);
    }
    sidecheck.r = 0;
    sidecheck.l = 0;
    sidecheck.f = 0;
    if (storecol == 2) {
      sidecheck.r = 1;
    }
    if (storecol == 3) {
      sidecheck.l = 1;
    }
    if (storecol == 4) {
      sidecheck.f = 1;
      //console.log("sidecheck f equals");
      //console.log(sidecheck.f);
    }
    gl.uniform1i(programInfo.uniformLocations.lightpos, flags.lightf);
    gl.uniform1i(programInfo.uniformLocations.greyfs, flags.grayf);
    if (now%30 - 10 > 0 && now%30 - 20 < 0) {
      flags.lightf = 1;
    }
    else if (now%30 - 20 > 0) {
      flags.lightf = 2;
    }
    else 
    {
      flags.lightf = 0;
    }

    flag = 0;
    if(hjump == 0 && fly == 0)
    {
      drawScene(gl, programInfo, buffers, texture, deltaTime);
    }
    if(hjump == 1 && fly == 0)
    {
      player.roty = 1.57;
      drawScene(gl, programInfo, buffers, textureshs, deltaTime);
    }
    if(fly == 1)
    {
      player.roty = 1.57;
      player.rotz = -1.57;
      drawScene(gl, programInfo, buffers, texturejes, deltaTime);
    }
    drawScenepo(gl, programInfo, bufferspo, texturepo, deltaTime);
    drawScene1(gl, programInfo, buffers1, texture1, deltaTime);
    drawScene2(gl, programInfo, buffers2, texture2, deltaTime);
    drawScene3(gl, programInfo, buffers3, texture3, deltaTime);
    for (var i = 0; i < 11; i++) {
      if(scene4arrz[i] + zmov>0)
      {
        scene4arrz[i] += -220;
      }
      drawScene4(gl, programInfo, buffers4[i], textureup, deltaTime, scene4arrx[i], scene4arrz[i]);
      if(((((scene4arrz[i]+zmov)>-6.8) && (scene4arrz[i]+zmov)<-6.2)) && ((scene4arrx[i] > player.posx - 0.2) && (scene4arrx[i] < player.posx + 0.2)) && djump == 0)
      {
        //console.log("in");
        djump = 1;
      }
      if(scene5arrz[i] + zmov>0)
      {
        scene5arrz[i] += -385;
      }
      drawScene5(gl, programInfo, buffers5[i], textureup, deltaTime, scene5arrx[i], scene5arrz[i]);
      if(scenetrfarrz[i] + zmov>0)
      {
        scenetrfarrz[i] += -1500;
      }
      drawScenetrf(gl, programInfo, bufferstrf[i], texturetrf, deltaTime, scenetrfarrx[i], scenetrfarrz[i]);
      if(scenetrsarrz[i] + zmov>20)
      {
        scenetrsarrz[i] += -1500;
      }
      drawScenetrf(gl, programInfo, bufferstrs[i], texturetrs, deltaTime, scenetrsarrx[i], scenetrsarrz[i]);
      if(((((-217*(i+1)+zmov)>=-8.4) && (-217*(i+1)+zmov)<-7.6)) && ((2.5*((i%3) - 1) > player.posx - 0.2) && (2.5*((i%3) - 1) < player.posx + 0.2)) && player.posy < -1.8)
      {
        staken[i] = 1;
        timestore = now;
        hjump = 1;
      }
      if(staken[i]==0)
      {
        drawScenejsh(gl, programInfo, buffersjsh[i], texturejsh, deltaTime, 2.5*((i%3) - 1),-2, -217*(i+1));
      }
      if(((((-400*(i+1)+zmov)>=-8.4) && (-400*(i+1)+zmov)<-7.6)) && ((2.5*((i%3) - 1) > player.posx - 0.2) && (2.5*((i%3) - 1) < player.posx + 0.2)) && player.posy < -1.8)
      {
        jtaken[i] = 1;
        timestore2 = now;
        fly = 1;
        coinup = 1;
      }
      if(jtaken[i]==0)
      {
        drawScenejsh(gl, programInfo, buffersjet[i], texturejet, deltaTime, 2.5*((i%3) - 1),-2, -400*(i+1));
      }
    }
    for (var i = 0; i < 21; i++) {
      if(scene6arrz[i] + zmov>0)
      {
        scene6arrz[i] += -84;
        taken[i] = 0;
      }
      if((scene6arrz[i]<-60 && scene6arrz[i]>-120) || (scene6arrz[i]<-240 && scene6arrz[i]>-300))
      {
        scene6arrx[i] = 2.5;
      }
      if((scene6arrz[i]<-120 && scene6arrz[i]>-180) || (scene6arrz[i]<-360 && scene6arrz[i]>-420))
      {
        scene6arrx[i] = - 2.5;
      }
      //if(((scene6arrx[i] > player.posx - 0.2) && (scene6arrx[i] < player.posx + 0.2)) && ((scene6arrz[i] > player.posz - 1) && (scene6arrz[i] < player.posz + 1)))
      if(((((scene6arrz[i]+zmov)>=-8.4) && (scene6arrz[i]+zmov)<-7.6)) && ((scene6arrx[i] > player.posx - 0.2) && (scene6arrx[i] < player.posx + 0.2)) && (((scene6arry[i] > player.posy - 0.4) && ((scene6arry[i] < player.posy + 0.4) && hjump == 0)) || hjump == 1) && taken[i] == 0)
      {
        taken[i] = 1;
        coins += 1;
      }
      scene6arry[i] = -2;
      if(coinup == 1)
      {
        scene6arry[i] = 2;
      }
      if(taken[i]==0)
      {
        drawScene6(gl, programInfo, buffers6[i], texturec, deltaTime, scene6arrx[i], scene6arrz[i], scene6arry[i]);
      }
    }
    if((((bagz+zmov)>=-8.4) && (bagz+zmov)<-7.6) && ((bagx > player.posx - 0.2) && (bagx < player.posx + 0.2)) && player.posy < 0.2 && bagtaken == 0)
      {
        bagtaken = 1;
        coins += 10;
        //console.log("taken");
      }
    if(bagz + zmov>0)
    {
      bagz += -150;
      bagx = bagx*(-1);
      bagtaken = 0;
    }
    if(bagtaken ==0 )
    {
      drawScenejsh(gl, programInfo, bufferscop, texturecop, deltaTime, bagx,0, bagz);
    }
    if((((tipz+zmov)>=-8.4) && (tipz+zmov)<-7.6) && ((tipx > player.posx - 0.2) && (tipx < player.posx + 0.2)) && player.posy < 0.2 && player.posy > -0.8)
      {
        tiptaken = 1;
        tiptime = now;
        multiply = 1;
      }
    if(tipz + zmov>0)
    {
      tipz += -300;
      tipx = tipx*(-1);
      tiptaken = 0;
    }
    if(tiptaken ==0 )
    {
      drawScenejsh(gl, programInfo, buffers2xpup, texture2xpup, deltaTime, tipx,0, tipz);
    }
    if((((pojz+zmov)>=-8.4) && (pojz+zmov)<-7.6) && ((pojx > player.posx - 0.2) && (pojx < player.posx + 0.2)) && player.posy < -1)
      {
        pojtaken = 1;
        rhjump = 1;
      }
    if(pojz + zmov>0)
    {
      pojz += -500;
      pojtaken = 0;
    }
    if(pojtaken ==0 )
    {
      drawScenejsh(gl, programInfo, bufferspoj, texturepoj, deltaTime, pojx,-2, pojz);
    }
    //console.log(player.posy);
    if((((pojzb +zmov)>=-8.4) && (pojzb+zmov)<-7.6) && ((player.posx > - 0.2) && (player.posx < 0.2)) && bagtakene == 0 && rhjump == 1)
      {
        bagtakene = 1;
        coins += 10;
        //console.log("taken");
      }
    if(zmov + pojzb>0)
    {
      bagtakene = 0;
      pojzb -= 500;
    }
    if(bagtakene ==0 && rhjump == 1)
    {
      drawScenejsh(gl, programInfo, bufferscope, texturecop, deltaTime, 0,2, pojzb);
    }
    if((((pojzs +zmov)>=-8.4) && (pojzs+zmov)<-7.6) && ((player.posx > 2) && (player.posx < 3)) && stakene == 0 && rhjump == 1)
      {
        stakene = 1;
        timestore = now;
        hjump = 1;
        //console.log("taken");
      }
    if(zmov + pojzs>0)
    {
      stakene = 0;
      pojzs -= 500;
    }
    if(stakene ==0 && rhjump == 1)
    {
      drawScenejsh(gl, programInfo, buffersjshe, texturejsh, deltaTime, 2.5,2, pojzs);
    }
    if((((pojzp +zmov)>=-8.4) && (pojzp+zmov)<-7.6) && ((player.posx > -3) && (player.posx < -2)) && tiptakene == 0 && rhjump == 1)
      {
        tiptakene = 1;
        tiptime = now;
        multiply = 1;
        //console.log("taken");
      }
    if(zmov + pojzp>0)
    {
      tiptakene = 0;
      pojzp -= 500;
    }
    if(tiptakene ==0 && rhjump == 1)
    {
      drawScenejsh(gl, programInfo, buffers2xpupe, texture2xpup, deltaTime, -2.5,2, pojzp);
    }
    if(zmov + bomz>0)
    {
      bomz -= 100;
    }
    if(zmov + rocz>0)
    {
      rocz -= 100;
    }
    if(zmov + motrz>5)
    {
      motrz -= 1000;
    }
    motrz += 1;
    drawScenetrf(gl, programInfo, bufferstrfm, texturetrf, deltaTime, 0, motrz);
    drawScenetrf(gl, programInfo, bufferstrsm, texturetrf, deltaTime, 0, motrz);
    drawScenebom(gl, programInfo, buffersbom, texturebom, deltaTime);
    if(((((rocz+zmov)>-8.2) && (rocz+zmov)<-7.6)) && ((player.posx >-0.2) && (player.posx < 0.2)) && (player.posy <= -1.5))
    {
      zmov -= 0.13*factor;
      polz -= 0.2;
    }
    drawScenero(gl, programInfo, buffersro, texturebom, deltaTime);
    flag = 1;
    drawScene(gl, programInfo, buffersb, textureb, deltaTime);
    drawScene(gl, programInfo, buffersl1, textureb, deltaTime);
    drawScene(gl, programInfo, buffersl2, textureb, deltaTime);
    drawScene(gl, programInfo, buffersh1, textureha, deltaTime);
    drawScene(gl, programInfo, buffersh2, textureha, deltaTime);
    flag = 2;
    drawScene(gl, programInfo, buffershe, textureha, deltaTime);
    drawScenedfb(gl, programInfo, buffersdfb, texturedob, deltaTime);
    drawScenedlb(gl, programInfo, buffersdlb, texturedob, deltaTime);
    drawScenedlf(gl, programInfo, buffersdlb, texturedob, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function detect_collision() {
  if (polz < -7){
    return 1;
  }
  if(((((bomz+zmov)>-8.6) && (bomz+zmov)<-7.4)) && ((player.posx >-0.2) && (player.posx < 0.2)) && (player.posy <= -1))
  {
    return 1;
  }
  if(((((motrz+zmov)>-8.6) && (motrz+zmov - 20)<-7.4)) && ((player.posx >-0.2) && (player.posx < 0.2)) && (player.posy <= 0))
  {
    return 1;
  }
  for(var i =0; i<11; i++) {
    if(((((scene4arrz[i]+zmov)>-8.4) && (scene4arrz[i]+zmov)<-7.6)) && ((scene4arrx[i] > player.posx - 0.2) && (scene4arrx[i] < player.posx + 0.2)) && (player.posy <= -1.5))
    {
      return 1;
    }
    if(((((scene5arrz[i]+zmov)>-8.4) && (scene5arrz[i]+zmov)<-7.6)) && ((scene5arrx[i] > player.posx - 0.2) && (scene5arrx[i] < player.posx + 0.2)) && (player.rotz <= 0.53) && player.posy<-0.2)
    {
      return 1;
    }
    if(((((scenetrsarrz[i]+zmov)>-8.4) && (scenetrsarrz[i]+zmov)<=-8)) && ((scenetrsarrx[i] > player.posx - 0.5) && (scenetrsarrx[i] < player.posx + 0.5)) && (player.posy < 0))
    {
      return 1;
    }
    if(((scenetrsarrz[i]+zmov)>-8.4) && ((scenetrsarrz[i]+zmov-20)<-8) && scenetrsarrx[i]>2 && player.posx>0 && player.posx<1.8)
    {
      return 2;
    }
    if(((scenetrsarrz[i]+zmov)>-8.4) && ((scenetrsarrz[i]+zmov-20)<-8) && scenetrsarrx[i]<-2 && player.posx<0 && player.posx>-1.8)
    {
      return 3;
    }
    //console.log(player.posx);
    if(((scenetrsarrz[i]+zmov)>-8.4) && ((scenetrsarrz[i]+zmov-20)<-8) && scenetrsarrx[i]<-2 && player.posx<-2)
    {
      //console.log("incop")
      return 4;
    }
    if(((scenetrsarrz[i]+zmov)>-8.4) && ((scenetrsarrz[i]+zmov-20)<-8) && scenetrsarrx[i]>2 && player.posx>2)
    {
      //console.log("incop2")
      return 4;
    }
  }
  return 0;
}

function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because images have to be download over the internet
  // they might take a moment until they are ready.
  // Until then put a single pixel in the texture so we can
  // use it immediately. When the image has finished downloading
  // we'll update the texture with the contents of the image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  const image = new Image();
  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    // WebGL1 has different requirements for power of 2 images
    // vs non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
       // Yes, it's a power of 2. Generate mips.
       gl.generateMipmap(gl.TEXTURE_2D);
    } else {
       // No, it's not a power of 2. Turn off mips and set
       // wrapping to clamp to edge
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}