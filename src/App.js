import './App.css';
import React, { useEffect, useState } from 'react'
import generateDialog from './helpers/dialogs/generateDialog';
import generateString from './helpers/strings/generateString';
import DialogPreview from './components/DialogPreview';
import Dialog from './components/Dialog';
import Popup from './components/Popup';

const DIALOGS_COUNT = 60;
const MAX_MESSAGES_COUNT = 150;

const initialDialogs = Array(DIALOGS_COUNT).fill(0).map(element => generateDialog(generateString(10), Math.round(Math.random() * MAX_MESSAGES_COUNT) + 1))

const App = () => { 
  const [dialogs, setDialogs] = useState(initialDialogs);
  const [choosedDialogIndex, setChoosedDialogIndex] = useState(-1);
  const [showPopup, setShowPopup] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
    setTimeout(() => {
      const newDialog = generateDialog(generateString(10), Math.round(Math.random() * MAX_MESSAGES_COUNT) + 1);
      const newDialogs = [newDialog, ...dialogs];
      setDialogs(newDialogs)
    }, 4000)
  }, [])

  useEffect(() => {
    if (!firstRender) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000)
    }
  }, [dialogs]);

  useEffect(() => {
    console.log('index update')
  }, [choosedDialogIndex])

  console.log(choosedDialogIndex);
  return (
    <div className="App">
      {choosedDialogIndex === -1 ? dialogs.map((dialog, index) => {

        return (
          <DialogPreview handleDialogClick={() => setChoosedDialogIndex(index)} dialog={dialog} key={dialog.from + index} />
        )
      }) : <Dialog dialog={dialogs[choosedDialogIndex]} handleReturnBack={() => setChoosedDialogIndex(-1)} />}
      {showPopup && <Popup handleClick={() => {
        setChoosedDialogIndex(0);
        setShowPopup(false);
        }} text="На ваш телефон пришло новое сообщение. Посмотри, вдруг там что-то важное." />}
    </div>
  );
}

export default App;
