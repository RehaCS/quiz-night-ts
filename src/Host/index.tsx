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
    onQuestionChanged: (value: string) => void;
    onValidQuestion: (value: boolean) => void;
    isValid: boolean | null;
}
export function QuestionForm(props: QuestionProps) {
    // const blah = props.foo === true ? "hey its true" : "blah"; 
    const validQ = props.isValid === true || props.isValid === null ? "" : "is-danger";

    const updateQuestion = (event: React.FormEvent<HTMLTextAreaElement>): void => {
        props.onQuestionChanged(event.currentTarget.value);
        props.onValidQuestion(!!event.currentTarget.value);
    }

    return (
        <div className="field">
            <label className="label">Question:</label>
            <div className="control" >
                <textarea className={`textarea ${validQ}`} placeholder="Your Question" rows={2} onInput={updateQuestion}></textarea>
            </div>
            {!props.isValid && props.isValid !== null && 
            <p className="help is-danger">Please provide a question</p>
            }
        </div>
    );
}

export interface QuestionButtonProps {
    onQuestionBtnClick: () => void;
}
export function QuestionButton(props: QuestionButtonProps) {

    const questionBtnClick = (): void => {
        props.onQuestionBtnClick();
    }

    return (
        <div className="field">
            <button className="button is-company-blue" onClick={questionBtnClick}>Generate session</button>
        </div>
    );

}
// string | null
export default function Host() {
    const [question, setQuestion] = useState<string>("");
    const [generatedQuestionURL, setGeneratedQuestionURl] = useState<string>("");
    const [isQuestionValid, setIsQuestionValid] = useState<boolean | null>(null);
    // const [getter, setter] = useState(initialValue);
    // const [getter, setter] = useState({});
    // const [getter, setter] = useState([]);

    const updateQuestion = (value: string): void => {
        setQuestion(value);
    }

    const generateSession = (): void => {
        // grabs question
        // !!'' = false
        // !!'something' = true

        if (isQuestionValid) {
            // sends question to database
            // database response with custom url
            setGeneratedQuestionURl("https://www.google.com");
        } else {
            setGeneratedQuestionURl("");
        }

        console.log(question);
    }

    const setQuestionValid = (value: boolean): void => {
        setIsQuestionValid(value);
    }
    // (!!foo && <a href={foo}>{foo}</a>)

    
    // true && 'do this'
    // false && 'never happen'
    // true && something === 'something else'

    return (
        <div className="host">

            <section className="section">
                <QuestionForm onQuestionChanged={updateQuestion} onValidQuestion={setQuestionValid} isValid={isQuestionValid} />
                <QuestionButton onQuestionBtnClick={generateSession}/>
            </section>
            {!!generatedQuestionURL && //if true, show link (execute code below)
                <section className="section">
                    <a href={generatedQuestionURL}>{generatedQuestionURL}</a>
                </section>}
        </div>
    );
}