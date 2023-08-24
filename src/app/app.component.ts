import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface Observer<T>
{
  closed? :boolean;
  next: (value:T) => void;
  error: (err: any) => void;
  complete: () => void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public valid: boolean = false;
  //newValid$: Observable<boolean> = of(false);

  constructor(private router:Router){
  }
  ngOnInit()
  {
  
    this.valid = Boolean(sessionStorage.getItem('valid')) || false;

    if(this.valid == true)
    {
      this.router.navigate(['/account'], { replaceUrl: true});
    }
    else
    {
      this.router.navigate(['/login'], { replaceUrl: true });
    }

  }


  isLoggedIn()
  {
    return Boolean(sessionStorage.getItem('valid')) || false;
  }

  logOut()
  {
    sessionStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  userLog()
  { 
    this.valid = Boolean(sessionStorage.getItem('valid')) || false;

    console.log(this.valid);
    if(this.valid == true)
    {
      alert("You are already logged In!")
      this.router.navigate(['/account'], { replaceUrl: true });
    }
    else
    {
      alert("You Are On the Login Page Now");
    }
  }

}