export interface TabsContainerProps {
  tabContents: TabContentItemType[]
  activeTab?: number
  onTabClick: (index: number) => void;
  pjClass?: string
}

export interface TabContentItemType {
  index: string
  content: React.ReactNode
}