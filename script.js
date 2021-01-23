const qoutesList = [ 
    {
        id: 1,
        name: "The only person who can really motivate you is you."
    },
    {
        id: 2,
        name: "It takes an awful lot of determination, dedication, self-discipline and effort to make our dreams come into reality."
    },
    {
        id: 3,
        name: "Motivation keeps you going but discipline keeps you growing."
    },
    {
        id:4,
        name: "Set your own goals and work hard to achieve them."
    },
    {
        id:5,
        name: "You become what you think."
    },
    {
        id:6,
        name: "You are never too old to set a new goal or to dream a new dream."
    },
    {
        id:7,
        name: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine."
    },
    {
        id:8,
        name: "Dont let fear stop you. Sometimes you just got to do it or else it just doesn't happen."
    },
    {
        id:9,
        name: "You can always find a solution if you try hard enough."
    },
    {
        id:10,
        name: "A goal without a timeline is just a dream."
    },
    {
        id:11,
        name: "To win big, you sometimes have to take big risks."
    },
    {
        id:12,
        name: "Hustling is putting every minute and all your effort into achieving the goal at hand. Every minute needs to count."
    },
    {
        id:13,
        name: "You can, you should, and if you’re brave enough to start, you will."
    },
    {
        id:14,
        name: "When you know what you want and you want it bad enough, you’ll find a way to get it."
    },
    {
        id:15,
        name: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.    "
    }
]

function displayQoute() {
    const randomInt = Math.floor(Math.random() * qoutesList.length);
    const dailyQoute = qoutesList[randomInt];

    displayImage();
   
    document.getElementById("daily-qoute").innerHTML = dailyQoute.name;
}


function displayImage() {
    const randomInt = Math.floor(Math.random() * 50);

    document.body.style.backgroundImage = "url('https://source.unsplash.com/random?sig="+randomInt+"')";
}