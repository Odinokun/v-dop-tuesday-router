export type PagesStateType = {
  pages: PageType[];
};

export type PageType = {
  id: string;
  title: string;
  descr: string;
  img: string;
};

export const pagesState: PagesStateType = {
  pages: [
    {
      id: crypto.randomUUID(),
      title: 'Adidas',
      descr:
        'Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.',
      img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce738cbe5342421996feaf5001044964_9366/Campus_00s_Shoes_Grey_HQ8707_01_standard.jpg',
    },
    {
      id: crypto.randomUUID(),
      title: 'Puma',
      descr:
        'Puma SE, branded as Puma, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories, which is headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world.',
      img: 'https://images.puma.net/images/395205/03/sv01/fnd/ZAF/w/600/h/600/',
    },
    {
      id: crypto.randomUUID(),
      title: 'Nike',
      descr:
        'Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area.',
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png',
    },
  ],
};
