import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
// import { HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { DynammicServerComponent } from './dynammic-server/dynammic-server.component';
import { DataBindingStringInterpolationComponent } from './data-binding-string-interpolation/data-binding-string-interpolation.component';
import { DataBindingPropertyBindingComponent } from './data-binding-property-binding/data-binding-property-binding.component';
import { DataBindingEventBindingComponent } from './data-binding-event-binding/data-binding-event-binding.component';
import { DataBindingTwoWayBindingComponent } from './data-binding-two-way-binding/data-binding-two-way-binding.component';
import { DataBindingCombiningAllFormsOfDataBindingComponent } from './data-binding-combining-all-forms-of-data-binding/data-binding-combining-all-forms-of-data-binding.component';
import { AssignmentTwoDataBindingComponent } from './assignment-two-data-binding/assignment-two-data-binding.component';
import { UnderstandingDirectivesComponent } from './understanding-directives/understanding-directives.component';
import { UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent } from './understanding-directives-using-nglf-to-output-data-conditionally/understanding-directives-using-nglf-to-output-data-conditionally.component';
import { UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent } from './understanding-directives-enhancing-ng-if-with-else-condition/understanding-directives-enhancing-ng-if-with-else-condition.component';
import { UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent } from './understanding-directives-styling-elements-dynamically-with-ngstyle/understanding-directives-styling-elements-dynamically-with-ngstyle.component';
import { UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent } from './understanding-directives-css-classes-dynamically-with-ngclass/understanding-directives-css-classes-dynamically-with-ngclass.component';
import { UnderstandingDirectivesOutputtingListsWithNgForComponent } from './understanding-directives-outputting-lists-with-ng-for/understanding-directives-outputting-lists-with-ng-for.component';

/** We can see that the AppModule is just an empty TypeScript class like our Component and we transform it to something else by using Decorator (in this case, the NgModule Decorator imported from @angular/core). */
/** Now, within the @NgModule, we can see 4 properties:
 *  1. declarations: This is where we register the new components by appending them to the Array. By doing this, Angular would know that this is a part of it but TypeScript will not know where to find this Component, so when we try to bundle the code, then we will get an error. To solve this, we will need to add an "import" statement manually at the top pointing to this which is a TypeScript feature and now this will be allowed to be bundled. With this, Angular will know about the presence of the "server" Component and will also know the location of the component.
 *  2. imports: This allows us to add some other modules to this Module since we can split our App into multiple Modules and then import these Modules to make this Module Leaner and outsource few Components to other Modules.
 *  3. providers
 *  4. bootstrap
 *  This is responsible for telling Angular about the component which we should be aware of at the point of time the whole application starts, so basically which file we should recognize within the index.html file.
 *  Now, it is possible to create new Components and since we have created a new component, we will need to register it within the Module, so that Angular knows that this component exists because it is important.
 *  By default, Angular will not scan all the files, so if we do not tell it that the "server" component exists, it doesn't know it because just creating the files is not enough.
 */
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SucessAlertComponent,
    DynammicServerComponent,
    DataBindingStringInterpolationComponent,
    DataBindingPropertyBindingComponent,
    DataBindingEventBindingComponent,
    DataBindingTwoWayBindingComponent,
    DataBindingCombiningAllFormsOfDataBindingComponent,
    AssignmentTwoDataBindingComponent,
    UnderstandingDirectivesComponent,
    UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent,
    UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent,
    UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent,
    UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent,
    UnderstandingDirectivesOutputtingListsWithNgForComponent
  ],
  imports: [
    BrowserModule, // This module gives us all the base functionality using which we will need to start our application.
    AppRoutingModule,
    FormsModule,
    // HttpModule,
    HttpClientModule,
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
