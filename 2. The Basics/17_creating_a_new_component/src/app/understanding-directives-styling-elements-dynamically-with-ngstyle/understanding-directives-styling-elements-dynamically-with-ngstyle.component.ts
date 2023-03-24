import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding-directives-styling-elements-dynamically-with-ngstyle',
  templateUrl: './understanding-directives-styling-elements-dynamically-with-ngstyle.component.html',
  styleUrls: ['./understanding-directives-styling-elements-dynamically-with-ngstyle.component.css']
})
export class UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName: string = '';
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  ServerCreationStatus: string = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(){}

  onCreateServer(){
    this.serverCreated = true;
    this.ServerCreationStatus = 'Server was Created!';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green':'red';
  }
}
