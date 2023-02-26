import {Routes} from "@angular/router";
import {
  BootstrapComponent,
  FormPanelComponent,
  FuiTemplatesModule,
  TablePageComponent
} from "@solenopsys/ui-templates";
import {FragmentEditorPanelComponent} from "./fragment-editor/fragment-editor-panel.component";
import {ContentService, FuiEditorModule} from "@solenopsys/ui-editor-content";
import {TABLES} from "./tables.config";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FuiComponentsModule} from "@solenopsys/ui-controls";
import {FuiGridModule} from "@solenopsys/ui-lists";
import {HttpClientModule} from "@angular/common/http";
import {MovePageComponent} from "./move-page/move-page.component";
import {HStreamService, HStreamsState, StreamsPool, WsPool} from "@solenopsys/lib-hyperstreams";

export const ROUTES: Routes = [
  {path: 'move', component: MovePageComponent},

  {
    path: ':table',
    component: TablePageComponent,
    children: [
      {path: ':id/form', component: FormPanelComponent},
      {path: ':id/editor', component: FragmentEditorPanelComponent},
      {path: ':id/editor/:version', component: FragmentEditorPanelComponent},
    ],
  },
];

export const ROUTES_DEV: Routes = [
  {
    path: 'content',
    children: [{
      path: 'plugins',
    //  component: PluginsComponent,
    }, ...ROUTES]
  },
]

export const routesAndRedirect:Routes = [...ROUTES, {path: '', redirectTo: 'fragments', pathMatch: 'full'}]

export const PROVIDERS_CONF = [
  ContentService,
  {provide: 'tables', useValue: TABLES},
  {provide: 'mod_name', useValue: 'content'},
  {provide: 'Logger', useValue: 'LoggerMock'}
];

export const DECLARATION = [
  FragmentEditorPanelComponent,
  MovePageComponent
]

export const IMPORTS_CONF = [
  FuiTemplatesModule,
  BrowserModule,
  CommonModule,
  FormsModule,
  FuiComponentsModule,
  FuiGridModule,
  FuiEditorModule,
  HttpClientModule,
];
