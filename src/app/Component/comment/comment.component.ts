import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { comment } from '../../model/comment';
import { AddblogService } from '../../Service/addblog.service';
import { CommentService } from '../../Service/comment.service';
import { v4 as uuid } from 'uuid';

// interface Comment {
//   name: string;
//   text: string;
// }
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})

export class CommentComponent implements OnInit {
  demo: string;
  BlogsId: any;
  comme = new comment("", "", "", 0);
  comm: any;
  com: comment;
  Blogss: any;
  Blogs: any;

  constructor(
    private _blogser: AddblogService,
    private activeRoute: ActivatedRoute,
    private addser: CommentService,
    private showB: AddblogService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.showB.getPosts().subscribe(
      (user) => {
        this.Blogss = user;
        this.BlogsId = this.activeRoute.snapshot.params['id'];
        this.Blogs = this.Blogss.find((x) => x.id == this.BlogsId);
        console.log(this.Blogs);
        this.addser.showComments(this.BlogsId).subscribe(
          (user) => {
            console.log(user);
            this.comm = user;
          },
          (error) => {
            console.log(error);
          }
        );   // Call showComments here after setting BlogsId
      
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generateAutoId(): string {
    return uuid();
  }

  onChangeFileField(event: any) {
    this.comme.cId = this.generateAutoId();
    this.comme.vId = this.BlogsId;
    this.comme.name=localStorage.getItem("name")
    
  }

  autoId = this.generateAutoId();

  addComm() {
    this.addser.addComments(this.comme).subscribe({
      next: (response) => {
        console.log(response);
        alert("Comment Uploaded Successfully");
        this.router.navigate(['/comment']);
        this.router.navigate(['/posts']);
      },
      error: (error) => {
        console.log(error);
        alert("error");
      },
      complete: () => {
        console.log("request is completed");
      },
    });
    this.addser.showComments(this.BlogsId).subscribe(
      (user) => {
        console.log(user);
        this.comm = user;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}



  // export class CommentComponent {
  //   comments: Comment[] = [
  //     { name: 'Harshit', text: 'Very nice blogsss.' },
  //     { name: 'Garima', text: 'Great blog! Thanks for sharing.' },
  //   ];
  //   newComment: Comment = {
  //     name: '',
  //     text: ''
  //   };
  //   onSubmit() {
  //     this.comments.push(this.newComment);
  //     this.newComment = { name: '', text: '' };
  //   }
  // }
  
