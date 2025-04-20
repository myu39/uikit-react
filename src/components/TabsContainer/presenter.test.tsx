import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { TabsContainerPresenter } from "./presenter";

describe("TabsContainerPresenter", () => {
  const mockProps = {
    tabContents: [
      { index: "Tab 1", content: "Content 1" },
      { index: "Tab 2", content: "Content 2" },
    ],
    activeTab: 0,   
  };

  test("renders tabs and contents correctly", () => {
    render(
      <TabsContainerPresenter
        tabContents={mockProps.tabContents}
        activeTab={mockProps.activeTab}
        onTabClick={() => {}}
      />
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(mockProps.tabContents.length);
  });

  test("calls onTabClick when a tab is clicked", () => {
    const handleClick = vi.fn();

    render(
      <TabsContainerPresenter
        tabContents={mockProps.tabContents}
        activeTab={mockProps.activeTab}
        onTabClick={handleClick}
      />
    );

    fireEvent.click(screen.getByText("Tab 2"));
    expect(handleClick).toHaveBeenCalledWith(1);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).toBeInTheDocument();
  });
});
