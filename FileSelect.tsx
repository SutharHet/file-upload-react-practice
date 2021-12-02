import React from "react";
import FileUpload from './FileUplode'
import Warning from './Warning'
const FileSelect: React.FC = (): React.ReactElement => {
  let [display ,setDisplay] = React.useState<string>('none');
  let [btnDisplay ,setBtnDisplay] = React.useState<string>('none');
  let [errMsg , setErrMsg] = React.useState<string>('');
  let [inputString, setInputString] = React.useState<string>('Add Images or Videos');
  let formData: FormData = new FormData();
  const handleChange = (selectedFiles: FileList | []): void =>{
    const regexImg = /^[image/]/;
    const regexVid = /^[video/]/;
    const bytesLimit: number = 1000000;
    for(let i=0; i<selectedFiles.length; i++){
      if(selectedFiles[i].size < bytesLimit){
        if(regexImg.test(selectedFiles[i].type) || regexVid.test(selectedFiles[i].type)){
          formData.append(selectedFiles[i].type, selectedFiles[i], selectedFiles[i].name)
          console.log("-- file "+selectedFiles[i].name+' added to form Data')
          setDisplay('none')
          setErrMsg('');
        }else{
          setDisplay('inline')
          setErrMsg('- File type is not image or video')
          break;
        }
        setInputString('Added');
        setBtnDisplay('inline');
      }else{
        if(regexImg.test(selectedFiles[i].type) || regexVid.test(selectedFiles[i].type)){
          setDisplay('inline')
          setErrMsg('- File size is higher then 5MB AND File type is not image or video')
          break;  
        }else{
          setDisplay('inline')
          setErrMsg('- File size is higher then 5MB')
          break;
        }
      }
    }
  }
  
  return( 
    <div className="container">
        <div className="controls">
          <label htmlFor="file-input">
            {inputString}
            <input 
              type="file"
              id="file-input" 
              accept="image/ , video/"
              onChange={(e) => handleChange(e.target.files || [])} 
              multiple
            />
          </label>
          <FileUpload show={btnDisplay} data={formData}/>
        </div>
        <Warning show={display} data={errMsg}/>
    </div>
  );
}


export default FileSelect;