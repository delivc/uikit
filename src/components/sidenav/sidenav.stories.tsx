import React from 'react'
import { withKnobs } from "@storybook/addon-knobs";
import Sidenav from './sidenav'

export default {
  title: 'Components/Navigation/Sidenav',
  component: Sidenav,
  decorators: [withKnobs]
}

export const Default = () => (
  <Sidenav>
    <Sidenav.Group icon="cog" label="Team Settings">
      <Sidenav.Item href="#" label="General Settings" />
    </Sidenav.Group>
  </Sidenav>
)
