import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faHouseUser, faCompass, faHouseDamage, faLandmark, faFilm, faTree, faTags } from '@fortawesome/free-regular-svg-icons';

library.add(
  faHouseUser,
  faCompass,
  faHouseDamage,
  faLandmark,
  faFilm,
  faTree,
  faTags,
);


export const houseDamage = icon({ prefix: 'fas', iconName: 'houseDamage' }).html;
export const compass = icon({ prefix: 'fas', iconName: 'compass' }).html;
export const houseUser = icon({ prefix: 'fas', iconName: 'houseUser' }).html;
export const landmark = icon({ prefix: 'fas', iconName: 'landmark' }).html;
export const film = icon({ prefix: 'fas', iconName: 'film' }).html;
export const tree = icon({ prefix: 'fas', iconName: 'tree' }).html;
export const tags = icon({ prefix: 'fas', iconName: 'tags' }).html;
