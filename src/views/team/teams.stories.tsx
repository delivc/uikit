import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";
import Teams from './teams'
import Team from '../../models/team';

export default {
  title: 'Views/Team/Switch',
  component: Teams,
  decorators: [withKnobs]
}

const User = {
  id: 'dummy-user-id',
  firstname: text('firstname', 'Julian'),
  lastname: text('lastname', 'Koehn'),
  email: 'hello@delivc.com'
}

const orgs: Team[] = [
  {
    id: 'random-uuid-number',
    name: 'Delivc GmbH',
    billing_email: 'billing@delivc.com'
  },
  {
    id: 'random-superdrup123-number',
    name: 'Classy GmbH',
    billing_email: 'billing@delivc.com'
  }
]

export const Empty = () => (
  <Teams user={User} onClickNew={action('onClickNew')} />
)

export const WithWorkSpaces = () => (
  <Teams workspaces={orgs} user={User} onClickNew={action('onClickNew')} />
)
