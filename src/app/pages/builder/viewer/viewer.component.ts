import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Image} from "../../../shared/models/Image";
import {Case} from "../../../shared/models/Case";
import {Cpu} from "../../../shared/models/Cpu";
import {Gpu} from "../../../shared/models/Gpu";
import {Mobo} from "../../../shared/models/Mobo";
import {Psu} from "../../../shared/models/Psu";
import {Ram} from "../../../shared/models/Ram";
import {Drive} from "../../../shared/models/Drive";
import {GalleryService} from "../../../shared/services/gallery.service";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() cpuInput?: Cpu;
  @Input() moboInput?: Mobo;
  @Input() ramInput?: Ram;
  @Input() gpuInput?: Gpu;
  @Input() psuInput?: Psu;
  @Input() caseInput?: Case;
  @Input() storageInput?: Drive;
  loadedCpu?: string;
  loadedMobo?: string;
  loadedRam?: string;
  loadedGpu?: string;
  loadedPsu?: string;
  loadedCase?: string;
  loadedStorage?: string;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.cpuInput?.id) {
      this.galleryService.loadImage(this.cpuInput.imgid).subscribe(data => {
        this.loadedCpu = data;
      });
    }
    if (this.moboInput?.id) {
      this.galleryService.loadImage(this.moboInput.imgid).subscribe(data => {
        this.loadedMobo = data;
      });
    }
    if (this.ramInput?.id) {
      this.galleryService.loadImage(this.ramInput.imgid).subscribe(data => {
        this.loadedRam = data;
      });
    }
    if (this.gpuInput?.id) {
      this.galleryService.loadImage(this.gpuInput.imgid).subscribe(data => {
        this.loadedGpu = data;
      });
    }
    if (this.psuInput?.id) {
      this.galleryService.loadImage(this.psuInput.imgid).subscribe(data => {
        this.loadedPsu = data;
      });
    }
    if (this.caseInput?.id) {
      this.galleryService.loadImage(this.caseInput.imgid).subscribe(data => {
        this.loadedCase = data;
      });
    }
    if (this.storageInput?.id) {
      this.galleryService.loadImage(this.storageInput.imgid).subscribe(data => {
        this.loadedStorage = data;
      });
    }
  }
}
