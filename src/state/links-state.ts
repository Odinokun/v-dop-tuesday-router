export type LinksStateType = {
  id: string;
  link: string;
  title: string;
};

export const linksState: LinksStateType[] = [
  {
    id: crypto.randomUUID(),
    link: '0',
    title: 'Adidas',
  },
  {
    id: crypto.randomUUID(),
    link: '1',
    title: 'Puma',
  },
  {
    id: crypto.randomUUID(),
    link: '2',
    title: 'Nike',
  },
];
