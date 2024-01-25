function preload()
{

}

function setup()
{
 canvas=createCanvas(300,300);
 canvas.center;
 video=createCapture(VIDEO); // Acceder a la camara y crear una captura 
 video.size(300,300); // tamaño de la camara debe ser igual al canvas
 video.hide(); // de manera predeterminada 
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet esta inicializado'); //Para verificar si posenet esta iniciado
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }

}

function draw()
{
    image(video,0,0,300,300);
}

function take_snapshot()
{
   save('mifiltro.png');

}