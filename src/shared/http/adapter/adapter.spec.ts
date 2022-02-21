import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as types from '../types';
import { createAdapter, HttpClientError } from './adapter';

describe('client', () => {
  let mock: MockAdapter;
  let client: types.IHttpClient;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    client = createAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should return a response object', () => {
    const responseData = {
      users: [{ id: 1, name: 'John Smith' }],
    };

    mock.onGet('/users').reply(200, responseData);

    expect(
      client.request({
        url: '/users',
        method: 'GET',
      }),
    ).resolves.toEqual(responseData);
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
