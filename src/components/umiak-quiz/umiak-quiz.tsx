import { Component, Prop, State, Method } from "@stencil/core";

@Component({
  tag: "umiak-quiz",
  styleUrl: "umiak-quiz.css",
  shadow: true
})
export class UmiakQuiz {
  @Prop() heading: string;
  @Prop({ mutable: true }) question: string;

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
    return (
      <div class="container">
        <p class="heading">UMIAK YTTER</p>
        <slot />
        <div class="footer">SLUT YTTRE</div>
      </div>
    );
  }
}
