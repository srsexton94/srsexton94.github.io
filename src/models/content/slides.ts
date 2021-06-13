export interface ISlide {
  image: string,
  altText: string,
  heading: string,
  body: string,
  isActive: boolean,
  [key: string]: string | boolean;
}

export const CommunitySlides: ISlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1415931633537-351070d20b81?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225',
    altText: 'First image',
    heading: 'First image',
    body: 'image description here here here',
    isActive: false
  },
  {
    image: 'https://images.unsplash.com/reserve/lNlimzQRqm3emNrRnv1w_IMG_7726.JPG?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225',
    altText: 'Second image',
    heading: 'Second image',
    body: 'image description here here here',
    isActive: false
  },
  {
    image: 'https://images.unsplash.com/photo-1449445121243-085ef669b29b?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225',
    altText: 'Third image',
    heading: 'Third image',
    body: 'image description here here here',
    isActive: true
  },
  {
    image: 'https://images.unsplash.com/photo-1449208233734-dcf88e8e352c?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225',
    altText: 'Fourth image',
    heading: 'Fourth image',
    body: 'image description here here here',
    isActive: false
  },
  {
    image: 'https://images.unsplash.com/photo-1448818583842-3353f177e9b4?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225',
    altText: 'Fifth image',
    heading: 'Fifth image',
    body: 'image description here here here',
    isActive: false
  }
]