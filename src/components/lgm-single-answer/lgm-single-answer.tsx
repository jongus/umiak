import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'lgm-single-answer',
  styleUrl: 'lgm-single-answer.css',
  shadow: true
})
export class LgmSingleAnswer {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return (this.first + this.last);
  }

  render() {
    return <div>LgmSingleAnswer: {this.getText()}</div>;
  }
}
