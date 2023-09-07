import {NgModule} from "@angular/core";
import {DevPageComponent} from "./dev-page.component";
import {RouterModule, Routes} from "@angular/router";
import {MdComponent} from "./markdown.component";
import {MarkdownModule} from "ngx-markdown";




@NgModule({
    declarations: [
        DevPageComponent,
        MdComponent,
    ],
    imports: [
        RouterModule.forChild([{path: '', component: MdComponent},]),
        MarkdownModule.forRoot()

    ],
    providers: [
    ],
    exports: []
})
export class EntryModule{

}