import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { CrudService } from '../../Service/crud.service';
import { DataService } from '../../Service/data.service';
import { AddblogService } from '../../Service/addblog.service';
import { addBlog } from '../../model/addBlog';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {
  constructor(private _datasev: AddblogService,private router: Router) {}

  blogPost: addBlog = new addBlog();
  base64textString:string;
  img:ArrayBuffer;




  onSubmit() {
    this.blogPost.id = Math.floor(Math.random() * (999- 11 + 1)) + 11;
     this.blogPost.url=this.base64textString;
    console.log('Form submitted:', this.blogPost);
    this._datasev.addPosts(this.blogPost).subscribe({
      next: () => {
        alert("Blog Added Successfully...");
        this.router.navigate(['/posts']);
  
      },
      error: (err) => {
        console.error(err);
        alert("Failed to add post: " + err.message);
   
      },
      complete: () => {
        console.log('Add post completed');
  
      }
    });
  }
  onFileChange(event:any)
{
  const files=event.target.files;
  const file=files[0];
  if(files && file){
    const reader=new FileReader();
    reader.onload=(readerEvt)=>{
      this._handleReaderLoaded(readerEvt);
    };
    reader.readAsBinaryString(file);
  }
}
_handleReaderLoaded(readerEvt:any){
const BinaryString=readerEvt.target.result;
this.base64textString=btoa(BinaryString);
console.log(this.base64textString);
}
}
