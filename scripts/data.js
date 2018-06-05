const data = [
  {
    name: 'Grayson',
    dailyBehavior: [
      {
        date: '5-27-2018',
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
            solidFoods: ['Chicken']
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['Chicken']
          },
          {
            time: '9:00 PM',
            formulaQty: 4,
            solidFoods: ['Chicken']
          },
        ],
        overAllMood: 'Happy',
        notes: 'He was happy all day and slept well'
      },
      {
        date: '5-28-2018',
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
            solidFoods: ['Eggs']
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
        date: '5-29-2018',
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
            solidFoods: ['Eggs']
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
        date: '5-30-2018',
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
            solidFoods: ['Eggs']
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
        date: '5-31-2018',
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
            solidFoods: ['Eggs']
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
        date: '6-1-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: ['']
          },
          {
            time: '11:45 AM',
            formulaQty: 6,
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
        date: '6-2-2018',
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
            solidFoods: ['Sweet Potato']
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
        date: '6-3-2018',
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
            solidFoods: ['Eggs']
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
        date: '6-4-2018',
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
            solidFoods: ['Eggs']
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
        overAllMood: 'Happy',
        notes: 'Happy baby today!'
      }
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
            solidFoods: ['Chicken']
          },
          {
            time: '4:00 PM',
            formulaQty: 4,
            solidFoods: ['Chicken']
          },
          {
            time: '7:30 PM',
            formulaQty: 8,
            solidFoods: ['Chicken']
          },
        ],
        overAllMood: 'Happy',
        notes: 'He was happy all day and slept well'
      }
    ]
  }
]

module.exports = data