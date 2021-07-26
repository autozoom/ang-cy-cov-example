import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "div.card",
})
export class DirAllDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
  }
}
