import { useState } from "react";
import mediaUpload from "../utils/mediaUpload";

export default function Test() {
   const [images, setImages] = useState(null)

    function fileUplod(){
        mediaUpload(images).then((res) => {
            console.log(res)
        })

       // const url = await mediaUpload(images)
       // console.log(url)
   }

    return (
        <div className = "h-screen w-screen flex justify-center items-center">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs " onChange={(e) => setImages(e.target.files[0])} accept="image/*" />
            <button className="btn btn-primary" onClick={fileUplod}>upload</button>

        </div>
    )





}
