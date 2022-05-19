const Events = [
  {
    id: '1',
    time: '18:00',
    title: 'Coffee event',
    creator: 'Abdi',
    guests: ['Ali', 'Said', 'Suleyman'],
    type: 'COFFEES',

    EventLocation: {
      name: 'Bristol',
      latitude: 'number',
      longitude: 'number',
    },

    EventComment: {
      user: 'User',
      timestamp: '10 may 2022',
      description:
        'Nice Coffee event to catchup with your friends, the long awaited return of our coffee event is now happening on the night of 10 May, reserve your place as early as possible to prevent disappointment',
    },

    User: {
      name: 'abdirahman',
      avatarUrl: 'string',
    },
  },

  {
    id: '2',
    time: '15:00',
    title: 'Coctail event',
    creator: 'Josh',
    guests: ['Martin', 'Bob', 'Anton'],
    type: 'COCTAIL',

    EventLocation: {
      name: 'London',
      latitude: 'number',
      longitude: 'number',
    },

    EventComment: {
      user: 'User',
      timestamp: '10 may 2022',
      description:
        'Brilliant Coctail event, the long awaited return of our Coctail event is now happening on the night of 10 May, reserve your place as early as possible to prevent disappointment',
    },

    User: {
      name: 'abdirahman',
      avatarUrl: 'string',
    },
  },
  {
    id: '3',
    time: '14:00',
    title: 'soft drink event',
    creator: 'Ali',
    guests: ['Yas', 'Bill', 'Aron'],
    type: 'Milk',

    EventLocation: {
      name: 'London',
      latitude: 'number',
      longitude: 'number',
    },

    EventComment: {
      user: 'User',
      timestamp: '10 may 2022',
      description:
        'Brilliant Coctail event, the long awaited return of our Coctail event is now happening on the night of 10 May, reserve your place as early as possible to prevent disappointment',
    },

    User: {
      name: 'abdirahman',
      avatarUrl: 'string',
    },
  },
]

export default Events
