import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  allStudent:any;
  
  constructor(
    private _stu : StudentService,
    private _router : Router
  ) {
     this._stu.getAllStudent().subscribe(res => {
       console.log(res);
      this.allStudent = res;
      
    })
  
      
    }

    


  delete(id: any) {
    console.log('this is my id:-', id.docId);
    this._stu.delete(id.docId).then(res => {
      if (this.allStudent < [0]) {
        this._router.navigate(['/student/list'])
      }
    });
  }


  ngOnInit(): void {
  }

}



















 // this._stu.getStudent().subscribe(result=>{
    //   this.allStudent= result;
    // })





  // askDelete(obj:any){
  //   this.student = obj;
  // }
  // confDelete(btn:any){
  //   this._stu.deleteStudent(this.student.id).subscribe(result=>{
  //     let n = this.allStudent.indexOf(this.student);
  //     this.allStudent.splice(n, 1);
  //     btn.click();
  //   })
  // }

  // edit(obj:any){
  //   this._router.navigate(["/student/edit/"+obj.id]);
  // }
  