import * as React from 'react'
import { Avatar, Heading, Pane, majorScale, TextDropdownButton, Popover, Position, Menu, Text } from 'evergreen-ui'
import User from '../../models/user'

export type Props = {
  locationMessage?: string
  center?: React.ReactNode
  right?: React.ReactNode
  user?: User
}

export default class Navbar extends React.Component<Props> {
  static defaultProps: Props = {
    locationMessage: 'Hello, Unknown!'
  }

  render() {
    const { locationMessage, user } = this.props

    const userDropdown = (
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={
          <Menu>
            <Pane
              padding={majorScale(2)}
            >
              <Heading is="h3">{user?.firstname} {user?.lastname}</Heading>
              <Text>{user?.email}</Text>
            </Pane>
            <Menu.Divider />
            <Pane paddingY={majorScale(1)}>
              <Menu.Item>
                User Settings
              </Menu.Item>
            </Pane>
            <Menu.Divider />
            <Pane paddingY={majorScale(1)}>
              <Menu.Item>
                Documentation
              </Menu.Item>
            </Pane>
            <Menu.Divider />
            <Pane paddingY={majorScale(1)}>
              <Menu.Item>
                Logout
              </Menu.Item>
            </Pane>
          </Menu>
        }
      >
        <TextDropdownButton
          height={40}
        >
          <Avatar name={(user?.firstname + ' ' + user?.lastname)} />
        </TextDropdownButton>
      </Popover>
    )
    return (
      <Pane
        display="flex"
        width="100%"
        height={56}
        elevation={1}
        backgroundColor="white"
        paddingX={majorScale(2)}
        paddingY={majorScale(1)}
      >
        <Pane
          display="flex"
          flex="1 1 0%"
          alignItems="center"
        >
          <Heading is="h1" size={500}>{locationMessage}</Heading>
        </Pane>
        <Pane
          display="flex"
          flex="1 1 0%"
          alignItems="center"
          justifyContent="center"
        >
          {this.props.center}
        </Pane>
        <Pane
          display="flex"
          flex="1 1 0%"
          alignItems="center"
          justifyContent="flex-end"
        >
          {this.props.right}
          {user && userDropdown}
        </Pane>
      </Pane>
    )
  }
}
