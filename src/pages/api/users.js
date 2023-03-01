const users = [
    {
        id: 1,
        name: "Luke Skywalker"
    },
    {
        id: 2,
        name: "Leia Organa"
    }
]

export default function (req, res) {
    if (req.method === "GET") {
        res.status(200).send(users)
    } else if (req.method === "POST") {
        console.log("== req.body:", req.body)
        res.status(201).end()
    }
}
