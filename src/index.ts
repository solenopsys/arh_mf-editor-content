import {XsModule, XsModuleType} from "@solenopsys/fl-globals";
import {EditorModule} from "./lib/editor.module";

export const ENTRY:XsModule<EditorModule> ={
    module: EditorModule,
    type: XsModuleType.PLATFORM,
};
