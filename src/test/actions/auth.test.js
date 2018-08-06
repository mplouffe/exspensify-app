import { login, logout } from '../../actions/auth';

test('should set up the login action object', () => {
    const uid = 'testuid';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should set up the logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});