import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private elementRef: ElementRef, private route: Router) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }

  User: User = {
      id: null, 
      email : '',
      password : '',
      playlistId: '1'  
  }

  hide: boolean = true;
  error: boolean = false;
  error2: boolean = false;
  password2: string = ''; 
  
  showForm(){
    if(this.hide == true){
      this.hide = false;
    } else if(this.hide == false && this.error == true) {
      this.hide = false;
      this.error = false;
    }
  }

  showForm2(){
    this.hide = true;
    this.error = false;
    this.error2 = false;
  }

  login(event) {
      
      event.preventDefault()
      const target = event.target
      this.User.email = target.querySelector('#email').value
      this.User.password = target.querySelector('#password').value
      this.userService.loginUser(this.User).subscribe((response) => {
        this.error2 = true;
          console.log(response );
          console.log(response);
          localStorage.setItem("LoggedUser",JSON.stringify(response))
          if(response[0]){
            this.route.navigateByUrl("/playlist");
          }

          })
    }

    addUser(event) {
      event.preventDefault()
      const target = event.target
      this.User.email = target.querySelector('#email').value
      this.User.password = target.querySelector('#password').value
      this.password2 = target.querySelector('#password2').value
      this.User.playlistId = 'placeholder';
      if(this.User.password == this.password2 && this.User.password != ''){
        this.error = false;
        this.hide = true;
        this.userService.addUser(this.User).subscribe((response) => {
        console.log(response.email + " registered.");
        })
      } else {
        this.error = true;
        
      }
      

    }

}