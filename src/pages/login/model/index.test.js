describe('pages/login', () => {
  it('return correct login', () => {
    expect(process.env.USER_LOGIN).toEqual('102928@1029.com');
  });
});
