import { ItemPageComponent } from "../item-page/item-page.component";

export const exitGuard = (component: ItemPageComponent) => {

    if(!component.saved){
        return confirm("You didn't save. Are you shure?");
    }
    return true;

}