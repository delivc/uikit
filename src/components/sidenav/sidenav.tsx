import React from 'react'
import SidenavGroup from './SidenavGroup'
import SidenavItem from './SidenavItem'
import { Pane, majorScale } from 'evergreen-ui'

export default class Sidenav extends React.PureComponent {
  static Group = SidenavGroup
  static Item = SidenavItem

  render() {
    const { children } = this.props
    return (
      <Pane
        zIndex={0}
        padding={majorScale(3)}
        minHeight="calc(100vh - 58px)"
        width={260}
        boxShadow="rgba(67, 90, 111, 0.3) 0px 0px 2px"
      >
        {children}
      </Pane>
    )
  }
}
