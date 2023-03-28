import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cooking-book';

  loadedFeature = 'recipe'; // Considering this to be the initial one but in onNavigate(), we will set this to the value that
  // we have received.

  onNavigate(feature: string){
    // The argument represents the feature we want to navigate to. We will also need to make sure that we actually store this feature
    // for which we will be using loadedFeature.
    this.loadedFeature = feature;
    // Using this, we can just use ngIf() to determine which feature should be displayed.
  }
}
