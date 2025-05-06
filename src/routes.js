import { addNoteHandler } from './handler.js';

export const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];