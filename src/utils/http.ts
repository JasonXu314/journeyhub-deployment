import axios from 'axios';

export const http = axios.create({ withCredentials: true });

export interface AccessTokenResponse {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	refresh_token_expires_in: number;
	token_type: 'bearer';
	scope: string;
}

