import { Component } from '@angular/core';


/** Now, just like we were able to choose between External File and Inline Code for template, we can do the same for styling. We can notice that
 *  the "styleUrls" is an array here whereas templateUrl is not an array because we can notice multiple stylesheets here. So, we can add pointers 
 *  to other stylesheets.
 *  Besides this, we can set another property known as "styles" which takes an array of strings and we can define the styles within this array of 
 *  strings in this file.
 *  We cannot combine "styleUrls" ans "styles", so we will have to choosen any one of it.\
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    p{
      color: green;   
    }
  `]
})

export class AppComponent {
  title = '17_creating_a_new_component';
}
