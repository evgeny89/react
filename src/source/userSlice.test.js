import reducer, { setLogin, incrementCountMessages, change } from "./userSlice";

describe('testing userSlice reducer', () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            name: "Guest",
            countMessage: 0,
            isAuth: false,
        })
    });

    it('should return new name value', () => {
        const initialState = {
            name: "Guest",
            countMessage: 0,
            isAuth: false,
        };
        const newName = "Alex";
        expect(reducer(initialState, setLogin(newName))).toEqual({
            name: "Alex",
            countMessage: 0,
            isAuth: false,
        })
    });

    it('should return initial state, to ignore call setLogin', () => {
        const initialState = {
            name: "Guest",
            countMessage: 0,
            isAuth: false,
        };
        expect(reducer(initialState, setLogin())).toEqual({
            name: "Guest",
            countMessage: 0,
            isAuth: false,
        })
    });

    it('should return increment countMessage on 1', () => {
        const initialState = {
            name: "Alex",
            countMessage: 0,
            isAuth: false,
        };
        expect(reducer(initialState, incrementCountMessages())).toEqual({
            name: "Alex",
            countMessage: 1,
            isAuth: false,
        })
    });

    it('should return increment countMessage on 1 with ignored argument', () => {
        const initialState = {
            name: "Alex",
            countMessage: 0,
            isAuth: false,
        };
        const argument = 5;
        expect(reducer(initialState, incrementCountMessages(argument))).toEqual({
            name: "Alex",
            countMessage: 1,
            isAuth: false,
        })
    });

    it('should return isAuth to string', () => {
        const initialState = {
            name: "Alex",
            countMessage: 0,
            isAuth: false,
        };
        const auth = "MDy9DnEWEVMiyR7SDO2J2YOyaEb2";
        expect(reducer(initialState, change(auth))).toEqual({
            name: "Alex",
            countMessage: 0,
            isAuth: "MDy9DnEWEVMiyR7SDO2J2YOyaEb2",
        })
    });

    it('should return isAuth false value', () => {
        const initialState = {
            name: "Alex",
            countMessage: 0,
            isAuth: "MDy9DnEWEVMiyR7SDO2J2YOyaEb2",
        };
        expect(reducer(initialState, change())).toEqual({
            name: "Alex",
            countMessage: 0,
            isAuth: false,
        })
    });
});
