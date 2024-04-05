import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LinkScribeService {

  constructor(private http: HttpClient, private cookies: CookieService) {}

  //Obtener el titulo del sitio
  getTittle(link: any): Observable<any> {
    return this.http.post<any>("https://link-backend-nyy5owa2fa-uc.a.run.app/webInfo/title", link);

  }
  //Obtener la imagen
  getImage(link: any): Observable<Blob> {
    return this.http.post("https://link-backend-nyy5owa2fa-uc.a.run.app/webInfo/image",link,{ responseType: 'blob' });
  }
  predict(link: any): Observable<any[]> {
    return this.http.post<any[]>("https://link-backend-nyy5owa2fa-uc.a.run.app/LScribe-Model/predict", link);
   
  }

}
