/**
 * @file data/cave.js
 * @description Tile layout + sprite states for the cave layers.
 *
 * Layout uses numbers to pick sprite "states", and "x" or false to skip.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: TILESET IMAGE
   Replace src with your tileset; tiles are 64x64 in the current data.
   Add more states or remove states as each state represents a tile.
   ===================================================================== */
var x = false;
var caveData = {
  info: {
    layout: [
      [7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11],
      [5,8,12,12,12,12,12,4,0,0,8,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,10],
      [5,10,x,x,x,x,x,5,0,0,10,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5,10],
      [13,14,x,x,x,x,x,13,12,12,14,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,14],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7,3,3,3,3,11,x,x,x,x,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5,0,0,0,0,10,x,x,x,x,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,7,11,x,x,5,0,0,0,0,10,x,x,7,11,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
    ],
    src: `images/Tileset_Template.png`
  },
  states: [
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 0,   startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 64,  startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 128, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 192, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 256, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 320, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 384, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 448, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 512, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 576, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 640, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 704, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 768, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 832, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 896, startY: 0 } ] }
  ]
};

var caveBackData = {
  info: {
    layout: [
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],
      [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],
      [0,8,8,8,8,5,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,5,8,8,8,8,8,4],
      [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],
      [0,8,8,8,8,8,8,8,8,8,8,8,5,8,8,8,8,8,8,5,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],
      [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],
    ],
    src: `images/bg2.png`
  },
  states: caveData.states
};

var caveHitData = {
  info: {
    layout: [
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
      [2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,2,x,x,x,x,x,0,0,0,0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2,2],
      [6,6,x,x,x,x,x,0,0,0,0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,0,x,x,x,x,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,0,x,x,x,x,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,x,x,0,0,0,0,0,0,x,x,0,0,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,x,x,0,0,0,0,0,0,x,x,0,0,x,x,x,x,x,x,x,x]
    ],
    src: `images/bg2.png`
  },
  states: caveData.states
};