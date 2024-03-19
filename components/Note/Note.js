import React from "react";

import deleteIcon from "../../assets/delete.png";

import "./Note.css";
// import html2pdf from "html2pdf.js";
// import { useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";


import { useState } from 'react';
import jsPDF from 'jspdf';

function Note(props) {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    setLoader(true);
    const doc = new jsPDF();
    doc.text(10, 10, props.note.text);
    setLoader(false);
    doc.save('note.pdf');
  };
  // const [timeoutId, setTimeoutId] = useState(null); 

  //   const formatDate = (value) => {
  //   };
  
  //   const debounce = (func) => {
  //     clearTimeout(timeoutId); 
  //     const id = setTimeout(() => {
  //       func();
  //     }, 30000);
  //     setTimeoutId(id); 
  //   };
  //   const updateText = (text, id) => {
  //         debounce(() => props.updateText(text, id));
  //       };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => props.updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        {/* <p>{props.note.time}</p> */}

        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
        <button className="pdf" onClick={downloadPDF} disabled={loader}>
          {loader ? <span>Downloading</span> : <span>Download</span>}
        </button>
      </div>
    </div>
  );
}

export default Note;






















// function Note(props) {
//   const [loader, setLoader] = useState(false);
//   const downloadPDF = () =>{
//     const capture = document.querySelector('.note')
//     setLoader(true);
//     html2canvas(capture).then((canvas)=>{
//       const doc =new jsPDF('p','mm','a4');
//       const componentWdith = doc.internal.pageSize.getWidth();
//       const componentHeigt = doc.internal.pageSize.getHeight();
//       setLoader(false);
//       doc.save('note.pdf')
//     })
//   }
//   const [timeoutId, setTimeoutId] = useState(null); 

//   const formatDate = (value) => {
//   };

//   const debounce = (func) => {
//     clearTimeout(timeoutId); 
//     const id = setTimeout(() => {
//       func();
//     }, 30000);
//     setTimeoutId(id); 
//   };

//   const updateText = (text, id) => {
//     debounce(() => props.updateText(text, id));
//   };

//   const downloadAsPDF = () => {
//     const element = document.querySelector('.note'); 
//     html2pdf(element);
//   };

//   return (
//     <div className="note" style={{ backgroundColor: props.note.color }}>
//       <textarea
//         className="note_text"
//         defaultValue={props.note.text}
//         onChange={(event) => updateText(event.target.value, props.note.id)}
//       />
//       <div className="note_footer">
//         <p>{formatDate(props.note.time)}</p>
//         <img
//           src={deleteIcon}
//           alt="DELETE"
//           onClick={() => props.deleteNote(props.note.id)}
//         />
//         <button className="pdf" onClick={downloadPDF}
//         disabled={!(loader===false)}
//         >
//           {loader?(
//             <span>Downloading</span>
//           ):(
//             <span>Download</span>
//           )}
        
//         </button>
//       </div>
//     </div>              
//   );
// }

// export default Note;
