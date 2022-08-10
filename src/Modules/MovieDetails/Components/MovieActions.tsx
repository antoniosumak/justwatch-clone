import React, { FunctionComponent } from 'react';
import {BsFillBookmarkFill} from "react-icons/bs"
import {IoMdThumbsUp, IoMdThumbsDown, } from "react-icons/io"
import {FaCheck} from "react-icons/fa"

interface IMovieActions {
}

const MovieActions = ({}: IMovieActions) => {

    const actions = [
        {
            id: "myList",
            label: "Moja lista",
            icon:  <BsFillBookmarkFill/>
        },
        {
            id: "watched",
            label: "Pogledano",
            icon: <FaCheck/>
        },
        {
            id: "like",
            label: "Sviđa mi se",
            icon: <IoMdThumbsUp/>
        },
        {
            id: "dislike",
            label: "Ne sviđa mi se",
            icon: <IoMdThumbsDown/>
        }
    ]

    return (
        <>

            <div className="bg-[#1c252f] flex items-center justify-between mb-6">
                { actions.map((action)=>
                    <div key={action.id} className="text-accentlighter py-[7.5px] px-[15px] space-y-2 flex flex-col items-center">
                        {action.icon}
                        <p className="text-[13px]" >{action.label}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default MovieActions;
