"use server"

// import { useLocale } from "next-intl";

export const sendEmail = async (formData: FormData, lang: string) => {
    // const locale = useLocale();
    console.log("🚀 ~ sendEmail ~ locale:", lang)
    const response = await fetch('http://127.0.0.1:3000/api/contact', {
        method: 'POST',
        headers: {
            "accept-language": lang
        },
        body: formData
    });
    
    const result = await response.json();
    return result;
}