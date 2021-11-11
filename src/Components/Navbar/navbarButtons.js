import * as route from '../../Router/routes';

export const navbarButtons = [
  {
    title: 'about me',
    menuItems: [
      { title: 'Home', link: route.home },
      { title: 'My CV', link: route.cv },
    ],
  },
  {
    title: 'examples',
    menuItems: [
      { title: 'Library Challenge', link: route.books },
      { title: 'Starwars API', link: '/', disabled: true },
    ],
  },
];
