import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.interface';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

    stuForm: FormGroup
  id: any;
  studentData: any;
  checkForm = false;

  constructor(
     private _fb: FormBuilder,
    private _router: Router,
    private _stu: StudentService,
    private _actRoute: ActivatedRoute
  ) { 
            
           this.stuForm = this._fb.group({
      id : "",
      name : ["",Validators.required],
      age : ["", Validators.required],
      city : ["", Validators.required]
    })

   }

  ngOnInit(): void {

 this.id = this._actRoute.snapshot.paramMap.get('docId')
    // console.log(this.id);
    this._stu.getOneStudent(this.id).subscribe(res => {
      // console.log(res);
      this.stuForm.get('name')?.setValue(res.name)
      this.stuForm.get('age')?.setValue(res.age)
       this.stuForm.get('city')?.setValue(res.city)
    })


  }


  submit() {
    
      this._stu.update(this.id, this.stuForm.value).then(res => {
        console.log(res);
        
        this._router.navigate(['student/list']);
      })

  }


  
}
