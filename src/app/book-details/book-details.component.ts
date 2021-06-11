import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: ['./book-details.component.css']

})
export class BookDetailsComponent implements OnInit {

  constructor(public service: BookDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:BookDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this Book?')) {
      this.service.deleteBookDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Book Detail');
          },
          err => { console.log(err) }
        )
    }
  }
}
