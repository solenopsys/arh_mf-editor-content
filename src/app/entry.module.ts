import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, routesAndRedirect} from "./conf";
import {createNgxs} from "@solenopsys/fl-storage";
import {environment} from "../environments/environment";
import {UIEditorModule} from "../lib/ui-editor.module";
import {FragmentState} from "../lib/store/fragment.store";
import {ContentState} from "../lib/store/content.store";
import {ContentGroupState} from "../lib/store/content-groups.store";
import {ContentNodeState} from "../lib/store/content-node.store";

@NgModule({
    //declarations: [...DECLARATION],
    imports: [
        RouterModule.forChild(routesAndRedirect),
        ...IMPORTS_CONF,
        ...createNgxs(!environment.production, [FragmentState, ContentState, ContentGroupState, ContentNodeState]),
        UIEditorModule
    ],
    providers: [
      ...PROVIDERS_CONF,
      {provide: 'assets_dir', useValue: '/fm/modules/mf-content'}
    ],
  }
)

export class RemoteEntryModule {
}
