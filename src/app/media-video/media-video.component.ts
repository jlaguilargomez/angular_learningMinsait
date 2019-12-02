import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.scss']
})
export class MediaVideoComponent implements OnInit {

  link: string = '../../assets/img/viral-vox-abascal-y-morante-en-caballo.mp4';

  constructor() { }

  ngOnInit() {
  }

}
