//function preload()
function preLoad(){
}

//setup()
function setUp(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

// poseNet()
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

// modelLoaded()
function modelLoaded() {
    console.log('PoseNet is Initialized');
}

// draw()
function draw(){
    Image(video, 0, 0, 300, 300);
}

// take_snapshot
function take_snapshot(){
    save('myFilterImage.png');
}



