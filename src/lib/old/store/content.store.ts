import {Inject, Injectable} from "@angular/core";
import {Action, createSelector, State, StateContext, Store} from "@ngxs/store";
import {ContentNode, FragmentVersion, ContentNodeType} from "@solenopsys/fl-content";
import { ContentServiceIntf} from "./content.service";
import {append, compose, patch} from "@ngxs/store/operators";


interface NodeStateModel {
  nodes: { [key: string]: ContentNode[] };
  versions: FragmentVersion[];
  loadedVersions: string[],
}


export class LoadVersion {
  static readonly type = '[ContentNode] Load Version';

  constructor(public versionId: string) {
  }
}


@State<NodeStateModel>({
  name: 'content',
  defaults: {
    nodes: {},
    versions: [],
    loadedVersions: []
  }
})
@Injectable()
export class ContentState {

  constructor(private store: Store, @Inject('contentService') public contentService: ContentServiceIntf) {
  }

  static getVersionByUID(id: string) {
    return createSelector([ContentState], (state: NodeStateModel) => {
      return state.versions.find(g => g.uid === id);
    });
  }

  static getNodeByUID(id: string) {
    return createSelector([ContentState], (state: NodeStateModel) => {
      return state.nodes[id];
    });
  }


  static getNodesByUID(ids: string[]) {
    return createSelector([ContentState], (state: NodeStateModel) => {
      let items = ids.map(id=> state.nodes[id]);
      return items
    });
  }

  static isLoadedVersion(id: string) {
    return createSelector([ContentState], (state: NodeStateModel) => {
      return state.loadedVersions.find(item => item === id) !== undefined;
    });
  }

  // @Action(LoadVersion)
  // async loadVersion({getState, setState}: StateContext<NodeStateModel>, {versionId}: LoadVersion) {
  //   const version = await this.contentService.loadBlocks(versionId);
  //
  //
  //   let newVar: FragmentVersion = {uid, nodes: blocks.map(item => item.uid)};
  //   let patches  = blocks.map(item => {
  //     return  patch({[item.uid]:{uid: item.uid, value: item.value, before: item.before, type: item.type as ContentNodeType}})
  //   });
  //
  //   setState(patch(
  //     {
  //       versions: append([newVar]),
  //       nodes: compose(...patches),
  //       loadedVersions: append([versionId])
  //     }))
  // }

}
