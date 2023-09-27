const gameObject = [
    {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    stats: {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        ebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1,
                    },
                },
                'Reggie Evans': {
                    stats: {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        ebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7,
                    },
                },
                'Brook Lopez': {
                    stats: {
                        number: 11,
                        shoe: 17,
                        points: 17,
                        ebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 15,
                    },
                },
                'Mason Plumlee': {
                    stats: {
                        number: 1,
                        shoe: 19,
                        points: 26,
                        ebounds: 12,
                        assists: 6,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5,
                    },
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    stats: {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        ebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2,
                    },
                },
                'Bismak Biyombo': {
                    stats: {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        ebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10,
                    },
                },
                'DeSagna Diop': {
                    stats: {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        ebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5,
                    },
                },
                'Ben Gordon': {
                    stats: {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        ebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0,
                    },
                },
                'Brendan Haywood': {
                    stats: {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        ebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12,
                    },
                },
            },
        },
    },
];

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  };
  console.log(homeTeamName());
  
