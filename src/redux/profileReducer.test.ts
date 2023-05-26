import { addNewPostAC, updateNewPostTextAC, ProfileDataType, profileReducer } from './profileReducer';


test('correct task should be added to correct array', () => {
    const startState: ProfileDataType = {
        posts: [
          { id: 1, text: 'post1' },
          { id: 2, text: 'post2' },
          { id: 3, text: 'post3' }
        ],
        newPostText: 'this is a place for your post'
      };

    const action = addNewPostAC();

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

});
