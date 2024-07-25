import React, { useState } from 'react';
import style from './AccordianStyle.css';

function Accordian() {
    const [openExplation, setOpenExplaination] = useState(false);
    const [firstAccordianItemExplaination, setFirstAccordianItemExplaination] = useState(false);
    const [secondAccordianItemExplaination, setSecondAccordianItemExplaination] = useState(false);
    const [thirdAccordianItemExplaination, setThirdAccordianItemExplaination] = useState(false);

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    function expandAccordianItem(item){
        console.log(item.target.id);
        setOpenExplaination((prev) => !prev);
        handleEachExplaination(item.target.id);
    }

    function handleEachExplaination(name){
        switch (true){
            case name=="first": {
                console.log("first case");
                setFirstAccordianItemExplaination((prev) => !prev);
                setSecondAccordianItemExplaination(false);
                setThirdAccordianItemExplaination(false);
                break;
            }
            case name=="second": {
                setFirstAccordianItemExplaination(false);
                setSecondAccordianItemExplaination((prev) => !prev);
                setThirdAccordianItemExplaination(false);
                break;
            }
            case name=="third": {
                setFirstAccordianItemExplaination(false);
                setSecondAccordianItemExplaination(false);
                setThirdAccordianItemExplaination((prev) => !prev);
                break;
            }
            default:{
                setFirstAccordianItemExplaination(false);
                setSecondAccordianItemExplaination(false);
                setThirdAccordianItemExplaination(false);
                break;
            }

        }
    }

    function shouldSubmitButtonEnabled(event){
        console.log(event.target.checked);
        if(!event.target.checked){
            setIsButtonDisabled(true);
            return;
        }

        console.log(document.getElementsByClassName("accordianCheck"));
        let count = 0;

        let items = document.getElementsByClassName("accordianCheck");
        Array.from(items).forEach((item) =>{
            if(item.checked){
                count++;
            }
        });
        console.log(count);
        if(count == 3){
            console.log("should be enabled");
            setIsButtonDisabled(false);
        }else{
            console.log("should be disabled");
            setIsButtonDisabled(true);
        }
    }

  return (
    <div>
      <h1>Accordian list</h1>
      <h2>Terms and Condition</h2>
      <div id="accordianList">
        <div id="firstItem" className='accordian-item'>
            <input type='checkbox' id='firstAccordian' className='accordianCheck' onClick={(e)=>shouldSubmitButtonEnabled(e)}/>
            <p>First accordian text</p>
            <button id="first" onClick={ (id)=> expandAccordianItem(id)}>Expand</button>
        </div>
        {openExplation && firstAccordianItemExplaination &&
            <div id="firstAccordianExplain">
                <p>Explaination of first accordian</p>
            </div>
        }
        <div id="secondItem" className='accordian-item'>
            <input type='checkbox' id='secondAccordian' className='accordianCheck' onClick={(e)=>shouldSubmitButtonEnabled(e)}/>
            <p>First accordian text</p>
            <button id="second" onClick={ (id)=> expandAccordianItem(id)}>Expand</button>
        </div>
        {openExplation && secondAccordianItemExplaination &&
            <div id="secondAccordianExplain">
                <p>Explaination of second accordian</p>
            </div>
        }
        <div id="thirdItem" className='accordian-item'>
            <input type='checkbox' id='thirdAccordian' className='accordianCheck' onClick={(e)=>shouldSubmitButtonEnabled(e)}/>
            <p>First accordian text</p>
            <button id="third" onClick={ (id)=> expandAccordianItem(id)}>Expand</button>
        </div>
        { openExplation && thirdAccordianItemExplaination &&
            <div id="thirdAccordianExplain">
                <p>Explaination of third accordian</p>
            </div>
        }
      </div>
      <button id="submit" className='accordianSubmitBtn' disabled={isButtonDisabled} onSubmit={()=>{console.log("submit clicked");}}>Submit</button>
    </div>
  )
}

export default Accordian
