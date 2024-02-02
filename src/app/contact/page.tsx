"use client"
import { Heading } from '@/components/Shared/Heading';
import styles from './Contact.module.sass';
import { sendEmail } from '../actions';
import { FormEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Contact(){

    const [errorResponse, setErrorResponse] = useState<IResponse>({
        success: true,
        error: [],
        status: 500
    });
    useEffect(()=>{

    },[errorResponse])
    

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        Swal.fire({
            willOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false,
            showConfirmButton: false,
            background: "#111111",
            color:"#fff",
        });
        const formData = new FormData(event.currentTarget);
        const response  = await sendEmail(formData);
        console.log("🚀 ~ onSubmit ~ response:", response);
        
        setErrorResponse({
            success: response.success,
            error: response.error,
            status: response.status
        })

       if(response.status !== 200){

            console.log('errr',errorResponse);
            
            // alert(JSON.stringify(errorMessgae));

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${
                    errorResponse.error.map((err: IError) => {
                        return `${err.error} \n`;
                        
                    })
                }`,
                // text: `Haga click en aceptar para ver el detalle.`,
                confirmButtonText: 'Aceptar',
                background: "#111111",
                color:"#fff",
                confirmButtonColor: "#2c3599",
                allowOutsideClick: false
                
              });

            }else{
                // setErrorResponse({
                //     success: response.success,
                //     error: response.error,
                //     status: response.status
                // })

                Swal.fire({
                    icon: "success",
                    // title: "Oops...",
                    // text: "Se ha enviado el correo electronico."+ "\nNos pondremos en contacto a la brevedad."+"\nMuchas gracias.",
                    // text: `Haga click en aceptar para ver el detalle.`,
                    html: `
                       <p> Se ha enviado el correo electronico. <p>
                       <p>Nos pondremos en contacto a la brevedad.</p>
                       <p>Muchas gracias.</p>
                    `,
                    confirmButtonText: 'Aceptar',
                    background: "#111111",
                    color:"#fff",
                    confirmButtonColor: "#2c3599",
                    allowOutsideClick: false
                    
                });

            }
            

    }

    return (
        <main className={styles.Contact }>
            <Heading title='Contacto'/>
            <div className={styles.Contact__FormContainer}>
                <form 
                    onSubmit={onSubmit}
                    className={styles.Contact__Form}
                >
                    <input 
                        type="text" 
                        placeholder='Jhon Due'
                        name='name'
                        className={styles.Contact__Input}
                    />

                    <input 
                        type="email" 
                        placeholder='example@gmail.com' 
                        name='email'
                        className={styles.Contact__Input}
                    />
                    <textarea 
                        cols={30} 
                        rows={10}
                        name='message'
                        placeholder='Me gustaria platicar contigo.'
                        className={styles.Contact__TextArea}
                    >
                        
                    </textarea>

                    {
                        (errorResponse.success == false) ?
                            <div className={styles.Contact__Error}>
                                <h3>Error:</h3>
                                <ul className={styles.Contact__ErrorList}>
                                {errorResponse.error.map((err: IError, index) => {
                                    return (
                                        <li key={index}>{err.error}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        :
                        null
                    }
                    
                    

                    <button 
                        className={styles.Contact__Button}
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </main>
    );
}