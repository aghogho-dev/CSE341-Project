require("dotenv").config();

const axios = require("axios");
const baseURL = process.env.BASE_URL;
const sessionCookie = process.env.SESSION_COOKIE
const headers = { 'Cookie': `appSession=${sessionCookie}` }

describe("Test GET routes", () => {
    test("respond to the Home GET route: /", async () => {

        const res = await axios.get(`${baseURL}/`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data.authentication).toBe("Logged in")
    });

    test("respond to the GET /transactions", async () => {

        const res = await axios.get(`${baseURL}/transactions`, {
            headers: headers
        });

        console(res.data);
        console(res);

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        // expect(res.data)
    })
});