import React, { useState } from 'react';
import './Host.scss';

/**
 * function ParentComponent() {
 *  const [count, setCount] = useState(0)
 *  return (<div><ChildComponent count={count} /></div>)
 * }
 * 
 * function ChildComponent(props) {
 *   props.count
 * }
 * () => string
 */

export interface QuestionProps {
    onQuestionChanged: (value: string) => void
}
export function QuestionForm(props: QuestionProps) {

    function updateQuestion(event: React.FormEvent<HTMLTextAreaElement>) {
        props.onQuestionChanged(event.currentTarget.value);

    }

    return (
        <div className="field">
            <label className="label">Question:</label>
            <div className="control" >
                <textarea className="textarea" placeholder="Your Question" rows={2} onInput={updateQuestion}></textarea>
            </div>
        </div>
    );
}

export interface QuestionButtonProps {
    onQuestionBtnClick: () => void
}
export function QuestionButton(props:QuestionButtonProps) {

    function questionBtnClick() {
        props.onQuestionBtnClick();
    }

    return (
        <div className="field">
            <button className="button is-company-blue" onClick={questionBtnClick}>Generate session</button>
        </div>
    );

}

export default function Host() {
    const [question, setQuestion] = useState<string>("");
    const [generatedQuestionURL, setGeneratedQuestionURl] = useState<string>("");
    // const [getter, setter] = useState(initialValue);
    // const [getter, setter] = useState({});
    // const [getter, setter] = useState([]);

    function updateQuestion(value: string): void {
        setQuestion(value);
    }

    function generateSession() {
        // grabs question
        // !!'' = false
        // !!'something' = true

        if (!!question) {
            // sends question to database
            // database response with custom url
            setGeneratedQuestionURl("https://www.google.com");
        } else {
            setGeneratedQuestionURl("");
        }

        console.log(question);
    }

    // (!!foo && <a href={foo}>{foo}</a>)


    // true && 'blah blah'
    // false && 'never happen'
    // true && something === 'something else'

    return (
        <div className="host">

            <section className="section">
                <QuestionForm onQuestionChanged={updateQuestion} />
                <QuestionButton onQuestionBtnClick={generateSession}/>
            </section>
            {!!generatedQuestionURL &&
                <section className="section">
                    <a href={generatedQuestionURL}>{generatedQuestionURL}</a>
                </section>}
        </div>
    );
}