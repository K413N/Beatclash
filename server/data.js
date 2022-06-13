const threads = [
    {
        _id: "88a33c23-1332-4ea2-bd71-be4a6430431g",
        boardId: "gen",
        op: "Beatclash Admin",
        threadTitle: "Hello world",
        body: "This is the first post created directly from mongodb!",
        likes: 0,
        dislikes: 0,
        replies: 1,
        date: "06/12/2022",
        tags: [],
        posts: [
            {
                _id: "78a33c23-3732-4ff1-bk71-be7a6433485t",
                userId: "88a33c23-3233-4ef2-bd71-be7a6430437v",
                username: "GoodDoggo",
                body: "BORF! BORF!",
                likes: 0,
                dislikes: 0,
                date: "06/12/2022",
                replies: [],
            }
        ],
    }
];

const users = [
        {
            _id: "88a33c23-3332-4ef2-bd71-be7a6430485f",
            username: "Beatclash Admin",
            givenname: "Beatclash",
            surname: "Admin",
            email: "Kalen.Coolson@gmail.com",
            avatar: "https://images.unsplash.com/photo-1602848596718-45693ff58c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
            joindate: "06/12/2022",
            description: "Hello, welcome to my profile",
            tags: [],
            friends: [
                { _id: "88a33c23-3233-4ef2-bd71-be7a6430437v", },
            ],
            posts: [
                { threadid: "88a33c23-1332-4ea2-bd71-be4a6430431g", isop: true }
            ],
        },
        {
            _id: "88a33c23-3233-4ef2-bd71-be7a6430437v",
            username: "GoodDoggo",
            givenname: "Good",
            surname: "Doggo",
            email: "GoodDoggo@hotdogs.net",
            avatar: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            joindate: "06/12/2022",
            description: "borf borf",
            tags: [],
            friends: [
                { _id: "88a33c23-3332-4ef2-bd71-be7a6430485f", },
            ],
            posts: [],
        },
    ];

module.exports = { threads, users };