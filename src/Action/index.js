export const changingStatus = (userStatus,userid,username,accessToken) => {
    return {
        type: "CHANGE",
        payloadOne: userStatus,
        payloadTwo:userid,
        payloadThree: username,
        payloadFour:accessToken
    }
}