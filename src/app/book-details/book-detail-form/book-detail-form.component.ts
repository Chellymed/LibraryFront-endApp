import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-book-detail-form',
  templateUrl: './book-detail-form.component.html',
  styles: [
  ]
})
export class BookDetailFormComponent implements OnInit {

  constructor(public service:BookDetailService,
    private toster:ToastrService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.Id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  insertRecord(form: NgForm) {
    this.service.postBookDetail().subscribe(
      res=> {
        this.resetForm(form);
        this.service.refreshList();
        this.toster.success('Submittes Successfully','Book Detail Register')
      },
      err => {console.log(err)}
    );
  }
  updateRecord(form : NgForm){
    this.service.putBookDetail().subscribe(
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
    this.service.formData = new BookDetail();
  }

}
