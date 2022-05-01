import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Image} from "../../../shared/models/Image";
import {Cpu} from "../../../shared/models/Cpu";
import {Mobo} from "../../../shared/models/Mobo";
import {Ram} from "../../../shared/models/Ram";
import {Psu} from "../../../shared/models/Psu";
import {Gpu} from "../../../shared/models/Gpu";
import {Case} from "../../../shared/models/Case";
import {Drive} from "../../../shared/models/Drive";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() cpuObjectInput?: Array<any>;
  @Input() moboObjectInput?: Array<any>;
  @Input() ramObjectInput?: Array<any>;
  @Input() gpuObjectInput?: Array<any>;
  @Input() psuObjectInput?: Array<any>;
  @Input() caseObjectInput?: Array<any>;
  @Input() storageObjectInput?: Array<any>;
  @Output() cpuObjectEmitter: EventEmitter<Cpu> = new EventEmitter<Cpu>();
  @Output() moboObjectEmitter: EventEmitter<Mobo> = new EventEmitter<Mobo>();
  @Output() ramObjectEmitter: EventEmitter<Ram> = new EventEmitter<Ram>();
  @Output() gpuObjectEmitter: EventEmitter<Gpu> = new EventEmitter<Gpu>();
  @Output() psuObjectEmitter: EventEmitter<Psu> = new EventEmitter<Psu>();
  @Output() caseObjectEmitter: EventEmitter<Case> = new EventEmitter<Case>();
  @Output() storageObjectEmitter: EventEmitter<Drive> = new EventEmitter<Drive>();
  chosenCpu: any;
  chosenMobo: any;
  chosenRam: any;
  chosenGpu: any;
  chosenPsu: any;
  chosenCase: any;
  chosenStorage: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.cpuObjectInput){
      this.chosenCpu = this.cpuObjectInput[0];
      this.reload();
    }
    if (this.moboObjectInput){
      this.chosenMobo = this.moboObjectInput[0];
      this.reload2();
    }
    if (this.ramObjectInput){
      this.chosenRam = this.ramObjectInput[0];
      this.reload3();
    }
    if (this.gpuObjectInput){
      this.chosenGpu = this.gpuObjectInput[0];
      this.reload4();
    }
    if (this.psuObjectInput){
      this.chosenPsu = this.psuObjectInput[0];
      this.reload5();
    }
    if (this.caseObjectInput){
      this.chosenCase = this.caseObjectInput[0];
      this.reload6();
    }
    if (this.storageObjectInput){
      this.chosenStorage = this.storageObjectInput[0];
      this.reload7();
    }
  }

  reload() {
    this.cpuObjectEmitter.emit(this.chosenCpu);
  }
  reload2() {
    this.moboObjectEmitter.emit(this.chosenMobo);
  }
  reload3() {
    this.ramObjectEmitter.emit(this.chosenRam);
  }
  reload4() {
    this.gpuObjectEmitter.emit(this.chosenGpu);
  }
  reload5() {
    this.psuObjectEmitter.emit(this.chosenPsu);
  }
  reload6() {
    this.caseObjectEmitter.emit(this.chosenCase);
  }
  reload7() {
    this.storageObjectEmitter.emit(this.chosenStorage);
  }

  build() {

  }
}
