import { Component, Prop } from "@stencil/core";

@Component({
  tag: "umiak-single-answer",
  styleUrl: "umiak-single-answer.css",
  shadow: true
})
export class UmiakSingleAnswer {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div class="container">
        <p class="heading">Fråga 4</p>
        <p class="question">Detta är en fråga liksom</p>
        <div class="alternative">
          <input type="radio" name="gender" value="male" /> Male
        </div>
      </div>
    );
  }
}
