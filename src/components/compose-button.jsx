import openCompose from '../utils/open-compose';
import states from '../utils/states';

import Icon from './icon';

export default function ComposeButton() {
  return (
    <button
      type="button"
      id="compose-button"
      onClick={(e) => {
        if (e.shiftKey) {
          const newWin = openCompose();

          if (!newWin) {
            alert('Looks like your browser is blocking popups.');
            states.showCompose = true;
          }
        } else {
          states.showCompose = true;
        }
      }}
    >
      <Icon icon="quill" size="xl" alt="Compose" />
    </button>
  );
}