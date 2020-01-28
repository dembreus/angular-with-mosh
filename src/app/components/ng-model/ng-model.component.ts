import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-model",
  templateUrl: "./ng-model.component.html",
  styleUrls: ["./ng-model.component.css"]
})
export class NgModelComponent {
  contactMethods = [
    { id: 1, name: "Email" },
    { id: 2, name: "Home" },
    { id: 3, name: "Mobile" },
    { id: 4, name: "Fax" }
  ];

  contactGenders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Non-binary" },
    { id: 4, name: "Choose not to disclose" }
  ];
  log(x) {
    console.log(x);
  }

  submit(form) {
    console.log("form :", form.value);
  }
}
