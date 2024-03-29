import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore) { }

  /**
   * crea la tabla en firebase con la información del link
   * @param link 
   */
  createInfoLink(link:any){
    return this.firestore.collection("Details").add(link);
  }
}
