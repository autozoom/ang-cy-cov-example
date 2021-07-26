import { Directive, ElementRef, Self } from "@angular/core";

@Directive({
  selector: "div.card",
})
export class DirAllDirective {
  constructor(el: ElementRef, @Self() private readonly self: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
    this.self.nativeElement.style.backgroundColor = "magenta";
    console.log(this.self);
  }
}
