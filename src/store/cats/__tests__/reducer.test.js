import {CatsReducer} from '../reducer'
import { CATS_LOADING, CATS_ERROR_LOADING, CATS_LOADED} from '../actions'

describe('cats reducer tests', () => {
    it('Returns state (object) with key isLoading set to true', () => {
        const action = {
            type: CATS_LOADING,
            payload: true,
        }
        const expected = {
            cats: [],
            isLoading: true,
            error: null,
        }
        const recieved = CatsReducer(undefined, action);
        expect(recieved).toEqual(expected);
    })
    it('Returns state (object) with key error set to passed error text', () => {
        const action = {
            type: CATS_ERROR_LOADING,
            payload: 'some error text',
        }
        const expected = {
            cats: [],
            isLoading: false,
            error: action.payload,
        }
        const recieved = CatsReducer(undefined, action);
        expect(recieved).toEqual(expected);
    })
    it('Returns state (object) with key cats set to passed array of values', () => {
        const action = {
            type: CATS_LOADED,
            payload: [
                'cat1',
                'cat2',
                'cat3'
            ],
        }
        const expected = {
            cats: action.payload,
            isLoading: false,
            error: null,
        }
        const recieved = CatsReducer(undefined, action);
        expect(recieved).toEqual(expected);
    })
    it('Returns state (object) in all other cases', () => {
        const action = {
            type: "SOME_OTHER_ACTION",
            payload: 'some payload',
        }
        const expected = 'state value'
        const recieved = CatsReducer('state value', action);
        expect(recieved).toEqual(expected);
    })
})