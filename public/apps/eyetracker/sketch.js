// no protect 
let state = "start"; // "calibration", "accuracyTest", "art"
let calibrationPoints = [];
let currentPoint = 0;
let gazeX = null;
let gazeY = null;
let passedAccuracyTest = false;

// ====== Grid button system variables ======
let buttons = [];
let gridCols = 12;
let gridRows = 6;
let buttonSize = 50;
let spacing = 120;
let gazeRadius = 200; 

let feedbackButton; //  so all states can access
let usedOnDesktop = false; 
let message = document.querySelector(".message"); 

function isDesktopEnvironment() {
  const ua = navigator.userAgent.toLowerCase();
  const width = window.screen.width;
  const height = window.screen.height;

  // User agent checks for mobile/tablet patterns
  const mobilePatterns = [
      /android/i,
      /iphone/i,
      /ipad/i,
      /ipod/i,
      /blackberry/i,
      /windows phone/i,
      /mobile/i
  ];

  // If UA matches mobile, reject
  if (mobilePatterns.some(pattern => pattern.test(ua))) {
      return false;
  }

  // Resolution sanity check — most desktops > 1024x768
  if (width < 1024 || height < 700) {
      return false;
  }

  return true;
}


function setup() {
  createCanvas(windowWidth, windowHeight);

     // Example usage
  if (isDesktopEnvironment()) {
      usedOnDesktop = true; 
      console.log("✅ Desktop detected — run gaze simulation.");
  } else {
      usedOnDesktop = false; 
      message.style.display = "block"; // show 
      console.log("❌ Mobile/tablet detected — simulation disabled.");
  }

  if (usedOnDesktop) { 
    
  feedbackButton = createButton("Feedback");
  feedbackButton.position(width - 220, 20);
  feedbackButton.mousePressed(() => {
    window.open('https://x.com/__IanWright__/status/1954281273629016374', '_blank'); 
  });
  feedbackButton.hide(); // hidden by default 

    textAlign(CENTER, CENTER); 
    noStroke();
    fill(0);

    // Webgazer setup
    webgazer.setGazeListener((data, timestamp) => {
      if (data) {
        gazeX = data.x;
        gazeY = data.y;
      }
    }).begin();
    webgazer.showPredictionPoints(false);
    webgazer.showVideoPreview(true); // hidden for all stages except stage 1

    initCalibrationPoints();
    createButtons();
    initArtButtons(); 
  }

}

function draw() {
  if (usedOnDesktop) {
    background(255);

    background("#121212");

    if (state === "start") {
      textSize(24); 
      fill("#fff"); 
      // stroke("#fff"); 
      text("Welcome, friend ✨ Click 'Start Calibration' to begin", width / 2, height / 2);
    }

    else if (state === "calibration") {
      drawCalibration();
    }

    else if (state === "accuracyTest") {
      webgazer.showVideoPreview(false); // hidden for all stages
      drawAccuracyTest();
    }

    else if (state === "art") {
      drawArtExperience();
    }
  }
}

// ================== STATE: CALIBRATION ==================

function initCalibrationPoints() {
  calibrationPoints = [];
  let rows = 3, cols = 3;
  let margin = 100;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = map(c, 0, cols - 1, margin, width - margin);
      let y = map(r, 0, rows - 1, margin, height - margin);
      calibrationPoints.push({ x, y });
    }
  }
  currentPoint = 0;
}

function drawCalibration() {
  let pt = calibrationPoints[currentPoint];
  fill(255, 0, 0);
  ellipse(pt.x, pt.y, 30, 30);
  fill(255);
  text("Click the red dots while looking at them", width / 2, height - 40);
}

function mousePressed() {
  if (state === "calibration") {
    let pt = calibrationPoints[currentPoint];
    webgazer.recordScreenPosition(pt.x, pt.y, 'click');

    currentPoint++;
    if (currentPoint >= calibrationPoints.length) {
      state = "accuracyTest";
      target = getNextAccuracyTarget();
    }
  }

  if (state === "accuracyTest" && target) {
    let d = dist(mouseX, mouseY, target.x, target.y);
    if (d < 50) {
      userAccuracySamples.push({ gazeX, gazeY, targetX: target.x, targetY: target.y });
      target = getNextAccuracyTarget();
    }

    if (userAccuracySamples.length >= 5) {
      passedAccuracyTest = true;
    }
  }
}

// ================== STATE: ACCURACY TEST ==================

let target = null;
let userAccuracySamples = [];

function drawAccuracyTest() {
  if (!target) {
    target = getNextAccuracyTarget();
  }

  textSize(16); 
  fill(0, 200, 255);
  ellipse(target.x, target.y, 30, 30);
  fill(255);
  text("Click near the blue dot if your gaze lands close (the longer this process, the better. You can stop anytime.)", width / 2, height - 40);
}

function getNextAccuracyTarget() {
  return {
    x: random(100, width - 100),
    y: random(100, height - 100),
  };
}

// ================== STATE: ART EXPERIENCE ==================

function initArtButtons() {
  buttons = [];
  let offsetX = 100;
  let offsetY = 100;
  for (let y = 0; y < gridRows; y++) {
    for (let x = 0; x < gridCols; x++) {
      buttons.push({
        x: offsetX + x * spacing,
        y: offsetY + y * spacing,
        pressed: false
      });
    }
  }
}

function drawArtExperience() {
  select('#startBtn').hide();
  select('#recalibrateBtn').hide();
  select('#proceedBtn').hide();
  feedbackButton.show();

  // Update gaze-press states
  if (gazeX && gazeY) {
    for (let b of buttons) {
      let d = dist(b.x, b.y, gazeX, gazeY);
      b.pressed = (d <= gazeRadius);
    }
  }

  // Draw buttons
  for (let b of buttons) {
    if (b.pressed) {
      fill(0, 200, 255); // pressed
    } else {
      fill(200); // unpressed
    }
    ellipse(b.x, b.y, buttonSize);
  }

  // Optional: show gaze point
  if (gazeX && gazeY) {
    noFill();
    stroke(0, 200, 255, 150);
    ellipse(gazeX, gazeY, gazeRadius * 2);
    noStroke();
  }
}

// ================== UI BUTTONS ==================

function createButtons() {
  let startBtn = createButton("Start Calibration");
  startBtn.position(width - 220, 20);
  startBtn.id('startBtn');
  startBtn.mousePressed(() => {
    state = "calibration";
    initCalibrationPoints();
    userAccuracySamples = [];
    target = null;
    feedbackButton.hide(); // hide feedback during calibration
  });

  let recalibrateBtn = createButton("Recalibrate");
  recalibrateBtn.position(width - 220, 60);
  recalibrateBtn.id('recalibrateBtn');
  recalibrateBtn.mousePressed(() => {
    state = "calibration";
    initCalibrationPoints();
    userAccuracySamples = [];
    target = null;
    feedbackButton.hide(); // hide feedback during calibration
  });

  let proceedBtn = createButton("Proceed to Art");
  proceedBtn.position(width - 220, 100);
  proceedBtn.id('proceedBtn');
  proceedBtn.mousePressed(() => {
    state = "art";
  });

}

