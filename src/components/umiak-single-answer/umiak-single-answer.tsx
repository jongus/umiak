import {
  Component,
  Prop,
  Method,
  Element,
  State,
  Event,
  EventEmitter
} from "@stencil/core";

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

  @Element() el: HTMLElement;

  @State() answerIsEnabled = true;

  @Event({ bubbles: true, composed: true }) umiakAnswer: EventEmitter<number>;

  @Method()
  handleOnAnswer(event: Event) {
    event.preventDefault();
    let points: number = 0;
    if (
      (this.el.shadowRoot.querySelector("#radio_a") as HTMLInputElement).checked
    ) {
      points += this.point_a;
      this.el.shadowRoot
        .querySelector("#alt_a")
        .classList.add(this.point_a > 0 ? "correct" : "wrong");
    } else if (
      (this.el.shadowRoot.querySelector("#radio_b") as HTMLInputElement).checked
    ) {
      points += this.point_b;
      this.el.shadowRoot
        .querySelector("#alt_b")
        .classList.add(this.point_b > 0 ? "correct" : "wrong");
    } else if (
      (this.el.shadowRoot.querySelector("#radio_c") as HTMLInputElement).checked
    ) {
      points += this.point_c;
      this.el.shadowRoot
        .querySelector("#alt_c")
        .classList.add(this.point_c > 0 ? "correct" : "wrong");
    } else if (
      (this.el.shadowRoot.querySelector("#radio_d") as HTMLInputElement).checked
    ) {
      points += this.point_d;
      this.el.shadowRoot
        .querySelector("#alt_d")
        .classList.add(this.point_d > 0 ? "correct" : "wrong");
    }
    this.el.shadowRoot.querySelector(
      "#userpoints"
    ).innerHTML = points.toString();

    if (points > 0) {
      // console.log(points);
      this.umiakAnswer.emit(points);
      this.answerIsEnabled = false;
    }
    // console.log(event);
  }

  @Method()
  onAltClick() {
    this.el.shadowRoot
      .querySelector("#alt_a")
      .classList.remove("wrong", "correct");
    this.el.shadowRoot
      .querySelector("#alt_b")
      .classList.remove("wrong", "correct");
    this.el.shadowRoot
      .querySelector("#alt_c")
      .classList.remove("wrong", "correct");
    this.el.shadowRoot
      .querySelector("#alt_d")
      .classList.remove("wrong", "correct");
  }

  componentWillLoad() {
    console.log("componentWillLoad");
  }

  componentDidLoad() {
    console.log("componentDidLoad");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidUnload() {
    console.log("componentDidUnload");
  }

  render() {
    return (
      <div class="container">
        <p class="heading">{this.heading}</p>
        <p class="question">{this.question}</p>
        <form onSubmit={this.handleOnAnswer.bind(this)}>
          <div class="alternative" id="alt_a">
            <label>
              <input
                type="radio"
                name="alt"
                value="a"
                id="radio_a"
                onChange={this.onAltClick.bind(this)}
                disabled={!this.answerIsEnabled}
              />
              {this.alt_a}
            </label>
          </div>
          <div class="alternative" id="alt_b">
            <label>
              <input
                type="radio"
                name="alt"
                value="b"
                id="radio_b"
                onChange={this.onAltClick.bind(this)}
                disabled={!this.answerIsEnabled}
              />
              {this.alt_b}
            </label>
          </div>
          <div class="alternative" id="alt_c">
            <label>
              <input
                type="radio"
                name="alt"
                value="c"
                id="radio_c"
                onChange={this.onAltClick.bind(this)}
                disabled={!this.answerIsEnabled}
              />
              {this.alt_c}
            </label>
          </div>
          <div class="alternative" id="alt_d">
            <label>
              <input
                type="radio"
                name="alt"
                value="d"
                id="radio_d"
                onChange={this.onAltClick.bind(this)}
                disabled={!this.answerIsEnabled}
              />
              {this.alt_d}
            </label>
          </div>
          <div class="footer">
            <button type="submit" disabled={!this.answerIsEnabled}>
              SVARA
            </button>
            &nbsp;Poäng på denna fråga:
            <span id="userpoints">-</span>
          </div>
        </form>
      </div>
    );
  }
}
