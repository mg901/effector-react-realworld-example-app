declare global {
  interface Error {
    status?: number;
    errors: readonly string[];
  }

  type Errors = Pick<Error, 'errors'>;
}

export {};
