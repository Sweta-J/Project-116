noseX = 0;
noseY = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 50, 40);
}

function takeSnapshot() {
    save("myFilterImage.png");
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        noseX = noseX - 25;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}