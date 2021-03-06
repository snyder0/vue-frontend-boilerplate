import { Fields } from '@/lib/types/field.js'
import { Layout } from '@/lib/types/layout.js'

const loginFormFields = [
  {
    autofocus: true,
    key: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    type: Fields.TEXT,
    layout: Layout.L12,
    prependIcon: 'email'
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    type: Fields.PASSWORD,
    layout: Layout.L12,
    prependIcon: 'lock'
  }
]

export default loginFormFields