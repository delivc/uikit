import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Pane } from 'evergreen-ui'
import { Navbar } from '../components/navbar'
import { Topnav } from '../components/topnav'
import { Sidenav } from '../components/sidenav'
import GeneralSettings from '../views/team/settings/general'

export default {
  title: 'Examples/Team/Settings',
  decorators: [withKnobs]
}

const dummyUser = {
  id: 'random-user-id',
  email: 'you@delivc.com',
  firstname: 'Julian',
  lastname: 'Koehn'
}

const dummyTeam = {
  id: 'dummyIdofTeam',
  name: 'Delivc GmbH',
  billing_email: 'billing@delivc.com'
}

export const Default = () => (
  <Pane
    display="flex"
    flexGrow={1}
    minHeight="100%"
  >
    <Navbar expanded={boolean('expanded', false)}>
      <Navbar.Main>
        <Navbar.Item icon="home" label="Home" href="#" />
        <Navbar.Item icon="layout-grid" label="Models" href="#" />
        <Navbar.Item icon="grid-view" label="Content" href="#" />
      </Navbar.Main>
      <Navbar.Footer>
        <Navbar.Item icon="cog" label="Settings" href="#" />
      </Navbar.Footer>
    </Navbar>
    <Pane
      display="flex"
      width="100%"
      flexDirection="column"
    >
      <Topnav locationMessage="Settings" user={dummyUser} />
      <Pane
        display="flex"
        flexDirection="column"
        flex={1}
      >
        <Pane
          flex="1 1 auto"
          width="100%"
          display="flex"
        >
          <Sidenav>
            <Sidenav.Group icon="cog" label="Team Settings">
              <Sidenav.Item href="#" label="General Settings" />
              <Sidenav.Item href="#" label="Audit Logs" />
            </Sidenav.Group>
            <Sidenav.Group icon="credit-card" label="Usage & Billing">
              <Sidenav.Item href="#" label="Usage" />
              <Sidenav.Item href="#" label="Plans" />
              <Sidenav.Item href="#" label="Invoice History" />
              <Sidenav.Item href="#" label="Payment Information" />
            </Sidenav.Group>
          </Sidenav>
          <GeneralSettings team={dummyTeam} onSubmit={action('onSubmit')} />
        </Pane>
      </Pane>
    </Pane>
  </Pane>
)
