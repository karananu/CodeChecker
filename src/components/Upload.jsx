import React,{useEffect, useState} from 'react'
import {storage} from "../Firebase.js"
import {getDownloadURL, ref,uploadBytes} from "firebase/storage";
import {v4} from "uuid";


const Upload = () => {
    const [pdfupload,setUpload] = useState(null);
    //show pdf 
  

    //uploading pdf to firebase
const uploadPdf = () => {
  if(pdfupload==null)return;
   const pdfRef=ref(storage,`codes/${ pdfupload.name + v4() }`);
  uploadBytes(pdfRef,pdfupload).then(()=>{
    alert("pdf uploaded");
  })
};
  useEffect(()=>{
    getDownloadURL(ref(storage,`codes/${pdfupload.name + v4() }`))
    .then((url)=>{
      console.log(url)
    })
  },[]);
  return (
    <div>
    <div className="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{pdfupload?.name} </p>
            </div>
            <input id="dropzone-file" onChange={(e) => setUpload(e.target.files[0])} accept="application/pdf" type="file" class="hidden" />
        </label>
    </div> 
    <div className="flex justify-center mt-5  gap-x-5">
        <button  onClick={uploadPdf} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Upload pdf</button>
        <button className="ml-4 inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 rounded text-lg">Generate Report</button>
        
      </div>
    </div>
  )
}

export default Upload