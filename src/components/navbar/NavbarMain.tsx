import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'

export type Props = {
  expanded?: Boolean
}

export default class NavbarMain extends React.PureComponent<Props> {
  render() {
    const { children, expanded } = this.props
    return (
      <Pane
        display="flex"
        flexDirection="column"
        flexShrink={0}
        paddingTop={majorScale(1)}
      >
        {React.Children.map(children, child => (
          React.cloneElement(child as React.ReactElement, { expanded: expanded })
        ))}
      </Pane>
    )
  }
}
