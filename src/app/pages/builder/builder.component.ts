import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../../shared/models/Image";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  @Input() cpuObjectInput?: Array<any>;
  @Input() moboObjectInput?: Array<any>;
  @Input() ramObjectInput?: Array<any>;
  @Input() gpuObjectInput?: Array<any>;
  @Input() psuObjectInput?: Array<any>;
  @Input() caseObjectInput?: Array<any>;
  @Input() storageObjectInput?: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
