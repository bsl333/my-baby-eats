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
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:00 AM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '2:00 PM',
            formulaQty: 1,
            solidFoods: ['chicken'],
            mood: 'meh'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['chicken'],
            mood: 'happy'
          },
          {
            time: '9:00 PM',
            formulaQty: 4,
            solidFoods: ['chicken'],
            mood: 'happy'
          },
        ],
        overAllMood: 'happy',
        notes: 'He was happy all day and slept well'
      },
      {
        date: '5-28-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 2.5,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 AM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '2:00 PM',
            formulaQty: 2.5,
            solidFoods: ['eggs'],
            mood: 'fussy'
          },
          {
            time: '6:00 PM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '9:00 PM',
            formulaQty: 2.5,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 PM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'happy'
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
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 AM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '2:00 PM',
            formulaQty: 1,
            solidFoods: ['eggs'],
            mood: 'happy'
          },
          {
            time: '6:00 PM',
            formulaQty: 3.5,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '9:00 PM',
            formulaQty: 4,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 PM',
            formulaQty: 4,
            solidFoods: [''],
            mood: 'fussy'
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
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '2:00 PM',
            formulaQty: 3,
            solidFoods: ['eggs'],
            mood: 'meh'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '9:00 PM',
            formulaQty: 4,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'happy'
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
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['eggs'],
            mood: 'fussy'
          },
          {
            time: '6:00 PM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 PM',
            formulaQty: 4,
            solidFoods: [''],
            mood: 'meh'
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
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 AM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '2:00 PM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: ['chicken'],
            mood: 'fussy'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 PM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'happy'
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
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['sweet potato'],
            mood: 'meh'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 PM',
            formulaQty: 6,
            solidFoods: [''],
            mood: 'happy'
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
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['eggs'],
            mood: 'fussy'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '11:45 PM',
            formulaQty: 6,
            solidFoods: [''],
            mood: 'happy'
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
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['eggs'],
            mood: 'happy'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: [''],
            mood: 'fussy'
          },
        ],
        overAllMood: 'Happy',
        notes: 'Happy baby today!'
      },

      {
        date: '6-5-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '2:00 PM',
            formulaQty: 3.5,
            solidFoods: ['eggs'],
            mood: 'happy'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: [''],
            mood: 'fussy'
          },
        ],
        overAllMood: 'Happy',
        notes: 'Happy baby today!'
      },

      {
        date: '6-6-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['eggs'],
            mood: 'happy'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 PM',
            formulaQty: 8,
            solidFoods: [''],
            mood: 'fussy'
          },
        ],
        overAllMood: 'Happy',
        notes: 'Happy baby today!'
      },

      {
        date: '6-7-2018',
        foodIntake: [
          {
            time: '9:00 AM',
            formulaQty: 3,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '11:45 AM',
            formulaQty: 1,
            solidFoods: [''],
            mood: 'happy'
          },
          {
            time: '2:00 PM',
            formulaQty: 5,
            solidFoods: ['eggs'],
            mood: 'happy'
          },
          {
            time: '6:00 PM',
            formulaQty: 5,
            solidFoods: [''],
            mood: 'meh'
          },
          {
            time: '9:00 PM',
            formulaQty: 2,
            solidFoods: [''],
            mood: 'fussy'
          },
          {
            time: '11:45 PM',
            formulaQty: 7,
            solidFoods: [''],
            mood: 'fussy'
          },
        ],
        overAllMood: 'Happy',
        notes: 'Happy baby today!'
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