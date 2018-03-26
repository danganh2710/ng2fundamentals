import { Injectable } from "@angular/core";
declare let toastr: any;

@Injectable()
export class ToastrService {
    success(mesage: string, title?: string) {
        toastr.success(mesage, title);
    }

    info(mesage: string, title?: string) {
        toastr.info(mesage, title);
    }
    error(mesage: string, title?: string) {
        toastr.error(mesage, title);
    }
    warning(mesage: string, title?: string) {
        toastr.warning(mesage, title);
    }
}