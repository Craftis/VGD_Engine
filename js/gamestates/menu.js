/**
 * @file menu.js
 * @description Title screen and "Start" button.
 */

var startButton = new GameObject();
startButton.width = 256;
startButton.hitBoxWidth = 500;

var menuBackground = new GameObject();

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: MENU BACKGROUND IMAGE
   Replace with your own JPG/PNG; keep aspect ratio close to canvas.
   ===================================================================== */
menuBackground.img.src = "images/Sprite-menu.png";
menuBackground.width = canvas.width;
menuBackground.height = canvas.height;

gameStates[`menu`] = function () {
  // Hover & click
  if (startButton.overlap(mouse)) {
    if (mouse.pressed) { gameStates.changeState(`level1`); sounds.play(`bgm`,0, loop = true);}
    startButton.img.src = "images/Sprite-buttonON.png";
  } else {
    startButton.img.src = "images/Sprite-buttonOFF.png";
  }

  menuBackground.drawStaticImage();
  startButton.drawStaticImage();
};