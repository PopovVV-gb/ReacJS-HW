import { messageInputFormTestIds } from "../messageInputForm";
import MessageInputForm from "../messageInputForm";
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'

describe('Message input form tests', () =>{
    it('submit button is disabled when no chat selected', () => {
        const chatSelected = false;
        const component = render(<MessageInputForm  chatSelected={chatSelected}/>)
        const submitButton = component.getByTestId(messageInputFormTestIds.submit)
        expect(submitButton).toBeDisabled()
    })
    it('submitMessage function call on button click with value from textField', () => {
        const submitMessage = jest.fn();
        const chatSelected = true;
        const text = 'some text'
        const component = render(<MessageInputForm submitMessage = {submitMessage} chatSelected={chatSelected}/>)
        const field = component.getByTestId(messageInputFormTestIds.textField)
        fireEvent.change(field, {target: {value: text}})
        fireEvent.click(component.getByTestId(messageInputFormTestIds.submit))
        expect(submitMessage).toBeCalledWith(text)
    })
})