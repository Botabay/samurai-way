import { addNewPostAC, updateNewPostTextAC, ProfileDataType, profileReducer } from './profileReducer';

test('correct task should be added to correct array', () => {
    const startState: ProfileDataType = {
        posts: [
            { id: 1, text: 'post1' },
            { id: 2, text: 'post2' },
            { id: 3, text: 'post3' }
        ],
        newPostText: 'this is a place for your post',
        profile:null,
        status:''
    };

    const action = addNewPostAC('something');

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
        posts: [
            { id: 1, text: 'post1' },
            { id: 2, text: 'post2' },
            { id: 3, text: 'post3' },
            { id: 4, text: 'this is a place for your post' }
        ],
        newPostText: ''
    });

    expect(endState.newPostText).toBe('')
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[3].id).toBeDefined()
    expect(endState.posts[3].text).toBe('this is a place for your post')

});

test('status of specified NewPostText should be changed', () => {
    const startState: ProfileDataType = {
        posts: [
            { id: 1, text: 'post1' },
            { id: 2, text: 'post2' },
            { id: 3, text: 'post3' }
        ],
        newPostText: 'this is a place for your post',
        profile:null,
        status:''
    };

    const action = updateNewPostTextAC('test value')

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.newPostText).toBe('test value')
})
