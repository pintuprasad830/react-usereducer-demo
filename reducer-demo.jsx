



import { useReducer } from "react";

let initialState = {
    likes: 0
};

function reducer(state, action) {

    switch (action.type) {

        case "like":
            return { likes: state.likes + 1 };

        default:
            return state;
    }
}

export function ReducerDemo() {

    let [state, dispatch] = useReducer(reducer, initialState);

    function handleLikeClick() {
        dispatch({ type: "like" });
    }

    return (
        <div className="container-fluid">

            <h2>Live</h2>

            <iframe
                src="https://www.youtube.com/embed/gytn0sr3iBw"
                width="600"
                height="300"
                title="YouTube Video"
            ></iframe>

            <div className="mt-3">

                <button
                    onClick={handleLikeClick}
                    className="btn btn-primary bi bi-hand-thumbs-up"
                >
                </button>

                <span className="ms-2">
                    {state.likes} Likes
                </span>

            </div>

        </div>
    );
}
