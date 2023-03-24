import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding-directives-outputting-lists-with-ng-for',
  templateUrl: './understanding-directives-outputting-lists-with-ng-for.component.html',
  styleUrls: ['./understanding-directives-outputting-lists-with-ng-for.component.css']
})
export class UnderstandingDirectivesOutputtingListsWithNgForComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName: string = '';
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  ServerCreationStatus: string = '';
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(){}

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.ServerCreationStatus = 'Server was Created!';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green':'red';
  }
}
