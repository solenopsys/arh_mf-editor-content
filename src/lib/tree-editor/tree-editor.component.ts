import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'git-tree-editor',
  templateUrl: './tree-editor.component.html',
  styleUrls: ['./tree-editor.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TreeEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
