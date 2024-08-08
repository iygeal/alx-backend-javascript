import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const clsRoom1 = new ClassRoom(19);
  const clsRoom2 = new ClassRoom(20);
  const clsRoom3 = new ClassRoom(34);

  return [clsRoom1, clsRoom2, clsRoom3];
}
