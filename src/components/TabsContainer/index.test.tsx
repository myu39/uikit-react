import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider, createStore } from "jotai";
import { describe, expect, test } from "vitest";
import { TabsContainer } from ".";
import styles from "./styles.module.scss";

describe("TabsContainer", () => {
  const tabContents = [
    { index: "Tab 1", content: "Content 1" },
    { index: "Tab 2", content: "Content 2" },
  ];

  test("initial active tab is 0 and clicking changes tab", async () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <TabsContainer tabContents={tabContents} />
      </Provider>
    );

    const tab1 = screen.getByText("Tab 1")
    const tab2 = screen.getByText("Tab 2")
    const content1 = screen.getByText("Content 1")
    const content2 = screen.getByText("Content 2")

    // Test class of <li> (Tab) elements
    expect(tab1).toHaveClass(styles["c-tab-index--active"])
    expect(tab2).not.toHaveClass(styles["c-tab-index--active"])

    // Test class of <div> (Content) elements
    expect(content1).toHaveClass(styles["c-tab-content--active"])
    expect(content2).not.toHaveClass(styles["c-tab-content--active"])

    // Test if the number of tabs is correct
    expect(screen.getAllByRole("tab")).toHaveLength(tabContents.length);

    // Emulate click Tab 2
    await userEvent.click(tab2);

    // Test if class of tabs are switched
    expect(tab2).toHaveClass(styles["c-tab-index--active"])
    expect(tab1).not.toHaveClass(styles["c-tab-index--active"])

    expect(content2).toHaveClass(styles["c-tab-content--active"])
    expect(content1).not.toHaveClass(styles["c-tab-content--active"])
  });
});
