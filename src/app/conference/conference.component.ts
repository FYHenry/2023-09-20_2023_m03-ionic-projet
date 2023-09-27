import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pages } from '../shared/pages';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent implements OnInit {
  private _folder: string = '';
  private _folderTitle: string = '';
  constructor(private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService) {}

  private get _isRecordedFolder(): boolean{
    const folders: string[] = pages.map((item)=>item.folder);
    let isRecorded = false;
    for(let folder of folders){
      if(this._folder === folder){
        isRecorded = true ;
        break;
      }
    }
    return isRecorded;
  }

  public get folderTitle(): string{
    let title = 'Titre';
    if(this._isRecordedFolder){
      title = this._folderTitle;
    }
    return title;
  }

  public get conferenceDates(): string{

    return this._apiService.scheduleDates.begin + ' – ' +
      this._apiService.scheduleDates.end;
  }

  ngOnInit() {
    this._folder =
      this._activatedRoute.snapshot.paramMap.get('id') as string;

    if(! this._isRecordedFolder){
      window.location.pathname = '/conference';
    }else{
      let foundTitle =
        pages.find(item => item.folder === this._folder)?.title;

      if(foundTitle !== undefined){
        this._folderTitle = foundTitle;
      }
    }
  }
}
