import { Component, OnInit } from '@angular/core';

//We can also specify the template directly in typescript via html selectors (useful for very small templates)
@Component({
  //We can specify the selector to be an attribute rather than an element
  // selector: '[app-servers]',
  selector: '.app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
