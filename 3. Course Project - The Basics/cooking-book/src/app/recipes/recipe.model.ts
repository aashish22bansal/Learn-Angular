// This is what the Recipe will look like
// This is a Model which is just a blueprint for objects we create
export class Recipe{
    // The name, description and imagePath of the recipe should be accessible from outside the class easily, hence public
    public name: string;
    public description: string;
    public imagePath: string;

    /** Default Constructor cannot be created because we are allowed to create only one constructor. */
    // constructor(){
    //     this.name = "DEFAULT_NAME";
    //     this.description = "DEFAULT_DESCRIPTION";
    //     this.imagePath = "DEFAULT_PATH";
    // }

    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}