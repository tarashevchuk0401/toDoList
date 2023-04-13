import { inject } from "@angular/core"
import { AuthService } from "./auth.service"

export const guard  =  () => {
    let auth = inject(AuthService);
    return auth.isLogedIn;
}

// import { inject } from "@angular/core";
// import { HomeComponent } from "src/app/home/home.component";
// import { AuthService } from "./auth.service";

// export const test = () => {
//     const auth = inject(AuthService)
//     console.log(auth.isLoggedIn)
//    return auth.isLoggedIn;
   
// }