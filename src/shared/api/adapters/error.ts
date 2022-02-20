import type { AxiosError } from 'axios';

export class HttpClientError extends Error {
  public readonly status?: number;

  constructor(error: AxiosError) {
    super();
    this.name = this.constructor.name;
    this.status = error.response?.status;
    this.message = error.response?.data.message ?? this.message;
  }
}
