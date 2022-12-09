import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleVersion} from "@solenopsys/lib-dgraph";


@Component({
  selector: 'app-fragment-editor',
  templateUrl: './fragment-editor-panel.component.html',
  styleUrls: ['./fragment-editor-panel.component.css']
})
export class FragmentEditorPanelComponent implements OnInit {

  value!: ArticleVersion;
  public fragmentId!:string;



  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.fragmentId = params.id;
    });
  }
}
