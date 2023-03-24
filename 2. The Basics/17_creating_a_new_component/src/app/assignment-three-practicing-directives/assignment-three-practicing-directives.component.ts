import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three-practicing-directives',
  templateUrl: './assignment-three-practicing-directives.component.html',
  styleUrls: ['./assignment-three-practicing-directives.component.css']
})
export class AssignmentThreePracticingDirectivesComponent implements OnInit {
  showSecret = false;
  log: number[] = [];
  constructor(){}
  ngOnInit(): void {
      
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
