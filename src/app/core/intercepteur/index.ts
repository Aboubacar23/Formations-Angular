import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthIntercepteur } from "./auth.intercepteur";


export const httpInterceptorProvides = [
    { provide : HTTP_INTERCEPTORS, useClass : AuthIntercepteur, multi : true}
];