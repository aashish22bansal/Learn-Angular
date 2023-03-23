import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  /** We can write the HTML Code with the template file as: */
  // template: '
  //   <app-server>  WRITE HTML CODE WITHIN THIS SPACE.  </app-server>
  //   <app-server>  WRITE HTML CODE WITHIN THIS SPACE.  </app-server>
  // ',
  /** We can write the HTML Code within this Space if the code happens to be either simple or short otherwise it is advisable that the code should be written in an external file and the file must be mapped to this location. In allows Inlining the Templates. We can omit a Selector but we cannot omit a Template. 
   *  
   *  
   *  We already know that the "selector" has to be a unique selector so that we do not accidentally overwrite already existing element or Component 
   *  made by the third-party package user of the project. Also, it is not necessary to use this type of selector. The selector "app-root" is the same
   *  type of selector which is being used in CSS for selecting an element. This is being recognised by Angular because within "selector" for the component
   *  we have mentioned that particular "selector" which is basically the same way we select CSS. We can add the "[]" (Square Brackets) to add the attribute 
   *  selector (because in CSS, we can select those attributes by enclosing them in Square Brackets). Now, if we were to save this and compile, we will not 
   *  get any compilation error but we can see that our application will be broken. This happens because our code does not recognize the "app-servers" Component
   *  anymore because we changed the selector to be an attribute. So, to use that component, we will have to add a "<div></div>" within which we will place this 
   *  as "<div app-servers></div>". Another way to make this work is by using it in the form of a class using the '.' (Dot) Operator as ".app-servers". Now, we
   *  can select this by using class as "<div class="app-servers"></div>". Selection using id is not going to work in this case.
   */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
