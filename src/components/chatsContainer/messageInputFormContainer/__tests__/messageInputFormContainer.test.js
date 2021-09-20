import {render, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux'
import MessageInputFormContainer from '../messageInputFormContainer'
import configureStore from 'redux-mock-store'
import { messageInputFormTestIds } from '../messageInputForm/messageInputForm'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Message input form container dispatching actions test', () => {
    it('dispatches remove messages actions to store', () => {
        const initialState = {chats:[],messages:{}}
        const testStore = mockStore(initialState)
        const chatId = Math.round(Math.random()*1000)
        const chatSelected = true;
        const text = 'some text'
        const component = render(
            <Provider store = {testStore}>
                <MessageInputFormContainer chatId={chatId} chatSelected={chatSelected} />
            </Provider>
        )
        const field = component.getByTestId(messageInputFormTestIds.textField)
        fireEvent.change(field, {target: {value: text}})
        const button = component.getByTestId(messageInputFormTestIds.submit)
        fireEvent.click(button)
        const actions = testStore.getActions();
        expect(actions.length).toBeGreaterThanOrEqual(1)
    })
})