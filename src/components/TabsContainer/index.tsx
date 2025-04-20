import { useAtomValue, useSetAtom } from "jotai"
import { activeTabAtom } from "./index.atom"
import { TabsContainerPresenter } from "./presenter"
import { TabsContainerProps } from "./types"

export const TabsContainer = ({ tabContents, activeTab, onTabClick }: TabsContainerProps) => {
  const atomActiveTab = useAtomValue(activeTabAtom)
  const setAtomActiveTab = useSetAtom(activeTabAtom)

  const isControlled = activeTab !== undefined && onTabClick !== undefined;

  const currentTab = isControlled ? activeTab : atomActiveTab;
  const handleClick = isControlled ? onTabClick : (index: number) => setAtomActiveTab(index);

  return (
    <TabsContainerPresenter
      tabContents={tabContents}
      activeTab={currentTab}
      onTabClick={handleClick}
    />
  )
}
