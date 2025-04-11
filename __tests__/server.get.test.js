const axios = require("axios");
const baseURL = "https://cse341-project-ctd6.onrender.com";
const sessionCookie = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNzQ0MzgwOTU3LCJ1YXQiOjE3NDQzODA5NTgsImV4cCI6MTc0NDQ2NzM1OH0..d4zQeV01GjCqf08t.2m6u8NYUx1OaQsAERTkjdqeRD2HFfeJxYYy7ms6m7fvahAkLegVyZWmp801Cttx9BLmsgf-XkC9T_sZIVRkI-crU-f24I4jajDyeLS-Z3PZbguQv1q7T_TiNluM0KvUG09YD0CIBeBgK-I4pwgdrv1IPvQSKViyFaXUa-5bv1e-I-Di5SljTK0h_Lb44TJWqcoP4G0EAJqWtGijFaF7FzrIDBR9kJcsE1MkFi9Wd-izDqE6qpFudVv1Irj13WdQi0DNj_XmFc_b-f_2V8N3lCI4Xe7R5HtSa27AyG5CrmVHdwuuqaL5bTeE34EIYNDnA50lnmj7OMgjd67l0rHAKQ-txn79Liu07JL3o-RrwCL3G7nUDVHNVL7a86oJmCmyITcTfae9F_pp-1I09cGLKwqk0qmitpQaNNADuYuZ4D7JFok0Y5nkjmdrRXdvdRohvJi2ZNuycqXVUTS93rLNMnxfc4-5mMKjsN6f4KXEWcHJ60nmFnYsvM3FTxDsHm0hN9rs6XVC1NCCiKH8XpgL8U5TpSHiSGhktKS3mqMjYKuvHWi3k9wCCerVEd4ke-7OzYs6vF1_-5Sw6oLZVV0NsvoxM31cm5On7UpklYIDGArZEPKvC9QzKaCrYRy2pW6-6Hy7rn4UVKDL2HgF2fy5js4KsxhOdf8HzdDdIY1gNfBcrsHGBqvv3bdkJCFIYvJ_JMTtROZG18yPQ3bh5qtvB5D7S_9kpCrMOpDxt9rYwtI2fggPkpdIfNv3NN2ucjHE2tTvAXhRzSBowHfNqE8C56uoLfEXwcTE3wB7VC68j4B3OzyOBNpPLil0YdfZZzPcbkZ8SSsqUQtzaAnmruPXioiSnqNReL25fdCgR8l6zpyF8gpKqN4t5UcJYACGlSWGAesZL10f7EfcVYKerMYu_Ia9I6I_gQ7sRdIoNy4GLfWyJg9qc8x0wVLZNx8cTtjuDfyHIitLWeUKSxWhi7tzzHpppc6S7HJy8mqAsPPMiDZT36SSWFCdEgJMUburnQaVBHucstLYVNBCCm7-_tWHxxSM7xV3QB0PhZgwR8nne5n_KdW-wiL-svTZYEW97IRYYteW4blPMbnydTRKEA6wL92ohJN3ZbRFjSoPUp7zoslbKG7eO_VIhR3pQA_a5D-NVNWt4yISjUNvp9BwDxYVA2ICx8w8vEnKyLSyugVNnThyXTXYZkuR_W_fN4Iejep8fNstOs51iekzofbku6wXenIaxLgTiUyt-2dE79EgNOoKPt93ub3XzKwbS6PUpUFq4qq7hnmf0fX-VbH8rxUMhA0JEJht0QwqxT-JhQ70J1f-e3p9OyD3rI9A141esI6rEgIWv79xtlwFpy4qlazcawSFezBjuQVAlF5WONVrChIughwk451u_AEonl9Dw1ITA1d4NmmN15h1vQSLpVTxNRZMlv0O89Y4.E1dVZQGYQhZa0PrnnPH2eQ"

describe("GET /", () => {
    test("respond to the Home route", async () => {

        const res = await axios.get(`${baseURL}/`, {
            headers: {
                'Cookie': `appSession=${sessionCookie}`
            }
        });

        console.log(res.status);
        console.log(res.headers);
        console.log(res.data);

        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.data.authentication).toBe("Logged in")

    });
});