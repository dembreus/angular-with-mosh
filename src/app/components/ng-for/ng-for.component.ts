import { Component } from "@angular/core";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.css"]
})
export class NgForComponent {
  courses;

  onAdd() {
    this.courses.push({ id: 4, name: "course4" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
