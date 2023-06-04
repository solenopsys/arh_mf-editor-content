import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {BootstrapComponent, GridState,} from '@solenopsys/ui-templates';
import {APP_BASE_HREF} from '@angular/common';
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, ROUTES_DEV} from "./conf";
import {ClusterState} from "@solenopsys/fl-clusters";
import {RowsState} from "@solenopsys/ui-lists";
import {HStreamService, HStreamsState, StreamsPool, WsPool} from "@solenopsys/fl-hyperstreams";
import {FragmentState} from "../lib/store/fragment.store";
import {UIEditorModule} from "../lib/ui-editor.module";
import {ContentNodeState} from "../lib/store/content-node.store";
import {ContentGroupState} from "../lib/store/content-groups.store";
import {ContentState} from "../lib/store/content.store";

export const STATES=[
  ClusterState,
  FragmentState,
  ContentState,
  ContentGroupState,
  ContentNodeState,
  RowsState,
  GridState,
  HStreamsState
]

@NgModule({
  declarations: [
     ...DECLARATION
  ],
  imports: [
    RouterModule.forRoot(ROUTES_DEV),
    ...IMPORTS_CONF
  ],
  providers: [...PROVIDERS_CONF, WsPool,HStreamService,StreamsPool,
    {provide: 'assets_dir', useValue: ''},
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [BootstrapComponent],
})
export class AppModule {
}


