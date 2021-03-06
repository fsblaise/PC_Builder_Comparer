import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../../shared/services/gallery.service";
import {Case} from "../../shared/models/Case";
import {Cpu} from "../../shared/models/Cpu";
import {Gpu} from "../../shared/models/Gpu";
import {Mobo} from "../../shared/models/Mobo";
import {Psu} from "../../shared/models/Psu";
import {Ram} from "../../shared/models/Ram";
import {Drive} from "../../shared/models/Drive";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  caseObject?: Array<Case>;
  cpuObject?: Array<Cpu>;
  moboObject?: Array<Mobo>;
  ramObject?: Array<Ram>;
  gpuObject?: Array<Gpu>;
  psuObject?: Array<Psu>;
  storageObject?: Array<Drive>;
  chosenCpu?: Cpu;
  chosenMobo?: Mobo;
  chosenRam?: Ram;
  chosenGpu?: Gpu;
  chosenPsu?: Psu;
  chosenCase?: Case;
  chosenStorage?: Drive;
  subscriptions: Array<Subscription> = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.subscriptions.concat(this.galleryService.loadCpuMeta().subscribe((data: Array<Cpu>) => {
      this.cpuObject = data;
    }));
    this.subscriptions.concat(this.galleryService.loadMoboMeta().subscribe((data: Array<Mobo>) => {
      this.moboObject = data;
    }));
    this.subscriptions.concat(this.galleryService.loadRamMeta().subscribe((data: Array<Ram>) => {
      this.ramObject = data;
    }));
    this.subscriptions.concat(this.galleryService.loadGpuMeta().subscribe((data: Array<Gpu>) => {
      this.gpuObject = data;
    }));
    this.subscriptions.concat(this.galleryService.loadPsuMeta().subscribe((data: Array<Psu>) => {
      this.psuObject = data;
    }));
    this.subscriptions.concat(this.galleryService.loadCaseMeta().subscribe((data: Array<Case>) => {
      this.caseObject = data;
    }));
    this.subscriptions.concat(this.galleryService.loadDriveMeta().subscribe((data: Array<Drive>) => {
      this.storageObject = data;
    }));
  }

  loadCpu(imageObject: Cpu) {
    this.chosenCpu = imageObject;
  }
  loadMobo(imageObject: Mobo) {
    this.chosenMobo = imageObject;
  }
  loadRam(imageObject: Ram) {
    this.chosenRam = imageObject;
  }
  loadGpu(imageObject: Gpu) {
    this.chosenGpu = imageObject;
  }
  loadPsu(imageObject: Psu) {
    this.chosenPsu = imageObject;
  }
  loadCase(imageObject: Case) {
    this.chosenCase = imageObject;
  }
  loadStorage(imageObject: Drive) {
    this.chosenStorage = imageObject;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      if (sub !== null) sub.unsubscribe();
    });
  }
}
