import { Component } from '@angular/core';
import { RightModalComponent } from '../shared/components/right-modal/right-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  selectedItem:string = 'Background Image';
  items=['Background Image','Personal Image','Personal Info']

  constructor( private _modalService: BsModalService,
    public bsModalRef: BsModalRef){}
  onSelect(args:any): void {
      }

    showDialog() {
      let uploadDialog: BsModalRef;
      uploadDialog = this._modalService.show(RightModalComponent, {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-md modal-right',
        initialState:{
          // type:'background'
        }
      });
  
      uploadDialog.content.onSave.subscribe((url:string) => {
        
      });
    }
  
    
}
