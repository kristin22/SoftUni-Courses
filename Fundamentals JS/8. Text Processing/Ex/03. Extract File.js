function extractFile(text) {

    let fileName = text.split("\\").pop().split(".");
    let extention = fileName.pop();
    fileName = fileName.join(".");
    
    console.log("File name:", fileName);
    console.log("File extension:", extention);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');