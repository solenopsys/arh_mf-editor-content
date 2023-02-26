import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {BootstrapComponent, GridState,} from '@solenopsys/ui-templates';
import {APP_BASE_HREF} from '@angular/common';
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, ROUTES_DEV} from "./conf";
import {ContentGroupState, ContentNodeState, ContentState, FragmentState,} from "@solenopsys/ui-editor-content";
import {ClusterState} from "@solenopsys/fl-clusters";
import {createNgxs} from "@solenopsys/fl-storage";
import {RowsState} from "@solenopsys/ui-lists";
import {environment} from "../environments/environment";
import {HStreamService, HStreamsState, StreamsPool, WsPool} from "@solenopsys/fl-hyperstreams";
import { FuiEditorModule } from "@solenopsys/ui-editor-content";

@NgModule({
  declarations: [
    // ...DECLARATION
  ],
  imports: [
    RouterModule.forRoot(ROUTES_DEV),
    ...IMPORTS_CONF,
    ...createNgxs(!environment.production, [
      ClusterState,
      FragmentState,
      FuiEditorModule,
      ContentState,
      ContentGroupState,
      ContentNodeState,
      RowsState,
      GridState,
      HStreamsState
    ], true),
  ],
  providers: [...PROVIDERS_CONF, WsPool,HStreamService,StreamsPool,
    {provide: 'assets_dir', useValue: ''},
    {provide: 'single_start', useValue: true},
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [BootstrapComponent],
})
export class AppModule {
}


