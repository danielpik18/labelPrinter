import { Injectable } from '@angular/core';

declare var dymo: any;

@Injectable({
  providedIn: 'root'
})
export class QzTrayService {

  printData(label, printerName: string, data: any) {
    const randomBARCODEnumber = Math.floor(Math.random() * (99999 - 0 + 1)) + 0;

    label.setObjectText("NAME", `${data.nombre} ${data.apellido}`);
    label.setObjectText("CORREO", data.correo);
    label.setObjectText("FECHA_NACIMIENTO", data.fechaNacimiento);
    label.setObjectText("NUMERO_TELEFONO", data.numeroTelefono);
    label.setObjectText("BARCODE", randomBARCODEnumber);

    label.print(printerName);
  }

  getLabel(labelXmlTemplate) {
    const label = dymo.label.framework.openLabelXml(labelXmlTemplate);

    return label;
  }

  getPrinters() {
    const printers = dymo.label.framework.getPrinters();

    return printers;
  }

  constructor() { }
}
