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

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data.length).toBe(50);
    });

    test("respond to the GET /transaction/:id", async () => {

        const res = await axios.get(`${baseURL}/transactions/5ca4bbc1a2dd94ee58161d6f`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data).toMatchObject({
            account_id: 183400,
            transaction_count: 1,
            transactions: expect.arrayContaining([
                expect.objectContaining({
                    amount: 4908,
                    transaction_code: "buy"
                })
            ])
        });
    });

    test("respond to the GET /states", async () => {

        const res = await axios.get(`${baseURL}/states`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data.length).toBe(50);
    });

    test("respond to the GET /states/:id", async () => {

        const res = await axios.get(`${baseURL}/states/67e863090dca3d52466096d8`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data).toEqual({
            "_id": "67e863090dca3d52466096d8",
            "isoCode": "AR",
            "name": "Arkansas"
          });
    });

    test("respond to GET /accounts", async () => {

        const res = await axios(`${baseURL}/accounts`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data.length).toBe(1746);
    });

    test("respond to GET /accounts/:id", async () => {

        const res = await axios.get(`${baseURL}/accounts/5ca4bbc7a2dd94ee5816238c`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data).toMatchObject({
            account_id: 371138,
            limit: 9000,
            products: expect.arrayContaining([
                "Derivatives",
                "InvestmentStock"
            ])
        });
    });

    test("respond to GET /customers", async () => {

        const res = await axios.get(`${baseURL}/customers`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data.length).toBe(500);
    });


    test("respond to GET customers/:id", async () => {

        res = await axios(`${baseURL}/customers/5ca4bbcea2dd94ee58162a68`, {
            headers: headers
        });

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data).toMatchObject({
            username: "fmiller",
            name: "Elizabeth Ray",
            email: "arroyocolton@gmail.com",
            active: true,
            accounts: expect.arrayContaining([
                371138, 
                387979
            ])
        });
    });

    

});