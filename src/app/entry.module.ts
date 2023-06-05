import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, routesAndRedirect} from "./conf";
import {EditorModule} from "../lib/editor.module";
import {FragmentState} from "../lib/store/fragment.store";
import {ContentState} from "../lib/store/content.store";
import {ContentGroupState} from "../lib/store/content-groups.store";
import {ContentNodeState} from "../lib/store/content-node.store";

export const STATES=[FragmentState, ContentState, ContentGroupState, ContentNodeState]

@NgModule({
    //declarations: [...DECLARATION],
    imports: [
        RouterModule.forChild(routesAndRedirect),
        ...IMPORTS_CONF,
        EditorModule
    ],
    providers: [
      ...PROVIDERS_CONF,
      {provide: 'assets_dir', useValue: '/fm/modules/mf-content'}
    ],
  }
)

export class RemoteEntryModule {
}
