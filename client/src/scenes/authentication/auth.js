import Router from 'next/router';
import Cookies from 'js-cookie';
import { fetcher } from './api';

export const setToken = (data) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data.user.id);
  Cookies.set('username', data.user.username);
  Cookies.set('jwt', data.jwt);

  if (Cookies.get('username')) {
    Router.reload('/');
  }
};

export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('username');

  Router.reload('/');
};

export const getUserFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetch(`http://localhost:1337/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 7bf43d6454985574e8a847f0573d63683ec60829af862ba191b123788bb95324ebaa9b3c47e6bfbfe935330977564d417e6c6486a955093ecf05a0a48bbcb76a918544611b5787a20d1069e623102e2098e2a341e3e6e96bc97ea2e891d0fc4b1aa7a2e06c44ff6a28574cb6b7eb0e446de00331ea26d60ac7f33d9aaf8e06a2`,
      },
    })
      .then((data) => {
        return data.username;
      })
      .catch((error) => console.error(error));
  } else {
    return;
  }
};

export const getIdFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetcher(`http://localhost:1337/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 7bf43d6454985574e8a847f0573d63683ec60829af862ba191b123788bb95324ebaa9b3c47e6bfbfe935330977564d417e6c6486a955093ecf05a0a48bbcb76a918544611b5787a20d1069e623102e2098e2a341e3e6e96bc97ea2e891d0fc4b1aa7a2e06c44ff6a28574cb6b7eb0e446de00331ea26d60ac7f33d9aaf8e06a2`,
      },
    }).then((data) => {
      return data.id;
    });
  } else {
    return;
  }
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};

export const getTokenFromServerCookie = (req) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const jwtCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith('jwt='));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split('=')[1];
  return jwt;
};

export const getIdFromServerCookie = (req) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const idCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith('id='));
  if (!idCookie) {
    return undefined;
  }
  const id = idCookie.split('=')[1];
  return id;
};