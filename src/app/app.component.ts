import { Component } from '@angular/core';
import { PrinterData } from './models/printer-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'stickerPrinter';
  public label: any;

  onFormChanged(label: any) {
    this.label = "data:image/png;base64," + label.render();
  }
}
