import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, routesAndRedirect} from "./conf";
import {ContentGroupState, ContentNodeState, ContentState, FragmentState} from "@solenopsys/ui-editor-content";
import {createNgxs} from "@solenopsys/lib-storage";
import {environment} from "../environments/environment";

@NgModule({
    declarations: [...DECLARATION],
    imports: [
      RouterModule.forChild(routesAndRedirect),
      ...IMPORTS_CONF,
      ...createNgxs(!environment.production,[FragmentState, ContentState, ContentGroupState, ContentNodeState])
    ],
    providers: [
      ...PROVIDERS_CONF,
      {provide: 'single_start', useValue: false},
      {provide: 'assets_dir', useValue: '/fm/modules/richteri/content'}
    ],
  }
)

export class RemoteEntryModule {
}
