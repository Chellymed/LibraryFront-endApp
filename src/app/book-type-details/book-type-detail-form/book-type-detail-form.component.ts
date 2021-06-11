import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookTypeDetail } from 'src/app/shared/bookType-detail.model';
import { BookTypeDetailService } from 'src/app/shared/bookType-detail.service';

@Component({
  selector: 'app-book-type-detail-form',
  templateUrl: './book-type-detail-form.component.html',
  styleUrls: ['./book-type-detail-form.component.scss']
})
export class BookTypeDetailFormComponent implements OnInit {

  constructor(public service : BookTypeDetailService,
    private toster: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.Id == null)
      this.insertType(form);
    else
      this.updateType(form);
  }
  
  insertType(form: NgForm) {
    this.service.postBookTypeDetail().subscribe(
      res=> {
        this.resetForm(form);
        this.service.refreshTypeList();
        this.toster.success('Submittes Successfully','Type of Book Detail Register')
      },
      err => {console.log(err)}
    );
  }
  updateType(form : NgForm){
    this.service.putBookTypeDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshTypeList();
        this.toster.info('Updated successfully', 'Type of Book Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new BookTypeDetail();
  }

}
