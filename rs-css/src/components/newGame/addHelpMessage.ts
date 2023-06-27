import elements from '../../utils/gameElements';
import gameLevelObject from '../../utils/gameLevelObj';
import setInputValue from './setInputValue';

function addHelpMessage(): boolean {
  const { editorInput } = elements.game;
  const { editorSpan } = elements.game;
  const { helpBtn } = elements.game;
  const { navItems } = elements.game;

  if (editorInput && editorSpan && helpBtn && navItems) {
    editorInput.value = '';
    editorSpan.innerHTML = '';
    const str = gameLevelObject[elements.level].help;
    let count = 0;
    const typing = setInterval(() => {
      helpBtn.setAttribute('disabled', 'disabled');
      elements.isHelp = true;
      editorInput.value += str[count];
      setInputValue();
      editorInput.focus();
      count += 1;
      if (count >= str.length) {
        clearInterval(typing);
        elements.isHelp = false;
        helpBtn.removeAttribute('disabled');
      }
    }, 200);
  }
  elements.helped = true;
  return elements.helped;
}

export default addHelpMessage;
