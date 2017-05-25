import { Component, OnInit, Input } from '@angular/core';

import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css']
})
export class FlickrComponent implements OnInit {

  _tag: string = ""
  data

  @Input()
  set tag(tag) {
    this._tag = tag;
    this.flickr.get(tag)
      .subscribe((res) => this.images = res.items)
  }


  images:any

  constructor(public flickr:FlickrService) { }

  ngOnInit() {
    
  }

}
