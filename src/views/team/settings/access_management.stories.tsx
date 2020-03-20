import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from "@storybook/addon-knobs"
import { Pane } from 'evergreen-ui'
import AccessManagement from './access_management'
import { TeamMember } from '../../../models/team'

export default {
  title: 'Views/Team/AccessManagement',
  component: AccessManagement,
  decorators: [withKnobs]
}

const dummyUsers: TeamMember[] = [
  {
    id: 'randomUserId',
    email: 'user1@delivc.com',
    firstname: 'Annegret',
    lastname: 'Kampfhausen',
    roles: ['Author'],
    permission: 'Member'
  },
  {
    id: 'randomUserId123',
    email: 'user2@delivc.com',
    firstname: 'Peter',
    lastname: 'Hase',
    roles: ['Author'],
    permission: 'Owner'
  },
  {
    id: 'randomUserI231231d',
    email: 'user3@delivc.com',
    firstname: 'Gerhard',
    lastname: 'Muster',
    roles: ['Admin'],
    permission: 'Member'
  }
]

export const Default = () => (
  <Pane
    display="flex"
    flex="1 1 0%"
    justifyContent="center"
  >
    <AccessManagement users={dummyUsers} onInviteClick={action('onInviteClick')} />
  </Pane>
)
