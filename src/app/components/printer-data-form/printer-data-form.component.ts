import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PrinterData } from 'src/app/models/printer-data';
import { QzTrayService } from 'src/app/services/qz-tray.service';
import getLabelTempltate from './../../../assets/labelTemplates/mainTemplate';

@Component({
  selector: 'app-printer-data-form',
  templateUrl: './printer-data-form.component.html',
  styleUrls: ['./printer-data-form.component.scss']
})
export class PrinterDataFormComponent implements OnInit {
  @Output() formChanged = new EventEmitter<any>();

  printerName;
  label;
  model = new PrinterData('', '', '', '', '');

  constructor(private qzService: QzTrayService) { }

  ngOnInit() {
    this.printerName = this.qzService.getPrinters()[0].name;
    const labelXmlTemplate = getLabelTempltate(this.model);
    this.label = this.qzService.getLabel(labelXmlTemplate);
  }

  updateLabelPreview() {
    const labelXmlTemplate = getLabelTempltate(this.model);
    this.label = this.qzService.getLabel(labelXmlTemplate);

    this.formChanged.emit(this.label);
  }

  printLabel() {
    this.qzService.printData(this.label, this.printerName, this.model);
  }
}
