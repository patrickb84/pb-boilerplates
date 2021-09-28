import home, { index as homeIndex } from "./Home.Routes";
import account, { index as accountIndex } from "./Account.Routes";
import note, { index as noteIndex } from "./Note.Routes";

export const primaryNavs = [note.allNotes, home.about, home.contact];

export const keys = {
  home,
  account,
  note,
};

const index = [...homeIndex, ...accountIndex, ...noteIndex];

export default index;
