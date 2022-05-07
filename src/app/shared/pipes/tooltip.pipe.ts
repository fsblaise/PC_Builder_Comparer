import { Pipe, PipeTransform } from '@angular/core';
import {Psu} from "../models/Psu";
import {Cpu} from "../models/Cpu";
import {Drive} from "../models/Drive";
import {Mobo} from "../models/Mobo";
import {Gpu} from "../models/Gpu";
import {Ram} from "../models/Ram";
import {Case} from "../models/Case";

@Pipe({
  name: 'tooltip'
})
export class TooltipPipe implements PipeTransform {

  transform(value: Cpu | Mobo | Ram | Gpu | Psu | Case | Drive, ...args: unknown[]): string {
    let ret: string = '';
    switch (value.typo){
      case "cpu": // @ts-ignore
        ret = value.cores.toString() + ' cores\n' + value.threads + ' threads\n' + value.clock + ' GHz base clock\n' + value.tdp + ' W tdp\n' + value.socket + ' socket';
        break;
      case "mobo": // @ts-ignore
        ret = value.ramtype + ' ram slots\n' + value.chipset + ' chipset\n' + value.socket + ' socket\n' + 'Pci-e gen' + value.pciegen + '\n' + value.form + ' form-factor';
        break;
      case "ram": // @ts-ignore
        ret = value.architechture + '\n' + value.clock + ' MHz\n' + 'CL' + value.cas + '\n' + 2*(value.size/2) + ' GB\n';
        break;
      case "gpu": // @ts-ignore
        ret = value.vram.toString() + ' GB vram\n' + 'Pci-e gen' + value.pciegen + ' \n' + value.tdp + ' W tdp\n';
        break;
      case "psu": // @ts-ignore
        ret = value.wattage.toString() + ' W\n' + value.efficiency + ' efficiency\n';
        break;
      case "case": // @ts-ignore
        ret = value.form + 'form factor';
        break;
      case "drive": // @ts-ignore
        ret = value.size.toString() + ' GB\n' + value.grade + ' grade\n' + value.type;
        break;
    }
    return ret;
  }

}
