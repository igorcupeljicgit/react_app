import React from "react"


const Smile = ({ searchEngine, condition }) => {

    searchEngine()

    const empty = () => {
        return (
            <div>
                <i class="far fa-smile"></i>
                <p>No items found</p>
            </div>
        )

    }




    return (condition) ? searchEngine :
}
export default Smile