import {Injectable} from '@angular/core';
import { DgraphService, QueryGen} from "@solenopsys/fl-dgraph";
import {firstValueFrom, map, Observable} from "rxjs";
import {ArticleVersion, Fragment, FragmentResp, VersionResp} from "@solenopsys/fl-content";



@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private dgraph: DgraphService) {
  }

  loadBlocks(version: string): Promise<VersionResp> {
    return firstValueFrom(this.dgraph.query(`{ results   (func: uid(${version})  )
    {uid	 blocks @facets(orderasc: ord)  {uid type   value before }  }  }`));
  }

  loadFragment(fragmentId: string): Observable<FragmentResp> {
    return this.dgraph.query<any>(`{ results   (func: uid(${fragmentId} )  )
    {uid fragment versions  (orderdesc: version_date) {uid   version_date }    }  }`);
  }

  loadFragmentConf(fragmentId: string): Observable<Fragment> {
    return this.loadFragment(fragmentId).pipe(map(fragment => {
      let lastVersionId: string | undefined;
      const f = fragment.results[0];
      if (f) {
        if (f.versions?.length > 0) {
          lastVersionId = f.versions[0].uid
        }
      }
      return {lastVersionId, name: f.fragment, uid: f.uid, versions: f.versions}
    }));
  }

  loadFragments(): Promise<any> {
    return firstValueFrom(this.dgraph.query("{ results(func: has(fragment)  ) {uid fragment }}"))
  }

  newTextVersion(a: ArticleVersion): Promise<any> {
    const q = undefined // todo  QueryGen.newTextVersion(a);
    return firstValueFrom(this.dgraph.mutate(q))
  }
}
