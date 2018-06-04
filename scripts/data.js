const data = [
  {
    name: 'Grayson',
    dailyBehavior: [
      {
        date: '1-1-2018',
        foodIntake: [
          {
            time: '7:00 AM',
            formulaQty: 2.5,
            solidFoods: ['']
          },
          {
            time: '11:00 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 1,
            solidFoods: ['chicken']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['chicken']
          },
          {
            time: '9:00 PM',
            formulaQty: 4,
            solidFoods: ['chicken']
          },
        ],
        overAllMood: 'Happy',
        notes: 'He was happy all day and slept well'
      },
      {
        date: '1-2-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 2.5,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 1,
            solidFoods: ['egg']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['']
          },
          {
            time: '9:00 PM',
            formulaQty: 4,
            solidFoods: ['']
          },
          {
            time: '11:45 PM',
            formulaQty: 4,
            solidFoods: ['']
          },
        ],
        overAllMood: 'Fussy',
        notes: 'Cried more than usual - did not nap well'
      },

      {
        date: '1-3-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 2.5,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 1,
            solidFoods: ['egg']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['']
          },
          {
            time: '9:00 PM',
            formulaQty: 4,
            solidFoods: ['']
          },
          {
            time: '11:45 PM',
            formulaQty: 4,
            solidFoods: ['']
          },
        ],
        overAllMood: 'Fussy',
        notes: 'Cried more than usual - did not nap well'
      },

      {
        date: '1-4-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['egg']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['']
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: ['']
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: ['']
          },
        ],
        overAllMood: 'Fussy',
        notes: 'Cried more than usual - did not nap well'
      },

      {
        date: '1-5-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['egg']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['']
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: ['']
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: ['']
          },
        ],
        overAllMood: 'Fussy',
        notes: 'Cried more than usual - did not nap well'
      },

      {
        date: '1-6-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['Chicken']
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: ['']
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: ['']
          },
        ],
        overAllMood: 'Fussy',
        notes: 'Cried more than usual - did not nap well'
      },

      {
        date: '1-7-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['Sweet potatoe']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['']
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: ['']
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: ['']
          },
        ],
        overAllMood: 'Fussy',
        notes: 'Cried more than usual - did not nap well'
      },

      {
        date: '1-8-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: ['']
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['egg']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['']
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: ['']
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: ['']
          },
        ],
        overAllMood: 'Fussy',
        notes: 'Cried more than usual - did not nap well'
      },
    ]
  },

  {
    name: 'McKenna',
    dailyBehavior: [
      {
        date: '1-2-2018',
        foodIntake: [
          {
            time: '09:00 AM',
            formulaQty: 2.5,
            solidFoods: ['']
          },
          {
            time: '11:30 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '1:00 PM',
            formulaQty: 0,
            solidFoods: ['chicken']
          },
          {
            time: '4:00 PM',
            formulaQty: 4,
            solidFoods: ['chicken']
          },
          {
            time: '7:30 PM',
            formulaQty: 8,
            solidFoods: ['chicken']
          },
        ],
        overAllMood: 'Happy',
        notes: 'He was happy all day and slept well'
      }
    ]
  }
]

module.exports = data