import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stuForm: FormGroup;
  id: any;
  docId: any;
  checkForm = false;


  constructor(
    private _fb : FormBuilder,
    private _stu : StudentService,
    private _router : Router,
    private _actRoute : ActivatedRoute
  ) {


     this.stuForm = this._fb.group({
      id : "",
      name : ["",Validators.required],
      age : ["", Validators.required],
      city : ["", Validators.required]
    })
  }



  submit(){
    this._stu.addAllStudent(this.stuForm.value).then(res => {
      this._router.navigate(['/student/list'])
    })
  }

  ngOnInit(): void {
  }

 
}
   










































 // this.id = this._actRoute.snapshot.paramMap.get("id");



 // if(this.id){
    //   this._stu.getallstudent().subscribe(result=>{
    //     this.stuForm.setValue(result);
    //   })
    // }



// submit(){
  //   if(this.stuForm.invalid){
  //     this.checkForm = true;
  //     return;
  //   }
  //   if(this.id){
  //     this._stu.updateStudent(this.id, this.stuForm.value).subscribe(result=>{
  //       this._router.navigate(["/student/list"])
  //     })
  //   }else{

  //     this._stu.addAllstudent(this.stuForm.value).subscribe(result=>{
  //       // console.log(result);
  //       this._router.navigate(["/student/list"])
  //     })
  //   }


  // }