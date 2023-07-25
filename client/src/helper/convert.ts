/** image onto base64  */

export default (file: Blob) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      const base64String = fileReader.result as string;
      resolve(base64String);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
