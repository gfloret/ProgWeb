import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})


export class ChannelsComponent implements OnInit {

  newChannelForm: FormGroup;
  takenName = false;
  
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) { 
    if(localStorage.getItem('userName') === null){
      router.navigate(['/auth']);
    }

    this.newChannelForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      visibility: '',
    });

  }

  get name() { return this.newChannelForm.get('name'); }
  get description() { return this.newChannelForm.get('description'); }
  get visibility() { return this.newChannelForm.get('visibility'); }

  onSubmit(channelData: any){
    this.http.post('/api/v1/channel', channelData).subscribe((data:any) => {
      this.takenName = false;
      if (data.channel === "takenName"){
        this.takenName = true;
      } else {
        this.router.navigate(['/channels']);
      }
    });
  }

  ngOnInit() {
  }

}
