import { FC } from 'react';
import { PageType } from '../../data/dataState';
import { useParams } from 'react-router';

type PropsType = {
  pages: PageType[];
};

export const Page: FC<PropsType> = ({ pages }) => {
  const params = useParams();
  // проверка на наличие данных и создание переменной page
  const page = params.link ? pages[+params.link] : null;
  if (!page) return null;

  return (
    <div>
      <h1>{page.heading}</h1>
      <img src={page.image} alt={page.heading} />
      <p>{page.about}</p>
    </div>
  );
};
