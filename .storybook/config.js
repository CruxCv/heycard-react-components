import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const reqS = [
  require.context('components', true, /\.stories\.js$/),
  // require.context('../src/pages', true, /\.stories\.js$/),
  // require.context('../src/modals', true, /\.stories\.js$/)
]

const loadStories = () => reqS.forEach(req => req.keys().forEach(filename => req(filename)))

addDecorator((story, context) => withInfo('common info')(story)(context))

configure(loadStories, module)
