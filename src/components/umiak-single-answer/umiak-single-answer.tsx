import { Component, Prop, Method } from "@stencil/core";

@Component({
  tag: "umiak-single-answer",
  styleUrl: "umiak-single-answer.css",
  shadow: true
})
export class UmiakSingleAnswer {
  @Prop() heading: string;
  @Prop() question: string;
  @Prop() alt_a: string;
  @Prop() alt_b: string;
  @Prop() alt_c: string;
  @Prop() alt_d: string;
  @Prop() point_a: number = 0;
  @Prop() point_b: number = 0;
  @Prop() point_c: number = 0;
  @Prop() point_d: number = 0;

  @Method()
  answer() {}

  componentWillLoad() {
    console.log("componentWillLoad");
  }
  componentDidLoad() {
    console.log("componentDidLoad");
  }

  render() {
    return (
      <div class="container">
        <p class="heading">{this.heading}</p>
        <p class="question">{this.question}</p>
        <div class="alternative" id="alt_a">
          <label>
            <input type="radio" name="alt" value="a" />
            {this.alt_a}
          </label>
        </div>
        <div class="alternative" id="alt_b">
          <label>
            <input type="radio" name="alt" value="b" />
            {this.alt_b}
          </label>
        </div>
        <div class="alternative" id="alt_c">
          <label>
            <input type="radio" name="alt" value="c" />
            {this.alt_c}
          </label>
        </div>
        <div class="alternative" id="alt_d">
          <label>
            <input type="radio" name="alt" value="d" />
            {this.alt_d}
          </label>
        </div>
        <div class="footer">
          <button onClick={this.answer.bind(this)}>SVARA</button>&nbsp;Försök 0
          av 2.
        </div>
      </div>
    );
  }
}
