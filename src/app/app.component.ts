import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SifWebBoot';
  

  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    )
  {
     this._router.navigate(['/login'])

     
  }



  
}
