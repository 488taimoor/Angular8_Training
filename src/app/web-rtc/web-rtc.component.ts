import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-rtc',
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.css']
})
export class WebRTCComponent implements OnInit {
videosrc;
  constructor() { }
  ngOnInit() {
    
  }
  
  start(){
    navigator.getUserMedia({video:true, audio:true}, successCallback, errorCallback);
  
  }
 

}


function successCallback(stream) {
  // this.videosrc=stream
  console.log('here is stream', stream)
  var video = document.querySelector('video');
  //  video.src= window.URL.createObjectURL(stream)
  //  console.log('here is data', video)
  video.srcObject = stream;
  
  // video.onloadedmetadata = function(e) {

  //    video.play()
  // };
}
function errorCallback(error){
  console.log('here is error', error)
}