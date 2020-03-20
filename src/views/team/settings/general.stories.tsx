import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from "@storybook/addon-knobs"
import { Pane } from 'evergreen-ui'
import TeamGeneralSettings from './general'
import Team from '../../../models/team'

export default {
  title: 'Views/Team/Settings',
  component: TeamGeneralSettings,
  decorators: [withKnobs]
}

const dummyTeam: Team = {
  id: 'myRandomUUID',
  name: 'Delivc GmbH',
  billing_email: 'billing@delivc.com'
}

export const Default = () => (
  <Pane
    display="flex"
    flex="1 1 0%"
    justifyContent="center"
  >
    <TeamGeneralSettings team={dummyTeam} onSubmit={action('onSubmit')} />
  </Pane>
)
