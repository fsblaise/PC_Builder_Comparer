import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {Cpu} from "../../shared/models/Cpu";
import {Gpu} from "../../shared/models/Gpu";
import {ComponentService} from "../../shared/services/component.service";
import {ComputerService} from "../../shared/services/computer.service";
import {Computer} from "../../shared/models/Computer";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Mobo} from "../../shared/models/Mobo";
import {Ram} from "../../shared/models/Ram";
import {Psu} from "../../shared/models/Psu";
import {Case} from "../../shared/models/Case";
import {Drive} from "../../shared/models/Drive";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent implements OnInit, OnChanges {

  first: boolean = true;
  cpuObject?: Array<Cpu>;
  gpuObject?: Array<Gpu>;
  computerObject?: Array<Computer>;
  userComputerObject?: Array<Computer>;
  // @ts-ignore
  cpu: Cpu;userCpu: Cpu;
  // @ts-ignore
  mobo: Mobo;userMobo: Mobo;
  // @ts-ignore
  ram: Ram;userRam: Ram;
  // @ts-ignore
  gpu: Gpu;userGpu: Gpu;
  // @ts-ignore
  psu: Psu;userPsu: Psu;
  // @ts-ignore
  case: Case;userCase: Case;
  // @ts-ignore
  drive: Drive;userDrive: Drive;
  userComputer: Array<any> = new Array<any>();
  // @ts-ignore
  userComputerSet: Set<any>;
  otherComputer: Array<any> = new Array<any>();
  // @ts-ignore
  otherComputerSet: Set<any>;
  authState: any;
  id: any;
  loading: boolean = false;
  subscriptions: Array<Subscription> = [];
  @Output() computerObjectEmitter: EventEmitter<Computer> = new EventEmitter<Computer>();
  @Output() userComputerObjectEmitter: EventEmitter<Computer> = new EventEmitter<Computer>();
  chosenComputer?: Computer;
  chosenUserComputer?: Computer;
  relation?: string;

  constructor(private componentService: ComponentService, private computerService: ComputerService, private firebaseAuth: AngularFireAuth, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loading = true;
    Promise.all([this.subscriptions.concat(this.componentService.getAllCpusOrdered().subscribe((data: Array<Cpu>) => {
      this.cpuObject = data;
    })),
      this.subscriptions.concat(this.componentService.getAllGpusOrdered().subscribe((data: Array<Gpu>) => {
        this.gpuObject = data;
      })),
      this.subscriptions.concat(this.computerService.getAll().subscribe((data: Array<Computer>) => {
        this.computerObject = data;
      })),
      this.subscriptions.concat(this.firebaseAuth.authState.subscribe(authState => {
        this.authState = authState;
        this.subscriptions.concat(this.computerService.getAllByUid(this.authState.uid).subscribe((data: Array<Computer>) => {
          this.userComputerObject = data;
          this.loading = false;
        }));
      }))]).finally(() => this.loading = false);
  }

  ngOnChanges(): void {
    if (this.computerObject) {
      this.chosenComputer = this.computerObject[0];
      this.reload2();
    }

    if (this.userComputerObject) {
      this.chosenUserComputer = this.userComputerObject[0];
      this.reload();
    }
  }

  reload() {
    this.userComputerObjectEmitter.emit(this.chosenUserComputer);
  }

  reload2() {
    this.computerObjectEmitter.emit(this.chosenComputer);
  }

  compare() {
    this.userComputer = [];
    this.otherComputer = [];
    if (this.chosenUserComputer == null || this.chosenComputer == null) {
      this.snackBar.open('You have to select a computer in each field, in order to compare!', '', {panelClass: 'center'});
      return;
    }
    if (this.chosenComputer.scoresum > this.chosenUserComputer.scoresum) {
      this.relation = 'smaller';
    } else if (this.chosenComputer.scoresum < this.chosenUserComputer.scoresum) {
      this.relation = 'bigger';
    } else {
      this.relation = 'equal'
    }

    this.subscriptions.concat(this.componentService.getCpuById(this.chosenComputer.cpuId).subscribe((data: any) => {
      this.cpu = data;
      this.otherComputer[0] = this.cpu;
    }));
    this.subscriptions.concat(this.componentService.getMoboById(this.chosenComputer.moboId).subscribe((data: any) => {
      this.mobo = data;
      this.otherComputer[1] = this.mobo;
    }));
    this.subscriptions.concat(this.componentService.getRamById(this.chosenComputer.ramId).subscribe((data: any) => {
      this.ram = data;
      this.otherComputer[2] = this.ram;
    }));
    this.subscriptions.concat(this.componentService.getGpuById(this.chosenComputer.gpuId).subscribe((data: any) => {
      this.gpu = data;
      this.otherComputer[3] = this.gpu;
    }));
    this.subscriptions.concat(this.componentService.getPsuById(this.chosenComputer.psuId).subscribe((data: any) => {
      this.psu = data;
      this.otherComputer[4] = this.psu;
    }));
    this.subscriptions.concat(this.componentService.getCaseById(this.chosenComputer.caseId).subscribe((data: any) => {
      this.case = data;
      this.otherComputer[5] = this.case;
    }));
    this.subscriptions.concat(this.componentService.getStorageById(this.chosenComputer.storageId).subscribe((data: any) => {
      this.drive = data;
      this.otherComputer[6] = this.drive;
    }));

    this.subscriptions.concat(this.componentService.getUserCpuById(this.chosenUserComputer.cpuId).subscribe((data: any) => {
      this.userCpu = data;
      this.userComputer[0] = this.userCpu;
    }));
    this.subscriptions.concat(this.componentService.getUserMoboById(this.chosenUserComputer.moboId).subscribe((data: any) => {
      this.userMobo = data;
      this.userComputer[1] = this.userMobo;
    }));
    this.subscriptions.concat(this.componentService.getUserRamById(this.chosenUserComputer.ramId).subscribe((data: any) => {
      this.userRam = data;
      this.userComputer[2] = this.userRam;
    }));
    this.subscriptions.concat(this.componentService.getUserGpuById(this.chosenUserComputer.gpuId).subscribe((data: any) => {
      this.userGpu = data;
      this.userComputer[3] = this.userGpu;
    }));
    this.subscriptions.concat(this.componentService.getUserPsuById(this.chosenUserComputer.psuId).subscribe((data: any) => {
      this.userPsu = data;
      this.userComputer[4] = this.userPsu;
    }));
    this.subscriptions.concat(this.componentService.getUserCaseById(this.chosenUserComputer.caseId).subscribe((data: any) => {
      this.userCase = data;
      this.userComputer[5] = this.userCase;
    }));
    this.subscriptions.concat(this.componentService.getUserStorageById(this.chosenUserComputer.storageId).subscribe((data: any) => {
      this.userDrive = data;
      this.userComputer[6] = this.userDrive;
    }));
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      if (sub !== null) sub.unsubscribe();
    });
  }
}
