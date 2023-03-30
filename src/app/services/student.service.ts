import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs';
import { map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

  constructor(
private _http : HttpClient,
private db : AngularFirestore
  ){

  }


  addAllStudent(obj : any){
     return this.db.collection('Student').add(obj);
  }
    


  
  getOneStudent(id:any){
    return this.db.collection('Student').doc(id).snapshotChanges()
      .pipe(
        map((doc) => {
          const data: any = doc.payload.data();
          const docId = doc.payload.id;
          return { docId, ...data, };
        })
      );
  } 




getAllStudent() {
    return this.db.collection('Student').snapshotChanges()
      .pipe(map((actions) => {
        return actions.map(doc => {
          const data: any = doc.payload.doc.data();
          const docId = doc.payload.doc.id;
          return { docId, ...data };
        });
      })
      )
  }


  delete(docId: any) {
  return this.db.collection('Student').doc(docId).delete().then(async()=>{
  }).catch((error)=>{
      console.log('there is some issue');
    })
  }





  update(docId:any, obj: any) {
    return this.db.collection('Student').doc(docId).update(obj)
    .then(async (res: any) => { 
    }).catch((error) => {
      console.log('there is some issue');
    });
  }


}
  

























































// apiUrl = "http://localhost:2999/student/";
  // constructor(
  //   private _http : HttpClient
  // ) { }

  // addStudent(obj:any){
  //   return this._http.post<Student>(this.apiUrl, obj);
  // }
  // getStudent(){
  //   return this._http.get<Student>(this.apiUrl);
  // }
  // getStudentById(id:any){
  //   return this._http.get<Student>(this.apiUrl+id);
  // }
  // deleteStudent(id:any){
  //   return this._http.delete<Student>(this.apiUrl+id);
  // }
  // updateStudent(id:any, obj:any){
  //   return this._http.put<Student>(this.apiUrl+id, obj);
  // }