import axios from "axios"

async function registerUser() {
    try {
        const response = await axios.post("http://localhost:8080/api/user/register",
        {
            username: "c",
            "first_name": "c",
            "last_name": "c",
            password: "c"   
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                withCredentials: true
            }
        })
        console.log(response.headers)
    } catch (error) {
        console.error(error)
    }
}

async function loginAndPost10() {
    try {
        await registerUser();
        const response = await axios.post(
            "http://localhost:8080/api/user/login",
            {
                username: "c",
                password: "c"
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Cookie: 'login_token=',
                },
                withCredentials: true,
                maxRedirects: 0,
                validateStatus: (status) => status <= 302
            }
        )
        const cookieValue = response.headers["set-cookie"]
        for (let i = 0; i < 10; i++) {
            createPost(cookieValue, `Post number ${i} posted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`)
        }
    } catch (error) {
        console.error(error)
    }
}

loginAndPost10()

async function createPost(cookieValue, text) {
    try {
        const response = await axios.post("http://localhost:8080/api/post/compose",
            {
                username: "c",
                user_id: "c",
                text,
                post_type: 0
            },
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Cookie': cookieValue
                }
            })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

//createPost()