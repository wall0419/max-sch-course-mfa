import { Component, OnInit } from '@angular/core';

//We can also specify the template directly in typescript via html selectors (useful for very small templates)
@Component({
  //We can specify the selector to be an attribute rather than an element
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  serverName: string;
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! The name is: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
