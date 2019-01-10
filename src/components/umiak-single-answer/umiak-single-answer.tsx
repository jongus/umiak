import { Component, Prop } from "@stencil/core";

@Component({
  tag: "umiak-single-answer",
  styleUrl: "umiak-single-answer.css",
  shadow: true
})
export class UmiakSingleAnswer {
  @Prop() heading: string;
  @Prop() question: string;
  @Prop() alternative_a: string;
  @Prop() alternative_b: string;
  @Prop() alternative_c: string;
  @Prop() alternative_d: string;

  render() {
    return (
      <div class="container">
        <p class="heading">{this.heading}</p>
        <p class="question">{this.question}</p>
        <div class="alternative">
          <label>
            <input type="radio" name="alt" value="a" />
            {this.alternative_a}
          </label>
        </div>
        <div class="alternative">
          <label>
            <input type="radio" name="alt" value="b" />
            {this.alternative_b}
          </label>
        </div>
        <div class="alternative wrong">
          <label>
            <input type="radio" name="alt" value="c" />
            {this.alternative_c}
          </label>
        </div>
        <div class="alternative correct">
          <label>
            <input type="radio" name="alt" value="d" />
            {this.alternative_d}
          </label>
        </div>
        <div class="footer">
          <button>SVARA</button>&nbsp;Försök 0 av 2.
        </div>
      </div>
    );
  }
}
