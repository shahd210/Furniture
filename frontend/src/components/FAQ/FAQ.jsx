import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./FAQ.module.css"
export default function FAQ() {
  return (
   <>
   <div  className={`${styles.pstart} ${styles.purple} py-5 mb-4`} >
        <h3>FAQ</h3>
         <p >Home . Pages . <span className={`${styles.pink} ${styles.fontsmall}`}>FaQ</span></p>
      </div>
      <div className="container pt-5">
        <div className="row gap-5 d-flex justify-content-center">
          <div className="col-5 mb-5 ">
       <h4 className='mb-4'>General Information</h4>
       <div className='mb-2'>
        <p className={`${styles.ques} fw-bold`} >Lorem ipsum dolor sit amet.</p>
        <p className={`${styles.ans}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis similique vel repellat qui natus maxime neque asperiores tempore nobis incidunt.</p>
       </div>
       <div className='mb-2'>
        <p className={`${styles.ques} fw-bold`}>Lorem ipsum dolor sit amet.</p>
        <p className={`${styles.ans}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis similique vel repellat qui natus maxime neque asperiores tempore nobis incidunt.</p>
       </div>
       <div className='mb-2'>
        <p className={`${styles.ques} fw-bold`}>Lorem ipsum dolor sit amet.</p>
        <p className={`${styles.ans}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis similique vel repellat qui natus maxime neque asperiores tempore nobis incidunt.</p>
       </div>
       <div className='mb-2'>
        <p className={`${styles.ques} fw-bold`}>Lorem ipsum dolor sit amet.</p>
        <p className={`${styles.ans}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis similique vel repellat qui natus maxime neque asperiores tempore nobis incidunt.</p>
       </div>
        <div className='mb-2'>
        <p className={`${styles.ques} fw-bold`}>Lorem ipsum dolor sit amet.</p>
        <p className={`${styles.ans}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis similique vel repellat qui natus maxime neque asperiores tempore nobis incidunt.</p>
       </div>
          </div>
          <div className={`${styles.purple} col-5  p-5`}>
            <h5 className='mb-5'>Ask a Question</h5>
            <div className="input-group-sm mb-3 pt-3 ">
 
           <input type="text" className="form-control" placeholder="Your Name*" aria-label="Username" 
           aria-describedby="basic-addon1"/>
           </div>

           <div className="input-group-sm pt-3  mb-3">
 
           <input type="text" className="form-control" placeholder="Subject*" aria-label="Username" 
           aria-describedby="basic-addon1"/>
           </div>
           <div className="mb-3 pt-3">
           <textarea className="form-control" placeholder='Text your message' id="exampleFormControlTextarea1" rows="6"></textarea>
           </div>
          <button className={`${styles.btnpink} btn  rounded border mt-2 p-2 text-white  fw-bold`} >Send Mail</button>

          </div>
        </div>
      </div>
   </>
  )
}
