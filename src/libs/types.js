export type Post = {
  id: number,
  caption: string,
  url: string,
};

export type Action = {
  type: 'add',
  item: Post,
};
