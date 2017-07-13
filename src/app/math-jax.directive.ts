import { Directive, ElementRef, Input } from '@angular/core';
import * as _ from "lodash";

@Directive({
  selector: '[MathJax]'
})
export class MathJaxDirective {
  @Input('MathJax') textExpression: string;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    this.element.nativeElement.innerHTML = _.unescape(this.textExpression);
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement]);
  }
}
