import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from "zod";

const transporter  = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    // secure: true,
    auth: {
        user: 'leeroy.uziel.gg@outlook.es',
        pass: 'iusubrweswqxkxnn'
    }
})

// const emailSchema = z.string().email();

const contactSchemaFunction = (lang: string) => {

    return z.object({
        email: z.string().email({
            message: `${lang === 'en' ? 'Email invalid' : 'El correo electronico no es valido.'}`
            // message: 'El correo electronico no es valido.'
        }),
        name: z.string().refine((value) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s']+$/.test(value),{
            message: `${lang === 'en' ? 'Name is invalid' : 'El nombre no es valido.'}`
        }),
        message: z.string().min(5,{
            message: `${lang === 'en' ? 'Message is invalid' : 'El mensaje no es valido.'}` 
        }) 
    });

}


export async function POST(request: Request){
    console.log('request header lang', request.headers.get('accept-language'));

    const lang = request.headers.get('accept-language') || 'es';

    const formData  = await request.formData();

    const result = contactSchemaFunction(lang).safeParse({
        email : formData.get('email'),
        message: formData.get('message'),
        name: formData.get('name')
    });

    if (!result.success) {
        const errorArray = result.error.issues.map((err) => {
            const error  = err.message;
            const path  = err.path[0]

            return {
                error,
                path
            }
        });

        return NextResponse.json({
                success: false,
                error: errorArray,
                status: 400
            }, 
            {
                status: 400
            })
    }

    const name = formData.get('name');
    const email = formData.get('email');
    const message= formData.get('message');

    try {
        
        const info = await transporter.sendMail({
            from: "leeroy.uziel.gg@outlook.es", // sender address
            to: "sukaritas19@gmail.com", // list of receivers
            subject: "Contact from portfolio", // Subject line
            text: "Hello world", // plain text body
            html: `
                <h3>Nombre: ${name}</h3>
                <h3>Email: ${email}</h3>
                <br/>
                <p>Correo electronico: ${message}</p>
                `, // html body
           // html: "nombre: " + name
        });

        console.log("infooooooooooooooo", info.response);

        return Response.json({
            success: true,
            error: null,
            status: 200
        },
        {
            status: 200
        })
    
    } catch (error) {
        console.error('err',error);
        return NextResponse.json({
            success: false,
            error: [{
                error: 'El correo electronico no pudo ser enviado'
            }],
            status: 500
        },
        {
            status: 500
        });
    }

}