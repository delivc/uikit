import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'

export type Props = {
  expanded?: Boolean
}

export default class NavbarFooter extends React.PureComponent<Props> {
  render() {
    const { children, expanded } = this.props
    return (
      <Pane
        marginTop="auto"
        display="flex"
        flexDirection="column"
        paddingY={majorScale(1)}
        flexShrink={0}
      >
        {React.Children.map(children, child => (
          React.cloneElement(child as React.ReactElement, { expanded: expanded })
        ))}
      </Pane>
    )
  }
}
