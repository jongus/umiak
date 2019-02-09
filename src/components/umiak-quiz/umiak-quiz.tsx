import { Component, Prop, State, Method, Listen } from "@stencil/core";

@Component({
  tag: "umiak-quiz",
  styleUrl: "umiak-quiz.css",
  shadow: true
})
export class UmiakQuiz {
  @Prop() heading: string;
  @Prop({ mutable: true }) question: string;

  @State() data: any[];
  @State() points: number = 0;

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

  @Listen("body:umiakAnswer")
  onEventUmiakAnswer(event: CustomEvent) {
    console.log("onEventUmiakAnswer: " + event.detail);
    this.points += event.detail;
  }

  render() {
    return (
      <div class="container">
        <p class="heading">Points {this.points}</p>
        <slot />
        <div class="footer">SLUT YTTRE</div>
      </div>
    );
  }
}
