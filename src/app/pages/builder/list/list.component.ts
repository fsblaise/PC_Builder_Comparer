import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Image} from "../../../shared/models/Image";
import {Cpu} from "../../../shared/models/Cpu";
import {Mobo} from "../../../shared/models/Mobo";
import {Ram} from "../../../shared/models/Ram";
import {Psu} from "../../../shared/models/Psu";
import {Gpu} from "../../../shared/models/Gpu";
import {Case} from "../../../shared/models/Case";
import {Drive} from "../../../shared/models/Drive";
import {Computer} from "../../../shared/models/Computer";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ComputerService} from "../../../shared/services/computer.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  chosenCpu?: Cpu;
  chosenMobo?: Mobo;
  chosenRam?: Ram;
  chosenGpu?: Gpu;
  chosenPsu?: Psu;
  chosenCase?: Case;
  chosenStorage?: Drive;
  authState: any = null;
  name: any;

  constructor(private afs: AngularFirestore, private computerService: ComputerService, private firebaseAuth:AngularFireAuth, private snackBar: MatSnackBar) {
    this.firebaseAuth.authState.subscribe( authState => {
      this.authState = authState;
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.cpuObjectInput){
      this.chosenCpu = this.cpuObjectInput[0];
      this.reload();
      return;
    }
    if (this.moboObjectInput){
      this.chosenMobo = this.moboObjectInput[0];
      this.reload2();
      return;
    }
    if (this.ramObjectInput){
      this.chosenRam = this.ramObjectInput[0];
      this.reload3();
      return;
    }
    if (this.gpuObjectInput){
      this.chosenGpu = this.gpuObjectInput[0];
      this.reload4();
      return;
    }
    if (this.psuObjectInput){
      this.chosenPsu = this.psuObjectInput[0];
      this.reload5();
      return;
    }
    if (this.caseObjectInput){
      this.chosenCase = this.caseObjectInput[0];
      this.reload6();
      return;
    }
    if (this.storageObjectInput){
      this.chosenStorage = this.storageObjectInput[0];
      this.reload7();
      return;
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

  async build() {
    if (this.authState === null || this.chosenCpu === undefined ||
        this.chosenMobo === undefined || this.chosenRam === undefined ||
        this.chosenGpu === undefined || this.chosenPsu === undefined ||
        this.chosenCase === undefined || this.chosenStorage === undefined){
      this.snackBar.open('You did not pick one or two parts, or you are not logged in!','',{duration: 3000, panelClass: 'center'});
      // alert('You did not pick one or two parts, or you are not logged in!');
      return;
    }
    if (this.chosenCpu.socket !== this.chosenMobo.socket){
      this.snackBar.open('This processor is not compatible with this motherboard!','',{duration: 3000, panelClass: 'center'});
      // alert('This processor is not compatible with this motherboard!');
      return;
    }
    if (this.chosenRam.architechture !== this.chosenMobo.ramtype){
      this.snackBar.open('This ram is not compatible with this motherboard!','',{duration: 3000, panelClass: 'center'});
      // alert('This ram is not compatible with this motherboard!');
      return;
    }
    if (this.chosenGpu.pciegen !== this.chosenMobo.pciegen){
      this.snackBar.open('This graphics card cannot perform 100%, because of pci-e bandwidth limitations!','',{duration: 3000, panelClass: 'center'});
      await new Promise(f => setTimeout(f, 3000));
      // alert('This graphics card cannot perform 100%, because of pci-e bandwidth limitations!');
    }
    if (this.chosenCase.form === 'mATX' && (this.chosenMobo.form === 'ATX' || this.chosenMobo.form === 'eATX')){
      this.snackBar.open('This motherboard will not fit in this case!','',{duration: 3000, panelClass: 'center'});
      // alert('This motherboard will not fit in this case!');
      return;
    }
    if (this.chosenCpu.tdp + this.chosenGpu.tdp > this.chosenPsu.wattage){
      this.snackBar.open('This power supply is too weak for your configuration!','',{duration: 3000, panelClass: 'center'});
      // alert('This power supply is too weak for your configuration!');
      return;
    }
    if (this.chosenCpu.tdp + this.chosenGpu.tdp > this.chosenPsu.wattage-100){
      this.snackBar.open('There is very little headroom in terms of power consumption. Be careful!','',{duration: 3000, panelClass: 'center'});
      await new Promise(f => setTimeout(f, 3000));
      // alert('There is very little headroom in terms of power consumption. Be careful!');
    }

    const computer: Computer = {
      id: this.afs.createId(),
      userId: this.authState.uid,
      name: this.name,
      moboId: this.chosenMobo.id,
      cpuId: this.chosenCpu.id,
      ramId: this.chosenRam.id,
      gpuId: this.chosenGpu.id,
      psuId: this.chosenPsu.id,
      caseId: this.chosenCase.id,
      storageId: this.chosenStorage.id,
      scoresum: this.chosenCpu.score+this.chosenGpu.score+this.chosenRam.score
    };
    this.computerService.create(computer).then(_ => {
      console.log('Computer added successfully!');
      this.snackBar.open('Computer added successfully!','',{duration: 3000, panelClass: 'center'});
      // alert('Computer added successfully!');
    }).catch(error => {
      console.error(error);
    });
  }
}
