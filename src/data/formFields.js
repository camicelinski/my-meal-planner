const formFields = [
  {
    name: 'date',
    label: 'Date',
    type: 'date',
    regExp: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
    err: 'select a date today or in the past',
    required: true
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
    // regExp: /^[A-Z]$/,
    regExp: /[A-Za-z]+/,
    err: 'select a valid meal type',
    required: true
  },
  {
    name: 'name',
    label: 'Name',
    placeholder: 'e.g. pasta',
    type: 'text',
    regExp: /[A-Za-z]+/,
    err: 'price must be greater than zero',
    required: true
  },
  {
    name: 'note',
    label: 'Note',
    type: 'text',
    regExp: /[A-Za-z]+/,
    err: 'price must be greater than zero',
    required: false
  }
]

export default formFields
