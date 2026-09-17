/**
 * @file data/player.js
 * @description Player sprite sheet & animation data.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: PLAYER SPRITESHEET PATH
   - Put your PNG/JPG in /images and change the path below.
   - Each frame is currently 128x128 laid out horizontally.
   - Idle must be present and is required for the engine to work
   ===================================================================== */
var playerData = {
  info: {
    src: `images/Sprite-player.png` // ← replace with your asset, e.g., 'images/hero.png'
  },
  states: {
    // idle
    idle: {
      fps: 10, cycle: true,
      frames: [
        { width: 32, height: 32, startX: 0,   startY: 0 },
        { width: 32, height: 32, startX: 32,  startY: 0 },
        { width: 32, height: 32, startX: 64,  startY: 0 },
        { width: 32, height: 32, startX: 96,   startY: 0 }
      ]
    },
    // walk
    walk: {
      fps: 5, cycle: true,
      frames: [
        { width: 32, height: 32, startX: 0,     startY: 32 },
        { width: 32, height: 32, startX: 32,    startY: 32 },
        { width: 32, height: 32, startX: 64,    startY: 32 },
        { width: 32, height: 32, startX: 96,    startY: 32 },
        { width: 32, height: 32, startX: 128,   startY: 32 },
        { width: 32, height: 32, startX: 160,   startY: 32 },
        { width: 32, height: 32, startX: 192,   startY: 32 },
        { width: 32, height: 32, startX: 224,   startY: 32 }
      ]
    },
    // jump
    jump: {
      fps: 2, cycle: false,
      frames: [ 
        { width: 32, height: 32, startX: 0,  startY: 96 },
        { width: 32, height: 32, startX: 32, startY: 96 },
        { width: 32, height: 32, startX: 64, startY: 96 },
        { width: 32, height: 32, startX: 96, startY: 96 },
        { width: 32, height: 32, startX: 128,startY: 96 }
       ]
    },
    // crouch
    crouch: {
      fps: 2, cycle: false,
      frames: [
        { width: 32, height: 32, startX: 0,  startY: 64 },
        { width: 32, height: 32, startX: 32, startY: 64 },
        { width: 32, height: 32, startX: 64, startY: 64 }
      ]
    },
    // attack
    attack: {
      fps: 3, cycle: false,
      frames: [
        { width: 32, height: 32, startX: 0,  startY: 128 },
        { width: 32, height: 32, startX: 32, startY: 128 },
        { width: 32, height: 32, startX: 64, startY: 128 }
      ]
    }
  }
};

var projectileData = {
  info: {
    src: `images/Sprite-projectile.png` // ← replace with your asset, e.g., 'images/projectile.png'
  },
  states: {
    // idle
    idle: {
      fps: 5, cycle: true,
      frames: [
        { width: 32, height: 32, startX: 0, startY:  0 },
        { width: 32, height: 32, startX: 32, startY: 0 },
        { width: 32, height: 32, startX: 64, startY: 0 },
        { width: 32, height: 32, startX: 96, startY: 0 }
      ]
    }
  }
};