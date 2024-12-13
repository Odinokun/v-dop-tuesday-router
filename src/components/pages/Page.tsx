import { FC } from 'react';
import { PageType } from '../../data/dataState';
import { useParams } from 'react-router';
import { Error404 } from './Error404';

type PropsType = {
  pages: PageType[];
};

export const Page: FC<PropsType> = ({ pages }) => {
  const params = useParams();
  const page = params.link ? pages[+params.link] : null;

  return page ? (
    <div>
      <h1>{page.heading}</h1>
      <img src={page.image} alt={page.heading} />
      <p>{page.about}</p>
    </div>
  ) : (
    <Error404 />
  );
};
