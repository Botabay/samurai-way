import { addNewMessageAC,  DialogDataType, dialogReducer } from './dialogReducer';

test('correct dialog should be added to correct array', () => {
    const startState: DialogDataType = {
        dialogs: [
            { id: 1, name: 'Lee' },
            { id: 2, name: 'Kim' },
            { id: 3, name: 'John' }
        ],
        messages: [
            { id: 1, text: 'Hallo everybody' },
            { id: 2, text: 'Hey, zuuuup!' },
            { id: 3, text: 'yo' },
            { id: 4, text: 'Hey guys!' },
        ]
    }

    const action = addNewMessageAC('something');

    const endState = dialogReducer(startState, action)

    expect(endState).toEqual({
        dialogs: [
            { id: 1, name: 'Lee' },
            { id: 2, name: 'Kim' },
            { id: 3, name: 'John' }
        ],
        messages: [
            { id: 1, text: 'Hallo everybody' },
            { id: 2, text: 'Hey, zuuuup!' },
            { id: 3, text: 'yo' },
            { id: 4, text: 'Hey guys!' },
            { id: 5, text: 'this is a place for your message' },
        ],
        newMessageText: ''
    })

    expect(endState.dialogs.length).toBe(3)
    expect(endState.messages.length).toBe(5)
    expect(endState.messages[4].id).toBeDefined()
    expect(endState.messages[4].text).toBe('this is a place for your message')

});

test('value of specified NewPostText should be changed', () => {
    const startState: DialogDataType = {
        dialogs: [
            { id: 1, name: 'Lee' },
            { id: 2, name: 'Kim' },
            { id: 3, name: 'John' }
        ],
        messages: [
            { id: 1, text: 'Hallo everybody' },
            { id: 2, text: 'Hey, zuuuup!' },
            { id: 3, text: 'yo' },
            { id: 4, text: 'Hey guys!' },
        ]
    }
})
