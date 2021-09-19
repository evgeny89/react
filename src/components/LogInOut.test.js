import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import LogInOut from "./LogInOut";
import {BrowserRouter} from "react-router-dom";

jest.mock("firebase/auth", () => ({
    getAuth: jest.fn()
}));

jest.mock("firebase/database", () => ({
    getDatabase: jest.fn()
}));

jest.mock("react-redux", () => ({
    useDispatch: jest.fn()
}));

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<BrowserRouter>
            <LogInOut />
        </BrowserRouter>, container);
    });
    let button = container.querySelector("button.MuiButtonBase-root.MuiButton-root.MuiButton-contained");
    let link = container.querySelector(".MuiTypography-root.MuiTypography-body1 > a");
    expect(button.textContent).toBe("Login");
    expect(link.textContent).toBe("Sign up");

    act(() => {
        render(<BrowserRouter>
            <LogInOut typeFirebase={true} button="SingUp" />
        </BrowserRouter>, container);
    });
    button = container.querySelector("button.MuiButtonBase-root.MuiButton-root.MuiButton-contained");
    link = container.querySelector(".MuiTypography-root.MuiTypography-body1 > a");
    expect(button.textContent).toBe("SingUp");
    expect(link.textContent).toBe("Sign in");

    act(() => {
        render(<BrowserRouter>
            <LogInOut typeFirebase="blablabla" button="Test" />
        </BrowserRouter>, container);
    });
    button = container.querySelector("button.MuiButtonBase-root.MuiButton-root.MuiButton-contained");
    link = container.querySelector(".MuiTypography-root.MuiTypography-body1 > a");
    expect(button.textContent).toBe("Test");
    expect(link.textContent).toBe("Sign in");
});
