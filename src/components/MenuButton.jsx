import React, {useState} from "react";

import styled from "styled-components";


function MenuButton() {

    const [state, setstate] = useState(false);

    const changeHandle = () => {

    }

    return (
        <BurguerButton>
            <div class="btn-wrapper">
                <div class="btn3 btn active" >
                <span class="line"></span>
                <span class="line"></span>
                </div>
            </div>
        </BurguerButton>
     );
}

export { MenuButton };

const BurguerButton = styled.div`
    .btn-wrapper{
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        cursor: pointer;
        transform-origin: center center;
        .line{
            width: 4rem;
            height: .5em;
            background-color: white;
            border-radius: 5rem;
            margin-bottom: .8rem;
        }
        .line:first-of-type{
            transition: ease 1s;
        }
        .line:nth-child(2){
            transition: ease 1s;
        }
        .line:last-of-type{
            transition: ease 1s;
        }
    }

    .btn3{
        .line:first-of-type{
            transition: ease .5s;
        }
        .line:last-of-type{
            transition: ease .5s;
        }
    }

    .btn3.active{
        .line{
            background: red;
            }
        .line:first-of-type{
            transform:matrix(0.8,0.8,-0.8,0.8,0,10);
        }
        .line:last-of-type{
            transform:matrix(0.8,-0.8,0.8,0.8,0,-10);
        }
    }
`
