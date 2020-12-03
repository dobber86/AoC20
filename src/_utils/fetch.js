export const fetchTextInput = async (file) => {
    const fileData = await fetch(file);
    const fileText = await fileData.text();
    const fileArray = await fileText.split('\n');
    return fileArray
}