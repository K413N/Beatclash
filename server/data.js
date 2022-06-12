const threads = [
    {
        _id: "88a33c23-3332-4ea2-bd71-be4a6430431g",
        boardid: "General",
        op: "Beatclash Admin",
        threadtitle: "Hello world",
        body: "This is the first post created directly from mongodb!",
        likes: 0,
        dislikes: 0,
        date: "06/12/2022",
        tags: "",
        replies: [],
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
            tags: "",
            friends: [],
            posts: [],
        },
    ];

module.exports = { threads, users };