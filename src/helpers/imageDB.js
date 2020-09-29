import BackgroundHome from '../assets/background_home.svg';

// about page images
import ContributorGian from '../assets/contributor_gian.png';

export let about = {
  ContributorGian,
}

// release page images
// DESKTOP SIZE: 2000 × 1300
import ReleasePlaceholder from '../assets/release_placeholder.png';
import LucidCandyBoard from '../assets/lucid_candy_board.jpg';
import LucidCandyEEG from '../assets/lucid_candy_eeg.jpg';
import LucidCandyPower from '../assets/lucid_candy_power.jpg';

export let releases = {
  ReleasePlaceholder,
  LucidCandyBoard,
  LucidCandyEEG,
  LucidCandyPower,
};

// conversations pages images
export let conversations = {
  ReleasePlaceholder,
};

export let db = Object.assign(about, releases, conversations);
