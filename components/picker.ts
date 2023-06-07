import DocumentPicker from 'react-native-document-picker';
export const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
  
      // Process the selected file
      console.log(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
        console.log('User canceled file picker');
      } else {
        // Error occurred while picking the file
        console.log('Error picking file:', err);
      }
    }
  };