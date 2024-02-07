import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data=
    [
      {
        id: 1,
        title: "Introduction to Angular",
        content: "Angular is a popular framework for building single-page web applications.",
        author: "John Doe",
        date: "2023-12-31",
        tags: ["Angular", "Web Development"],
        url:'./assets/1.jpeg'
      },
      {
        id: 2,
        title: "JavaScript Fundamentals",
        content: "Exploring the basics of JavaScript, the language of the web.",
        author: "Jane Smith",
        date: "2023-12-28",
        tags: ["JavaScript", "Frontend"],
        url:'./assets/2.jpeg'
      },
      {
        id: 3,
        title: "Responsive Web Design Techniques",
        content: "Learn how to create responsive websites using CSS and media queries.",
        author: "Alex Johnson",
        date: "2023-12-25",
        tags: ["CSS", "Web Design"],
        url:'./assets/3.jpeg'
      },
      {
        id: 4,
        title: "Getting Started with React",
        content: "A beginner's guide to starting with React for frontend development.",
        author: "Emily Williams",
        date: "2023-12-22",
        tags: ["React", "Frontend"],
        url:'./assets/4.jpeg'
      },
      {
        id: 5,
        title: "Node.js: Building Backend",
        content: "Using Node.js to build scalable and efficient backend applications.",
        author: "Michael Brown",
        date: "2023-12-19",
        tags: ["Node.js", "Backend", "JavaScript"],
        url:'./assets/5.jpeg'
      },
      {
        id: 6,
        title: "UX/UI Design Principles",
        content: "Understanding the principles of user experience and user interface design.",
        author: "Sophia Miller",
        date: "2023-12-16",
        tags: ["UX", "UI", "Design"],
        url:'./assets/6.jpeg'
      },
      {
        id: 7,
        title: "Python for Data Science",
        content: "An overview of using Python for data analysis and machine learning.",
        author: "Daniel Garcia",
        date: "2023-12-13",
        tags: ["Python", "Data Science"],
        url:'./assets/7.jpeg'
      },
      {
        id: 8,
        title: "Diving into MongoDB",
        content: "Exploring MongoDB, a popular NoSQL database.",
        author: "Ava Robinson",
        date: "2023-12-10",
        tags: ["MongoDB", "Database"],
        url:'./assets/8.jpeg'
      },
      {
        id: 9,
        title: "CSS Grid Layouts",
        content: "Creating complex layouts using CSS Grid.",
        author: "Liam Turner",
        date: "2023-12-07",
        tags: ["CSS", "Web Design"],
        url:'./assets/9.jpeg'
      },
      
    ];
    addnewpost(blogPost: any) {
      this.data.push(blogPost);
      console.log(blogPost);
    }

  }
