import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UploadImageModalComponent } from 'src/app/shared/components/upload-image-modal/upload-image-modal.component';
import { BackgroundModel } from 'src/app/shared/models/background.model';

@Component({
  selector: 'app-bg-toolbar-general',
  templateUrl: './bg-toolbar-general.component.html',
  styleUrls: ['./bg-toolbar-general.component.css']
})
export class BgToolbarGeneralComponent implements OnInit {

  @Input() background:BackgroundModel = new BackgroundModel();
  @Output() onChange=new EventEmitter<BackgroundModel>();

  constructor(
    private _modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {
    
  }

  showUploadDialog() {
    let uploadDialog: BsModalRef;
    uploadDialog = this._modalService.show(UploadImageModalComponent, {
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-lg',
      initialState:{
        // type:'background'
      }
    });

    uploadDialog.content.onSave.subscribe((url:string) => {
      this.background.imageUrl = url;
      this.onChange.emit(this.background);
    });
  }

  onChangeSpace(value:string){
    this.background.spacing = value;
      this.onChange.emit(this.background);
  }

  onChangeHeight(value:string){
    this.background.height = value;
      this.onChange.emit(this.background);
  }
}
