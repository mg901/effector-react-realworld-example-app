declare global {
  interface Error {
    status?: number;
    errors: any;
  }

  type Errors = Pick<Error, 'errors'>;
}

export {};
