export const isDev = process.env.NODE_ENV !== 'production';

export const serverHostname = isDev ? 'http://localhost:3000' : 'https://maxwjacobs.com';
