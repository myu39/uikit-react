export type TabsContainerProps = {
  tabContents: TabContentItemType[];
  activeTab?: number;
  onTabClick?: (index: number) => void;
}

export type TabContentItemType = {
  index: string;
  content: React.ReactNode;
}