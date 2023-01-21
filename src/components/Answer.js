import React from "react";
import CheckAnswer from "../CheckAnswer";


export default function Answer(props) {

    const [show, setShow] = React.useState({})

    const handleClick = (item, i) => {
        return setShow(prev => {
            console.log(i)
            return {
                ...prev,
                [item]: i
            }
        })
    }
    console.log('this', show)
    console.log()



    return (
        <div>
            <ul>{props.send.map((item, i) => <button onClick={() => handleClick(item, i)} key={i + 1}
                className={show[item] === i ? 'clicked' : 'notClicked'}>{item}</button>)
            }

            </ul >

        </div>

    )

}