import { Component, OnInit, Input } from '@angular/core';
import { PrinterData } from 'src/app/models/printer-data';

@Component({
  selector: 'app-label-preview',
  templateUrl: './label-preview.component.html',
  styleUrls: ['./label-preview.component.scss']
})
export class LabelPreviewComponent implements OnInit {
  @Input() label: any;
  test: string = 'eessetsetse';

  constructor() { }

  ngOnInit() {
  }

}
