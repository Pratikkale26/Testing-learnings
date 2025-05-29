// import express from "express";

// export const app = express();
// app.use(express.json());

// app.post("/sum", (req, res) => {
//     const a = req.body.a;
//     const b = req.body.b;
//     const ans = a + b;

//     res.json({
//         ans
//     })
// });

// // we wont add "app.listen()" here. => bin.ts file



import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return
    }

    const ans = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        ans
    })
});

app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })

    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return
    }

    const ans = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        ans
    })
});