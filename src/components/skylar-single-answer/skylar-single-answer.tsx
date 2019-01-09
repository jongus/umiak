import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'skylar-single-answer',
  styleUrl: 'skylar-single-answer.css',
  shadow: true
})
export class SkylarSingleAnswer {
  @Prop() first: string;
  @Prop() last: string;

  private getText(): string {
    return (this.first + "-" + this.last);
  }

  render() {
    return <div>SkylarSingleAnswer: {this.getText()}</div>;
  }
}
