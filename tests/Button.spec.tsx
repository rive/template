import React from "react";
import TestRenderer from "react-test-renderer";
import Button from "../src/Button";

describe("<Button/>", () => {
    test("Label", () => {
        const testRenderer = TestRenderer.create(<Button label="My Button" />);
        const testInstance = testRenderer.root;

        expect(testRenderer.toJSON()).toMatchSnapshot();
        expect(testInstance.findByType("button").children).toBe("My Button");
    });
});
