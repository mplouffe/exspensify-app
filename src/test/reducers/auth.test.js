import authReducer from '../../reducers/auth';

// skipping testing of default value because it is an empty object

test('should set the uid on login', () => {
    const action = { type: 'LOGIN', uid: 'userUID' };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid: 'userUID' });
});

test('should clear the uid on logout', () => {
    const action = { type: 'LOGOUT' };
    const loggedIn = { uid: 'userID' };
    const state = authReducer(loggedIn, action);
    expect(state).toEqual({});
});