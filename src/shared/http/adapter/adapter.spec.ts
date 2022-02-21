import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as types from '../types';
import { createAdapter, HttpClientError } from './adapter';

describe('client', () => {
  let mock: MockAdapter;
  let client: types.IHttpClient;
  let BASE_URL: string;
  let ACCESS_TOKEN: string;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    client = createAdapter(axios);
    BASE_URL = 'http://localhost:8080';
    ACCESS_TOKEN = '123-456';

    client.init({
      baseURL: BASE_URL,
    });
  });

  afterEach(() => {
    mock.reset();
  });

  it('should return a response object', () => {
    const data = {
      users: [
        {
          id: 1,
          name: 'John Smith',
        },
      ],
    };

    mock.onGet('/users').reply(200, data);

    const responseMock = {
      data,
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: 'Token 123-456',
      },
      ok: true,
      status: 200,
      statusText: '',
      url: `${BASE_URL}/users`,
    };

    expect(
      client.request({
        url: '/users',
        method: 'GET',
        headers: {
          Authorization: `Token ${ACCESS_TOKEN}`,
        },
      }),
    ).resolves.toEqual(responseMock);
  });

  it('should throw an custom error', () => {
    const responseData = 'Unauthorized';
    const status = 401;
    mock.onGet('/users').reply(status, responseData);

    const fetchUsers = () =>
      client.request({
        url: '/users',
        method: 'GET',
      });

    expect(fetchUsers).rejects.toThrow(HttpClientError);

    fetchUsers().catch((error: HttpClientError<string>) => {
      expect(error.name).toEqual('HttpClientError');
      expect(error.status).toEqual(status);
      expect(error.statusText).toEqual('');
      expect(error.data).toEqual(responseData);
      expect(error.message).toEqual('');
    });
  });
});
