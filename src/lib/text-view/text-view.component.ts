import {Component, Input, OnInit} from '@angular/core';
import {ContentNode, TextNodeType} from "../store/model";

@Component({
  selector: 'ui-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss']
})
export class TextViewComponent implements OnInit {
  @Input()
  blocks: ContentNode[] | undefined;
  TN = TextNodeType;


  constructor() {
  }


  id: string | undefined;

  ngOnInit(): void {


  }

}
