import React from "react";
// interface Data{
//   data: FormData
// }
const FileUpload: React.FC<{data: FormData, show: string}> = (props: {data: FormData, show: string}): React.ReactElement => {
  const upload = () => {
    console.log('upload called')
    fetch('',{
      method: 'POST',
      body: props.data
    }).then(response => response.blob)
      .then(success => console.log(success))
      .catch(err => console.log(err))
  }
  React.useEffect(() => {
    const btn = document.getElementById('uploadBtn') as HTMLDivElement;
    if(props.show !== 'none' && btn !== null){
      btn.style.display = 'inline';
    }else{
      btn.style.display = 'none';
    }
  })
  return <button id="uploadBtn" className='upload' onClick={() => upload()}>Upload</button>
}


export default FileUpload;