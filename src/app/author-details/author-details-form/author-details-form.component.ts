import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthorDetail } from "src/app/shared/Author-delail.model";
import { AuthorDetailService } from "src/app/shared/Author-delail.service";
@Component({
  selector: 'app-author-details-form',
  templateUrl: './author-details-form.component.html',
  styleUrls: ['./author-details-form.component.scss']
})
export class AuthorDetailsFormComponent implements OnInit {

  constructor(public service:AuthorDetailService,
    private toster:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.Id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postAuthorDetail().subscribe(
      res=> {
        this.resetForm(form);
        this.service.refreshList();
        this.toster.success('Submittes Successfully','Book Detail Register')
      },
      err => {console.log(err)}
    );
  }
  updateRecord(form : NgForm){
    this.service.putAuthorDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toster.info('Updated successfully', 'Book Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new AuthorDetail();
  }

}
