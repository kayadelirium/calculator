import generateString from "../strings/generateString"

const MAX_MESSAGE_LENGTH = 100;

const generateMessage = () => {
    const message = {
        isFromMe: !!(Math.round(Math.random())),
        text: generateString(Math.round(Math.random() * MAX_MESSAGE_LENGTH))
    }

    return message;
}

export default generateMessage;

