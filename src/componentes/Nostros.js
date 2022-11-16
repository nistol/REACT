import React from 'react';

const OpinionItem = (props) => {
  const {tittle , subtittle,imagen,body} =props;

  return (
       <div id='opiniones'>
          <h1>{tittle}</h1>
          <h2>{subtittle}</h2>
          <img className="imgopi" src={imagen}/>
          <div dangerouslySetInnerHTML={{ __html: body }}/>
          <hr/>
       </div>
  );
}

export default OpinionItem;