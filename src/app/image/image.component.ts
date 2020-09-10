import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageTransform } from '../interfaces/image-transform.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ImageComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
  }
  // 框框出現在最上面
  open(content) {
    this.modalService.open(content);
  }
  // 框框出現在中間
  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }

  // 上傳的圖及剪裁過後的圖
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  transform: ImageTransform = {};


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  // 將圖片轉成base64編碼 在沒上傳條件下將圖片加入網頁
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  // 左轉 90deg
  left() {
    this.canvasRotation--;

  }

  // 右轉 90deg
  right() {
    this.canvasRotation++;
  }

  // 重置圖片
  resetImage() {
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

}


