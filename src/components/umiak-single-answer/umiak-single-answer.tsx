import { Component, Prop } from "@stencil/core";

@Component({
  tag: "umiak-single-answer",
  styleUrl: "umiak-single-answer.css",
  shadow: true
})
export class UmiakSingleAnswer {
  @Prop() first: string;
  @Prop() last: string;

  private getText(): string {
    return this.first + "-" + this.last;
  }

  render() {
    return <div>UmiakSingleAnswer: {this.getText()}</div>;
  }
}
