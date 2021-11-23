import React, {useContext} from "react"
import {Context} from "../contexts/PictureContext"
import Image from "../components/Image"
import {getClass} from "../utils/index"

function Photos() {
    const {images} = useContext(Context)
    const imagesElements = images.map((image, i) => {
        return <Image key={image.id} img={image} className={getClass(i)} />
    })

    return(
        <main className="photos">
            {imagesElements}
        </main>
    )
}

export default Photos