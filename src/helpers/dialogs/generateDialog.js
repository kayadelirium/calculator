import generateMessage from "../messages/generateMessage"

const generateDialog = (from, messagesCount) => {
    const dialog = {
        from,
        messages: Array(messagesCount).fill(0).map(element => generateMessage())
    }

    return dialog
}

export default generateDialog;