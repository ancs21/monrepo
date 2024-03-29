import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from './index'

storiesOf('Button', module).add('text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))
