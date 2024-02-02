"use server"

export const sendEmail = async (formData: FormData) => {
    const response = await fetch('http://127.0.0.1:3000/api/contact', {
        method: 'POST',
        headers: {

        },
        body: formData
    });
    
    const result = await response.json();
    return result;
}