import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookTypeDetail } from '../shared/bookType-detail.model';
import { BookTypeDetailService } from '../shared/bookType-detail.service';

@Component({
  selector: 'app-book-type-details',
  templateUrl: './book-type-details.component.html',
  styleUrls: ['./book-type-details.component.scss']
})
export class BookTypeDetailsComponent implements OnInit {

  constructor(public service : BookTypeDetailService,
    private toastr: ToastrService)  { }

  ngOnInit(): void {
    this.service.refreshTypeList();
  }
  populateForm(selectedRecord:BookTypeDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDeleteType(id: number) {
    if (confirm('Are you sure to delete this Type of Book?')) {
      this.service.deleteBookTypeDetail(id)
        .subscribe(
          res => {
            this.service.refreshTypeList();
            this.toastr.error("Deleted successfully", 'Type of book Detail');
          },
          err => { console.log(err) }
        )
    }
  }

}
