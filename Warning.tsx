import React from "react";

const Warning: React.FC<{data: string, show: string}> = (props: {data: string, show: string}): React.ReactElement => {
  React.useEffect(() => {
    const warn = document.getElementById('warn') as HTMLDivElement;
    if(props.show !== 'none' && warn !== null){
      warn.style.display = 'inline';
    }else{
      warn.style.display = 'none';
    }
  })
  return( 
    <div id="warn">
      <div >{props.data}</div>
    </div>
  );
}


export default Warning;