"use strict";

drawLine();

function drawLine(){

    let canvas = document.querySelector("canvas");
    canvas.width= window.innerWidth; 
    canvas.height= window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();    
    context.fillStyle = 'black';
    context.fillRect(0, 0, 300, 300);
    context.rect(70,20,50,50);
    context.rect(20,70,50,50);
    context.rect(70,70,50,50);
    context.rect(20,120,50,50);
    context.rect(70,170,50,50);
    context.rect(20,220,50,50);    
    context.rect(120,20,50,50);
    context.rect(170,20,50,50);
    context.rect(170,70,50,50);
    context.rect(220,70,50,50);
    context.rect(220,120,50,50);
    context.rect(170,170,50,50);
    context.rect(220,220,50,50);    
    context.fillStyle = '#17EF33';
    context.fill();
    context.closePath();

}