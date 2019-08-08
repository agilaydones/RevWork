import { Component, OnInit } from '@angular/core';
import  { GetPlayService } from '../../services/get-play.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-track-component',
  templateUrl: './track-component.component.html',
  styleUrls: ['./track-component.component.css']
})
export class TrackComponentComponent implements OnInit {

  currentTrack: Track = {
    trackId: "",
    album: [],
    name: []

  };


  constructor(private getPlay: GetPlayService) { }

  ngOnInit() {
    
    
  }
showSomething(){
  this.getPlay.getSomething().subscribe((data: Track)=> this.currentTrack = {
      album: data['album'],
      trackId: data['id'],
      name: data['name']

  });
}


  getTrack(nameParam: string){
    this.getPlay.getTrack(nameParam).subscribe((response)=>{
      this.currentTrack = response;
    })
    
  }

}
