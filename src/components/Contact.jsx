// import React, { useState } from 'react';

// import { TfiBackLeft } from "react-icons/tfi";
// import { RiMailSendLine } from "react-icons/ri";


// import { useNavigate } from 'react-router-dom';

// const Contact = () => {
//     const navigate = useNavigate();

//     const [fields, setFields] = useState([
//         { name: 'sendto', value: 'homerdarang@icloud.com', type: 'hidden', label: 'Send To' },
//         { name: 'name', value: '', type: 'text', label: 'Name', required: true, placeholder: 'Juan Dela Cruz' },
//         { name: 'replyTo', value: '', type: 'email', label: 'Your Email', required: true, placeholder: 'Your email@email.com' },
//         // { name: 'title', value: '', type: 'text', label: 'Subject', required: true },
//         { name: 'body', value: '', type: 'textarea', label: 'Message', required: true, placeholder: 'Your message here...' },
//     ]);

//     const [result, setResult] = useState('');
//     const [error, setError] = useState('');

//     const handleChange = (index, newValue) => {
//         const newFields = fields.map((field, i) => (
//             i === index ? { ...field, value: newValue } : field
//         ));
//         setFields(newFields);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Initialize an empty object to hold the request body
//         const requestBody = {};

//         // Iterate over each field in the fields array
//         for (let i = 0; i < fields.length; i++) {
//             const field = fields[i]; // Get the current field
//             requestBody[field.name] = field.value; // Assign the field's value to the corresponding key in the requestBody
//         }

//         console.log('Request Body:', requestBody); // Log the request body to check its structure

//         const url = 'https://mail-sender-api1.p.rapidapi.com/';
//         const options = {
//             method: 'POST',
//             headers: {
//                 'x-rapidapi-key': 'aa4bb93377msh5b04192fb75f0a8p11c396jsn81fbd93a431d',
//                 'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(requestBody),
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.text();
//             const status = response.status === 200 ? <div>
//                 <div className='grid place-items-center px-5 py-3 absolute left-0 right-0 top-1/2'>
//                     <RiMailSendLine className='text-3xl text-green-500' />
//                     <h1 className='text-4xl text-green-500'>Message Sent!</h1>
//                     <button className='px-3 py-2 rounded-full bg-slate-200 text-slate-700' onClick={() => navigate(-1)}>Close</button>
//                 </div>
//             </div> : <div>
//                 <div className='grid place-items-center px-5 py-3 absolute left-0 right-0 top-1/2'>
//                     <RiMailSendLine className='text-3xl text-red-500' />
//                     <h1 className='text-4xl text-red-500'>Message Sent!</h1>
//                     <button className='px-3 py-2 rounded-full bg-slate-200 text-red-500' onClick={() => navigate(-1)}>Close</button>
//                 </div>
//             </div>; // Check if the response status is 200 (success) or not
//             setResult(result);
//             console.log('API Response:', result); // Log the API response
//         } catch (error) {
//             setError(error.toString());
//             console.error('Error:', error); // Log any errors
//         }
//     };

//     return (
//         <>
//             <div className='w-4/5 m-auto grid place-items-center mt-60'>
//                 <button className='flex place-items-center px-4 py-2 border-2 border-slate-200 hover:bg-slate-200 transition-all ease-linear' onClick={() => navigate(-1)}>
//                     <span className='me-2'><TfiBackLeft /></span>
//                     Go Back
//                 </button>
//                 <h1 className='lg:text-3xl md:text-2xl text-xl font-medium text-teal-400 p-8 flex place-items-center'>Send Message</h1>
//                 <form className='grid my-10' onSubmit={handleSubmit}>
//                     {fields.filter(field => field.type !== 'hidden').map((field, index) => (
//                         <div className='grid' key={field.name}>
//                             <label className='text-xl font-light mb-2'>
//                                 {field.label}
//                                 {field.type === 'textarea' ? (
//                                     <textarea
//                                         value={field.value}
//                                         onChange={(e) => handleChange(index, e.target.value)}
//                                         required={field.required}
//                                         placeholder={field.placeholder}
//                                         className='block  px-2 py-3 mb-4 outline-none border-b-2 border-slate-200 lg:w-96 md:w-80 w-64 text-base'
//                                     />
//                                 ) : (
//                                     <input
//                                         type={field.type}
//                                         value={field.value}
//                                         onChange={(e) => handleChange(index, e.target.value)}
//                                         required={field.required}
//                                         placeholder={field.placeholder}
//                                         className='block px-2 py-3 mb-4 outline-none border-b-2 border-slate-200 lg:w-96 md:w-80 w-64 text-base'
//                                     />
//                                 )}
//                             </label>
//                         </div>
//                     ))}
//                     <div className='flex flex-row gap-5 justify-center mt-4'>
//                         <button className='flex place-items-center px-4 py-2 border-2 border-slate-200 hover:bg-slate-200 transition-all ease-linear' type="submit">
//                             <span className='me-2'><RiMailSendLine /></span>
//                             Send Message</button>
//                         <button className='flex place-items-center text-red-500 px-4 py-2 border-2 border-slate-200 hover:bg-slate-200 transition-all ease-linear' onClick={() => navigate(-1)}>
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//                 {result && <p>Result: {result}</p>}
//                 {error && <p>Error: {error}</p>}
//             </div>
//         </>
//     );
// };

// export default Contact;

import React, { useState } from 'react';

import { TfiBackLeft } from "react-icons/tfi";
import { RiMailSendLine } from 'react-icons/ri';

import { useNavigate, Link } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate()

    const [replyTo, setReplyTo] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [result, setResult] = useState('');
    const [status, setStatus] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            sendto: 'homerdarang@icloud.com',
            replyTo,
            name,
            // title,
            body,
            ishtml: 'false'
        };

        const url = 'https://mail-sender-api1.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'aa4bb93377msh5b04192fb75f0a8p11c396jsn81fbd93a431d',
                'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // const status = response.ok ? 'Success' : 'Error';
            const status = response.ok ? <div>
                <div className='grid place-items-center px-5 py-3 absolute left-0 right-0 top-1/2'>
                    <RiMailSendLine className='text-3xl text-green-500' />
                    <h1 className='text-4xl text-green-500'>Message Sent!</h1>
                    <button className='px-3 py-2 rounded-full bg-slate-200 text-slate-700' onClick={() => navigate(-1)}>Close</button>
                </div>
            </div> : <div>
                <div className='grid place-items-center px-5 py-3 absolute left-0 right-0 top-1/2'>
                    <RiMailSendLine className='text-3xl text-red-500' />
                    <h1 className='text-4xl text-red-500'>Message Sent!</h1>
                    <button className='px-3 py-2 rounded-full bg-slate-200 text-red-500' onClick={() => navigate(-1)}>Close</button>
                </div>
            </div>; // Check if the response status is 200 (success) or not;
            setStatus(status)
            setResult(result);
            console.log('API Response:', result); // Log the API response
            console.log('Status:', status); // Log the status
        } catch (error) {
            setError(error.toString());
            console.error('Error:', error); // Log any errors
        }
    };

    return (
        <>
            <div className='w-4/5 m-auto grid place-items-center mt-60'>
                <Link to={'/'} className='flex place-items-center px-4 py-2 border-2 border-slate-200 hover:bg-slate-200 transition-all ease-linear' onClick={() => navigate(-1)}>
                    <span className='me-2'><TfiBackLeft /></span>
                    Go Back
                </Link>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-medium text-teal-400 p-8 flex place-items-center'><RiMailSendLine className='me-3' />Send Message</h1>
                <form className='grid my-10' onSubmit={handleSubmit}>
                    <div>
                        <label className='text-xl font-light'>
                            Your Email:
                            <input
                                type="email"
                                value={replyTo}
                                onChange={(e) => setReplyTo(e.target.value)}
                                required
                                className='block px-2 py-1 mb-6 mt-6 outline-none border-b-2 border-slate-200 lg:w-96 md:w-80 w-64 text-base'
                                placeholder='youremail@email.com'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='text-xl font-light'>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='block px-2 py-3 mb-6 mt-6 outline-none border-b-2 border-slate-200 lg:w-96 md:w-80 w-64 text-base'
                                placeholder='Juan Dela Cruz'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='text-xl font-light'>
                            Message:
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                required
                                className='block  px-2 py-3 mb-6 outline-none border-b-2 border-slate-200 lg:w-96 md:w-80 w-64 text-base'
                                placeholder='Your message here...'
                            />
                        </label>
                    </div>
                    <button className='flex place-items-center place-self-center px-4 py-2 w-44 border-2 border-slate-200 hover:bg-slate-200 transition-all ease-linear' type="submit">
                        <RiMailSendLine className='me-2' />Send Message
                    </button>
                </form>
                {status}
                {result && <p>Result: {result.message}</p>}
                {/* {error && <p>Error: {error}</p>} */}
            </div>
        </>
    );
};

export default Contact;
