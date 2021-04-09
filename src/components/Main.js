import TextareaAutosize from 'react-textarea-autosize';

const Main = () => {
    return (
        <div className='main'>
           <div className="note-form">
                <div className="title-input-container">
                    <input type="text" className="title-input" value='Untitled'/>
                </div>
                <div className="note-container">
                    <TextareaAutosize autoFocus id="note" minRows='15'/>
                </div>
           </div>
           <div className="markup-preview">
               
           </div>
        </div>
    )
}

export default Main
