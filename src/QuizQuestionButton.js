import React, {Component} from 'react';
import Quiz from './Quiz';

class QuizQuestionButton extends Component {

    handleClick(buttonText) {

        this.props.clickHandler(this.props.button_text)
        if(buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
        }
    }
    render() {

        return (
            <li>
                <button clickHandler={this.handleClick.bind(this)} >{this.props.button_text}</button>
            </li>
        )

    }

}

export default QuizQuestionButton;