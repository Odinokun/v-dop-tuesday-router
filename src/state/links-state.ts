export type LinksStateType = {
  id: string;
  title: string;
};

export const linksState: LinksStateType[] = [
  {
    id: crypto.randomUUID(),
    title: 'Adidas',
  },
  {
    id: crypto.randomUUID(),
    title: 'Puma',
  },
  {
    id: crypto.randomUUID(),
    title: 'Nike',
  },
];
