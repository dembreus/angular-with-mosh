import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.css"]
})
export class CreateCourseComponent {
  courseCategories = [
    { id: 1, name: "Art" },
    { id: 2, name: "Science" },
    { id: 3, name: "Math" },
    { id: 4, name: "Programming with Mosh" }
  ];

  submit(form) {
    console.log("form :", form);
  }
}
