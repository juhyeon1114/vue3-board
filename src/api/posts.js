export const posts = [
  { id: 1, title: '제목 예시', contents: '내용 예시', createdAt: '2020-01-01' },
  { id: 2, title: '제목 예시', contents: '내용 예시', createdAt: '2020-01-01' },
  { id: 3, title: '제목 예시', contents: '내용 예시', createdAt: '2020-01-01' },
  { id: 4, title: '제목 예시', contents: '내용 예시', createdAt: '2020-01-01' },
];

export const getPosts = () => {
  return posts;
};

export const getPostById = id => {
  return posts.find(v => v.id === Number(id));
};
