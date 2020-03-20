import React from 'react'
import { withKnobs, text } from "@storybook/addon-knobs";
import Topnav from './topnav'

import { Avatar, Heading, TextDropdownButton, Popover, Position, Pane, Menu, majorScale } from 'evergreen-ui'

export default {
  title: 'Components/Navigation/Topnav',
  component: Topnav,
  decorators: [withKnobs]
}


export const Default = () => (
  <Topnav right={<div>Hello123</div>} />
)

export const WithCenter = () => (
  <Topnav center={<div>centerElement</div>} />
)

const UserDropdown = (
  <Popover
    position={Position.BOTTOM_RIGHT}
    content={
      <Menu>
        <Pane
          padding={majorScale(2)}
        >
          <Heading is="h3">Dummy User</Heading>
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
      <Avatar name={text('UserName', 'Julian Köhn')} />
    </TextDropdownButton>
  </Popover>
)

export const WithUser = () => (
  <Topnav right={UserDropdown} />
)
