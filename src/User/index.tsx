import React, { useState } from 'react';
import './User.scss';

export interface InputFieldProps {
    label: string;
    onInputChanged: (value: string) => void;
}
export function InputField(props: InputFieldProps) {
    
    function inputChanged(event: React.FormEvent<HTMLInputElement>) {
        props.onInputChanged(event.currentTarget.value);
    }

    return (
        <div className="field">
                <label className="label has-text-left">{props.label}</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={inputChanged} />
                </div>
            </div>
    );
}

// {}
// { foo: 'bar', bar: [{}] }
// {}
export interface UserResponse {
    name: string;
    answer: string;
}
export default function User() {

    const [userResponse, setUserResponse] = useState<UserResponse>({ name: "", answer: "" }); 

    function sumbitAnswer(){
        console.log(userResponse);
    }

    function updateName(value: string) {
        setUserResponse({ ...userResponse, name: value });
    }

    function updateAnswer(value: string) {
        setUserResponse({ ...userResponse, answer: value });
    }

    return (
        <div className="user">
            <h1 className="display-question">ANSWER THIS QUESTION</h1>
            <InputField label={"Name"} onInputChanged={updateName}/>
            <InputField label={"Answer"} onInputChanged={updateAnswer}/>
            <div className="field">
                    <button className="button is-dark" onClick={sumbitAnswer}>Submit Answer</button>
            </div>

        </div>

    );
}