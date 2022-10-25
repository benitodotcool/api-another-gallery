import React from 'react'

export default function ImageFormats(props) {  

  return (
    <div>
      <p><strong>Image(s) format:</strong></p>
      <ul>
      {props.height && props.width ? (
        <>
          <li><code style={{display: 'inline-block', width: '88px', marginRight: '5px'}}>VERTICAL:</code>{props.width}×{props.height} (2:3)</li>
          <li><code style={{display: 'inline-block', width: '88px', marginRight: '5px'}}>HORIZONTAL:</code>{props.height}×{props.width} (3:2)</li>
        </>
      ) : (
        <>
          <li><code style={{display: 'inline-block', width: '56px', marginRight: '5px'}}>WIDTH:</code>{props.width}</li>
          <li><code style={{display: 'inline-block', width: '56px', marginRight: '5px'}}>HEIGHT:</code>Depends on the width of the work</li>
        </>
      )}
      </ul>
      <p style={{marginBlockEnd: 0}}>Units: pixels</p>
      <p style={{marginBlockStart: 0, marginBlockEnd: 0}}>Resolution: {props.dpi}dpi</p>
      <p style={{marginBlockStart: 0, marginBlockEnd: 0}}>Expected weight: {props.weight}</p>
      {props.isCompressed ? (
        <p style={{color: 'blue', marginBlockEnd: 0}}>Don't forget to use <a href="https://tinyjpg.com/" target="_blank" rel="noopener noreferrer" style={{color: 'blue', textDecoration: 'underline'}}>tinyjpg</a> to compress your image(s) before importing them</p>
      ) : (
        <p style={{color: 'red', marginBlockEnd: 0}}>Don't compress this image ⚠</p>
      )}
    </div>
  );
}