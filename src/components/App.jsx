import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

handleIncrement = option => {
    this.setState(state => {
    return {
        [option]: state[option] +1,
    };
});
};

countTotalFeedback = () => {
let total = this.state.good + this.state.neutral + this.state.bad;
return total;
};

countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100 || 0)
};

render () {
    return (
    <div>
        <Section title="Please leave feedback">

        <FeedbackOptions 
        options={Object.keys(this.state)}
        onLeaveFeedback={this.handleIncrement}/>
       </Section>
        
       <Section title="Statistics">
       {this.countTotalFeedback() !== 0 ? (
        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />
       ) : (
        <Notification message="There is no feedback"></Notification>
       )}
       </Section>
    </div>
    )
       }
};

export default App;