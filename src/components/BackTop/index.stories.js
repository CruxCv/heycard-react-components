import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BackTop from './index'

storiesOf('BackTop', module).add('awesome', () => (
  <BackTop label="Awesome BackTop" onClick={action('onClick')} />
))
