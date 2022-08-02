export type Images = {
  id: number;
  title: string;
  likes: number;
  image: string;
};

export type Comments = {
  id: number;
  content: string;
  imageId: number;
};

export const imagesData: Images[] = [
  { id: 1, title: "Coder dog", likes: 7, image: "./assets/coder-dog.png" },
  { id: 2, title: "Coder cats", likes: 5, image: "./assets/coder-cat.jpeg" },
];

export const commentsData: Comments[] = [
  { id: 1, content: "What a cute dog!", imageId: 1 },
  { id: 2, content: "He has the paws for this!", imageId: 2 },
  { id: 3, content: "Someone's in trouble!", imageId: 2 },
  { imageId: 1, content: "Funny dog!!", id: 4 },
  { imageId: 1, content: "Hes a good boy!!", id: 5 },
];
