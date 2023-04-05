type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Posts extends Base{
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  link: string;
}

interface Image{
  _type:'image';
  asset:Refrence;
}

interface Refrence{
  _ref:string;
  _type:'reference';
}

interface Slug{
  _type:"slug"
  current:string;
}

interface Block{
  _key:string;
  _type:"block";
  children:Span[];
  markDefs: any[];
  style:"normal"|"h1"|"h3"|"h4"|"blockqoute";
}

interface Span{
  _key:string;
  _type:"span";
  marks:string[];
  text:string[];
}

interface Category extends Base{
  description: string;
  title: string;
}

interface MainImage{
  _type:'image';
  asset:Refrence;
}

interface Title{
  _type: "string";
  current:string;
}