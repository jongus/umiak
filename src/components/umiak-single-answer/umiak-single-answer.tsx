import { Component, Prop, State, Method } from "@stencil/core";

@Component({
  tag: "umiak-single-answer",
  styleUrl: "umiak-single-answer.css",
  shadow: true
})
export class UmiakSingleAnswer {
  @Prop() heading: string;
  @Prop({ mutable: true }) question: string;
  @Prop() alternative_a: string;
  @Prop() alternative_b: string;
  @Prop() alternative_c: string;
  @Prop() alternative_d: string;

  @State() data: any[];

  @Method()
  load() {
    fetch(
      `https://utbildningsvera.azurewebsites.net/api/test?code=6eZ1RDX4e4rXSaSLpyE2qxte8ops4ar0B/jpKTeducYwhjYfY7ktng==&name=EN%20TEST`
    )
      .then(rsp => {
        return rsp.json();
      })
      .then(data => {
        this.data = data;
        console.log("2data: " + data.Message);
      })
      .catch(err => {
        console.error("Could not load data", err);
      });
  }

  @Method()
  test() {
    this.question = "hfjhfjks";
    // return void;
  }

  componentWillLoad() {
    // Use this?
    console.log("componentWillLoad");
    // this.load();
  }
  componentDidLoad() {
    // this.load();
    console.log("componentDidLoad");
  }

  render() {
    let myname = null;
    // myname = this.test();
    // if (this.test) {
    // myname = this.data["Message"];
    // myname = this.test();
    // console.log("data: " + this.data["Message"]);
    // }

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
          <button onClick={this.test.bind(this)}>SVARA</button>&nbsp;Försök 0 av
          2. {myname}
        </div>
      </div>
    );
  }
}
