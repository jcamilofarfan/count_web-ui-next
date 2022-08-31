import { NextURL } from "next/dist/server/web/next-url";

const API:NextURL = process.env.NEXT_PUBLIC_API_AUTH as unknown as NextURL;

export const login = async (credencials:any) => {
    const {username, password} = credencials;
	try {
		const res = await fetch(API + 'login', {
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

export const singUp = async (user:any) => {
    const {username, password, email} = user;
    try {
        const res = await fetch(API + 'user', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                username,
                password,
                'updated_at': new Date(),
                'created_at': new Date(),
                'status': false
            })
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}
