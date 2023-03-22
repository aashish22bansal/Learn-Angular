// Import Components
import { Component } from "@angular/core";

// Creating Components
/* After importing the class, we will create the JavaScript Component as:*/
@Component({
    /* Here. we can have some important information which will be stored as metadata for this class (in the background) which will then tell Angular what to do with this class.*/
    /* An important piece of information is the selector. So, basically the HTML Tag with which we are able to use this component later in the other components/templates and that name given to this selector is a unique name so that we do not accidentally overwrite it with some default HTML Element.*/
    selector: 'app-server',
    templateUrl: './server.component.html'
    // The template refers to an external file which needs to be created in the same folder with the syntax COMPONENT_NAME.component.html
})

// Creating Component Class
export class ServerComponent{ // The class is being exported to be used in the app.component
    //
}// End of class ServerComponent