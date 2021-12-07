// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function isEmpty(txt)
{ if(txt.length==0)
    {return true}
    else
    { return false}
}

function isAlphabets(txt)
{ if(/^[a-z A-Z]+/.test(txt))
    {return true}
    else
    {return false}

}

function isDigits(txt)
{ if(/^[0-9]+/.test(txt))
    {return true}
    else
    {return false}

}

function isMobile(txt)
{ 
    if(/^[0-9]{10}/.test(txt))
    {return true}
    else
    {return false}

}

function isEmail(txt)
 {
   if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(txt))
    {
       return true
    }
    else
    {return false}


 }

 function checkError(txt)
 {
    // toast.error(`🦄${txt}`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });
 }

 function errorMessage(txt)
 {
    // toast.error(`🦄${txt}`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });
 }



export {isEmpty,isAlphabets,isEmail,isMobile,isDigits,checkError,errorMessage}