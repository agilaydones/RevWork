import { Component, OnInit } from '@angular/core';
import { GetPlayService } from '../../services/get-play.service';

import { DomSanitizer } from '@angular/platform-browser';



import { Playlist, Playlist2 } from '../../models/playList';
import { Item, Tracks, Album, Artist2,ExternalIds,ExternalUrls4, TrackJson } from '../../models/tacksJson';



//  var val:string = (<HTMLInputElement>document.getElementById("fi")).value;


@Component({
  selector: 'app-newplaylist',
  templateUrl: './newplaylist.component.html',
  styleUrls: ['./newplaylist.component.css']
})
export class NewplaylistComponent implements OnInit {
 green  ="Green.jpg";
 orange = "Orange.jpg";
 world = 'SpotEarth-min.jpg';
  name: string = 'lu';

  

  fullLink: string = 'https://open.spotify.com/embed/user/1244653463/playlist/0ugR4wxPu1IUQ3r8P7vCLk'


  PlaylistHref: string = "https://open.spotify.com/embed/user/1244653463/playlist/"


  currentCode: AccessCode = {
    code:""
  }

  currentPlaylist: Playlist2 = {
    name: "",
    description: "",
    public: false
  }
  
  constructor(private getPlay: GetPlayService, private sanitize: DomSanitizer) { 
    this.sanitize = sanitize;
  }

  ngOnInit() {
    console.log(this.searched)
    this.localTest();
  }
  
  getImage(){
    return 'url(src/assets/Green.jpg)'
  }

  savePlaylist(){
    localStorage.setItem("savedPlayList", this.currentPlaylist.name)
    
  }

  suggestPlaylist(){

  }

 saveAccessCode(code:string){
    localStorage.setItem("accessCode", code)
    console.log(code)
 }

searched1: TrackJson= {
  tracks: null
}

searched: Tracks={
        href: '',
        items: [],
        limit: 0,
        next: '',
        offset: 0,
        previous: null,
        total: 0
}


currentTrack: Track ={
  trackId:"",
  album:[],
  name:[]
}
  playlistLink: string = this.PlaylistHref + this.currentPlaylist.name;
  showNewPlayistId(){
   
     this.getPlay.newPlaylist().subscribe((data: Playlist2)=> this.currentPlaylist ={

       name: data['id'],
       description: data['name'],
       public: data['public']
     

  }); 
  }

  showSomething(){
    this.getPlay.getSomething().subscribe((data: Track)=> this.currentTrack = {
        album: data['album'],
        trackId: data['id'],
        name: data['name']
  
    });
    console.log(this.currentTrack.name)
  }

    use:object= null;
    

    localTest(){
      this.getPlay.localStorageTest().subscribe((data:Object)=>
      this.use={
        data
      })
      console.log(this.use);
      localStorage.setItem("Strored", JSON.stringify(this.use));
    }
  
    searchedForTrack(searchs:string){
      this.getPlay.search(searchs).subscribe((data:TrackJson)=> this.searched1={
        tracks: data['tracks']

      })
      console.log(this.searched1.tracks.items[0].id)
    }


  postTrack(playListId:string, track:string){
    this.getPlay.addTrack(playListId, track).subscribe((data: Track)=>this.currentTrack={
      
      trackId: data['id'],
      album: data['album'],
      name: data['name']
    })
    this.orange = this.green
  }

  link: string = 'https://open.spotify.com/embed/user/1244653463/playlist/';
  
  cleanUrl(append: string){
   return this.sanitize.bypassSecurityTrustResourceUrl(this.link + append)
  }
  
}
