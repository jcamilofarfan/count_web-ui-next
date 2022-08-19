import { NextURL } from "next/dist/server/web/next-url";

const API:NextURL = process.env.NEXT_PUBLIC_API_AUTH as unknown as NextURL;

export const callAPI = async (credencials:any) => {
    const {username, password} = credencials;
    console.log(API, "API");
	try {
		const res = await fetch(API, {
            method: 'POST',
            headers: {
                'accept': 'application/json'
            },
            body: new URLSearchParams({
                'grant_type': '',
                'username': username,
                'password': password,
                'scope': '',
                'client_id': '',
                'client_secret': ''
            })
        });
		const data = await res.json();
        return data;
	} catch (err) {
        return err;
	}
};