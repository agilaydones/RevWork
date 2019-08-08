import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users2, playlist } from 'src/app/models/user';
import { JsonPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { AdduserService } from 'src/app/services/adduser.service';
import { Playlist } from '../../models/playList';
import { PlayState } from '@angular/core/src/render3/interfaces/player';
// import { UserService } from '../../services/user.service'


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  playlistFrame: string = 'https://open.spotify.com/embed/user/1244653463/playlist/'
  


  constructor(private userService: UserService, private sanitize:DomSanitizer, private addServ: AdduserService) { }
  

 private obj = localStorage.getItem("LoggedUser");
  obj2 = JSON.parse(this.obj);
  SplaylistId = localStorage.getItem("savedPlayList")

  
  ngOnInit() {
    console.log(Object.keys(this.obj2))
    this.getUser1()
    console.log(this.obj2[0].id)
    console.log(this.SplaylistId)
    
    this.getPlay()
  }
 
currentUsers1: Users2 ={
Users1: []
}
playlisyObj:Playlist={
  id: this.obj2[0].id,
  playlist:[
    this.SplaylistId
  ]
}




currentPlaylists: playlist= {
  
  playlist: null
}

getPlay(){
  this.userService.getList().subscribe((data:Object)=> this.currentPlaylists ={
    playlist:data
  })
  console.log(this.currentPlaylists.playlist)
}



getUser1(){
  this.userService.getUsers2().subscribe((data: [])=> this.currentUsers1={
    Users1: data
    
  })
  console.log(this.currentUsers1.Users1)
}
link: string = 'https://open.spotify.com/embed/user/1244653463/playlist/';

cleanUrl(append: string){
  return   this.sanitize.bypassSecurityTrustResourceUrl(this.link + append)
}

putUser(id :number, play: Object){
  console.log(play)
  return this.addServ.updateUser(id, play).subscribe((data: playlist)=> this.playlisyObj)
}

constructPlaylist(uId, pid){

  return 
}

selectUser(sel: string){
  console.log(sel)
  return sel
}

}