import React, {useRef} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {getMultiModalDirections} from "../services/directions";
import {useDirection} from "../hooks/useDirection";


export default function SearchBar() {
    const {setDirections, originBoxRef, destinationBoxRef} = useDirection();
    const getDirections = async () => {
        if (originBoxRef.current.value==='' || destinationBoxRef.current.value===''){
            return
        }
        const newDirections = await getMultiModalDirections(originBoxRef.current.value, destinationBoxRef.current.value);
        setDirections(newDirections);
    }

    return(
        <>
            <div className="searchBar">
                <Autocomplete>
                    <input
                        name='origin'
                        type='text'
                        autoComplete='new-password'
                        placeholder='Origin'
                        ref={originBoxRef}
                    />
                </Autocomplete>
                <Autocomplete>
                    <input
                        name='destination'
                        type='text'
                        autoComplete='new-password'
                        placeholder='Destination'
                        ref={destinationBoxRef}
                    />
                </Autocomplete>
                <button
                    type='submit'
                    onClick={getDirections}
                >
                    Calculate Route
                </button>

            </div>
            <style jsx>{`
                .searchBar{
                  display: flex;
                  flex-direction: row;
                  gap: 9px;
                  //align-content: center;
                }
                
                input{
                  height: 3.5vh;
                  width: 30vh;
                }
                
                button {
                  height: 3.5vh;
                }
            `}
            </style>
        </>

    );
}
