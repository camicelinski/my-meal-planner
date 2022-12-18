const formFields = [
  {
    name: 'date',
    label: 'Date',
    type: 'date',
    regExp: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
    err: 'select a date today or in the future',
    required: true,
    defaultValue: ''
  },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: [
      'breakfast',
      'elevenses',
      'lunch',
      'snacks',
      'dinner'
    ],
    regExp: /[A-Za-z]+/,
    err: 'select a valid meal type',
    required: true,
    defaultValue: 'lunch'
  },
  {
    name: 'name',
    label: 'Name',
    placeholder: 'e.g. Eggs Benedict',
    type: 'text',
    regExp: /[A-Za-z]+/,
    err: 'add a valid recipe',
    required: true,
    defaultValue: ''
  },
  {
    name: 'servings',
    label: 'Servings',
    type: 'number',
    err: 'servings must be greater than zero',
    required: true,
    defaultValue: '2'
  },
  {
    name: 'note',
    label: 'Note',
    type: 'text',
    err: 'price must be greater than zero',
    required: false
  }
]

export default formFields
