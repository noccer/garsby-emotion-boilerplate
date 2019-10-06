import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'monolith-ui-components'

storiesOf('Button', module).add('Primary', () => (
  <Button to="#" variant="primary">
    Primary state
  </Button>
))

storiesOf('Button', module).add('Secondary', () => (
  <Button to="#" variant="secondary">
    Secondary state
  </Button>
))
