import { KeyRound, Mail, Phone, UserIcon } from "lucide-react";
import { useState } from "react";
import FormField from "../Components/FormField";
import TitleForm from "../Components/TitleForm";

const SingUpPage = () => {
 
       
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [name, setName] = useState ('');
          const [lastName,setLastname] = useState ('');
          const [phone,setPhone ] = useState ('');

       const handleSubmit = (e) => {
         e.preventDefault ();
         console.log('Email: ', email);
         console.log('Pasword: ', password);
         console.log('Name: ', name);
         console.log('lastName: ', lastName);
         console.log('phone: ', phone);
    
       };
    return(
  
       <div>
        <TitleForm title="Registrarse"/>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
               <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                   <form onSubmit={handleSubmit} className="space-y-10">
            
                   <FormField 
                     fieldName={"email"}
                    FieldIcon={Mail}
                    fieldValue={email}
                    onChange={setEmail}
                    />
                   <FormField 
                     fieldName={"password"}
                     FieldIcon={KeyRound}
                     fieldValue={password}
                     onChange={setPassword}
                   />
                  
                   <FormField 
                     fieldName={"name"}
                     FieldIcon={UserIcon}
                     fieldValue={name}
                     onChange={setName}
                   />
                    <FormField 
                     fieldName={"lastName"}
                     FieldIcon={UserIcon}
                     fieldValue={lastName}
                     onChange={setLastname}
                   />
                     <FormField 
                     fieldName={"Phone"}
                     FieldIcon={Phone}
                     fieldValue={phone}
                     onChange={setPhone}
                   />
 
                   <button className="w-full flex justify-center border rounded-md border-transparent bg-emerald-600 py-2 px-4 text-sm 
                   font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                   type="submit" >Enviar </button>

                  </form>
               </div>   
             </div>

         </div>
  
    )
  
  }
  
  export default SingUpPage;