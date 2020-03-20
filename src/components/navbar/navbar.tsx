import * as React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarMain from './NavbarMain'
import NavbarItem from './NavbarItem'
import NavbarFooter from './NavbarFooter'
import { Pane } from 'evergreen-ui'

export type Props = {
  expanded: Boolean
}

export default class Navbar extends React.PureComponent<Props> {
  static Logo = NavbarLogo
  static Main = NavbarMain
  static Item = NavbarItem
  static Footer = NavbarFooter

  render() {
    const { expanded, children } = this.props

    return (
      <Pane
        display="block"
        flexShrink={0}
        zIndex={9}
        width={expanded ? "220px" : "56px"}
      >
        <Pane
          display="flex"
          flexDirection="column"
          position="sticky"
          overflow="auto"
          top={0}
          left={0}
          textAlign="center"
          height="100vh"
          backgroundColor="#272c36"
          color="white"
          width={expanded ? "220px" : "56px"}
        >
          {React.Children.map(children, child => (
            React.cloneElement(child as React.ReactElement, { expanded: expanded })
          ))}
        </Pane>
      </Pane>
    )
  }

}
