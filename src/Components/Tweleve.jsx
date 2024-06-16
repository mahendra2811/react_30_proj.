import React , {useState} from 'react'

export default function Tweleve() {
    const [file,setFile ] = useState(null) ;

    const handleFileChange = (e)=> {
        const selectFile = e.target.files[0];
        setFile(selectFile);
    }
  return (
    <div>
      <input type="file" accept='image/*' onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt='' /> }
    </div>
  )
}
