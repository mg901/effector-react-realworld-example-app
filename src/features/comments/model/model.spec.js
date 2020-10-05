import { createEvent } from 'effector';
import { $comments, fetchCommentFx } from './model';

let fetchCommentHandler = null;

describe('features/comments', () => {
  beforeEach(() => {
    $comments.setState([]);

    fetchCommentHandler = fetchCommentFx.use.getCurrent();
  });

  afterEach(() => {
    fetchCommentFx.use(fetchCommentHandler);
  });

  const resetComments = createEvent();
  beforeAll(() => {
    $comments.reset(resetComments);
  });

  afterAll(() => {
    $comments.off(resetComments);
  });

  test('add new comment in comments', async () => {
    fetchCommentFx.use(() => ({
      author: 'John Doe',
      body: 'my first comment',
      id: '1',
      createdAt: '2',
      updatedAt: '3',
    }));

    await fetchCommentFx();
    expect($comments.getState()).toEqual([
      {
        author: 'John Doe',
        body: 'my first comment',
        id: '1',
        createdAt: '2',
        updatedAt: '3',
      },
    ]);
  });
});
