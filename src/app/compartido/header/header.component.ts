import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  salir() {
    console.log("Salir")
    localStorage.clear();
    this._router.navigate(['/login'])
  }

  toggle():void {
    $('.ui.labeled.icon.sidebar').sidebar('toggle')
  }
}
