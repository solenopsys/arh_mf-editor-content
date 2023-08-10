import {NgModule} from '@angular/core';
import {SimpleTextComponent} from './paragraph/simple-text.component';
import {GraphTextComponent} from './graph-text/graph-text.component';
import {TextViewComponent} from './text-view/text-view.component';
import {TextPageComponent} from './text-page/text-page.component';
import {TextEditorComponent} from './text-editor/text-editor.component';
import {RouterModule, Routes} from '@angular/router';
import {TextTypeSelectorComponent} from './text-type-selector/text-type-selector.component';
import {DragHangComponent} from './graph-text/drag-hand.component';
import {ParagraphMoveComponent} from './paragraph-move/paragraph-move.component';
import {UIControlsModule} from '@solenopsys/ui-controls';
import {NodeEditorComponent} from './node-editor/node-editor.component';
import {DragTargetComponent} from './drag-target/drag-target.component';
import {UIIconsModule} from "@solenopsys/ui-icons";
import {ManualEditorPageComponent} from "./manual-editor-page.component";
import {MovePageComponent} from "./move-page/move-page.component";
import {FormPanelComponent, TablePageComponent} from "@solenopsys/ui-templates";
import {FragmentEditorPanelComponent} from "./fragment-editor/fragment-editor-panel.component";
import {ContentService} from "./store/content.service";
import {TABLES} from "./tables.config";
import {CommonModule, NgStyle} from "@angular/common";

export const routes: Routes = [...([
    {path: 'move', component: MovePageComponent},

    {path: '', component: ManualEditorPageComponent},

    {
        path: ':table',
        component: TablePageComponent,
        children: [
            {path: ':id/form', component: FormPanelComponent},
            {path: ':id/editor', component: FragmentEditorPanelComponent},
            {path: ':id/editor/:version', component: FragmentEditorPanelComponent},
        ],
    },
]), {path: '', redirectTo: 'fragments', pathMatch: 'full'}]


@NgModule({
    declarations: [
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
        ManualEditorPageComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        UIIconsModule,
        UIControlsModule,
    ],
    providers: [ContentService,
        {provide: 'tables', useValue: TABLES},
        {provide: 'mod_name', useValue: 'content'},
        {provide: 'Logger', useValue: 'LoggerMock'}],
    exports: []
})
export class EditorModule {
    constructor() {
    }
}
