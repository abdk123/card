import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  ImageCropperComponent,
  ImageCroppedEvent,
  LoadedImage,
  ImageTransform,
} from 'ngx-image-cropper';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpResponseBase,
} from '@angular/common/http';
import {
  mergeMap as _observableMergeMap,
  catchError as _observableCatch,
} from 'rxjs/operators';
import {
  Observable,
  throwError as _observableThrow,
  of as _observableOf,
} from 'rxjs';
import { UploadModel } from '../../models/common/upload.model';

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.css'],
})
export class UploadImageModalComponent implements OnInit {
  @Output() onUpload = new EventEmitter<UploadModel>();
  @Input() type = '';
  url: string = '';
  private http: HttpClient;
  constructor(
    public bsModalRef: BsModalRef,
    @Inject(HttpClient) http: HttpClient
  ) {
    this.http = http;
  }
  ngOnInit(): void {}

  imageChangedEvent: any = '';
  croppedImage: any = '';
  transform: ImageTransform = {};
  resetImage() {}

  file: FileDto = new FileDto();
  output: FileOutputDto = new FileOutputDto();
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.file.fileName = file.name;
      this.file.fileSize = file.size;
      this.file.fileType = file.type;
    }
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.file.base64 = event.base64?.toString();
    this.create(this.file);
  }
  showCropper = false;
  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  save() {
    const url = `http://localhost:21021/categories/${this.file.fileName}`;
    this.bsModalRef.hide();
    this.onUpload.emit(new UploadModel({ url: url, type: this.type }));
  }

  create(body: FileDto) {
    let url_ = 'http://localhost:21021/api/services/app/Category/UploadFile';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Accept: 'text/plain',
      }),
    };
    this.http.request('post', url_, options_).subscribe((result) => {});
    //return _observableOf<FileOutputDto>(null as any);
  }

  jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
  processCreate(response: HttpResponseBase): Observable<FileOutputDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;
    console.log(responseBlob);
    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          let result200: any = null;
          let resultData200 =
            _responseText === ''
              ? null
              : JSON.parse(_responseText, this.jsonParseReviver);
          result200 = FileOutputDto.fromJS(resultData200);
          return _observableOf(result200);
        })
      );
    }
    return _observableOf<FileOutputDto>(null as any);
  }

  blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
      if (!blob) {
        observer.next('');
        observer.complete();
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          observer.next((event.target as any).result);
          observer.complete();
        };
        reader.readAsText(blob);
      }
    });
  }
}
export class FileDto {
  fileName: string;
  fileSize: string;
  fileType: string;
  base64: string | undefined;
}

export class FileOutputDto {
  path: string;
  static fromJS(data: any): FileOutputDto {
    data = typeof data === 'object' ? data : {};
    let result = new FileOutputDto();
    result.init(data);
    return result;
  }

  init(_data?: any) {
    if (_data) {
      this.path = _data['path'];
    }
  }
}
