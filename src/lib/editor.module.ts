import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTextComponent} from './paragraph/simple-text.component';
import {GraphTextComponent} from './graph-text/graph-text.component';
import {TextViewComponent} from './text-view/text-view.component';
import {TextPageComponent} from './text-page/text-page.component';
import {TextEditorComponent} from './text-editor/text-editor.component';
import {RouterModule} from '@angular/router';
import {TextTypeSelectorComponent} from './text-type-selector/text-type-selector.component';
import {DragHangComponent} from './graph-text/drag-hand.component';
import {ParagraphMoveComponent} from './paragraph-move/paragraph-move.component';
import {UIControlsModule} from '@solenopsys/ui-controls';
import {NodeEditorComponent} from './node-editor/node-editor.component';
import {DragTargetComponent} from './drag-target/drag-target.component';
import {UIIconsModule} from "@solenopsys/ui-icons";

const components = [
  SimpleTextComponent,
  TextPageComponent,
  GraphTextComponent,
  TextViewComponent,
  DragHangComponent,
  TextTypeSelectorComponent,
  TextEditorComponent,
  ParagraphMoveComponent,

  NodeEditorComponent,
  DragTargetComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    UIIconsModule,
    UIControlsModule,
  ],
  providers: [],
  exports: [
    TextEditorComponent,
    ParagraphMoveComponent,
    TextViewComponent
  ]
})
export class EditorModule {
  constructor() {
  }
}
