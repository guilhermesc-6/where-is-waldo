/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../components/Header";
import { DropdownMenu } from "../components/DropdownMenu";
// import { matchers } from "@emotion/jest";

describe("Test the Header", () => {
  const list = [{ name: "test", found: false, id: "test", image: "test" }];
  test("Display the images to find", () => {
    render(<Header list={list} />);

    expect(screen.getByAltText("test").alt).toMatch(/test/i);
  });
});

describe("Test DropDown Menu", () => {
  const list = [{ name: "test", found: false, id: "test", image: "test" }];
  test("Display the options to find", async () => {
    const clickMock = jest.fn();
    const user = userEvent.setup();
    render(
      <DropdownMenu
        menuCoords={{ pageY: 0, pageX: 0 }}
        itemList={list}
        handleDropdownMenuClick={clickMock}
      />
    );

    const li = screen.getByText(/test/i);

    await user.click(li);

    expect(clickMock).toBeCalled();
  });
});
