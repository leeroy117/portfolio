import { Heading } from '@/components/Shared/Heading';
import styles from './Education.module.sass';
import  Image  from 'next/image';

async function getData(){
    try {

        const response = await fetch('http://127.0.0.1:3000/api/education',{
            method: 'GET',
            headers: {
                
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const courses: Array<ICourse>= await response.json();
        return courses;

    } catch (error) {
        console.log("🚀 ~ getData ~ error 2:", error)
        
        return [];
    }
}


export const Education = async () => {

    // const response = await fetch('http://127.0.0.1:3000/api/education',{
    //     method: 'GET'
    // });
    // const courses: Array<ICourse>= await response.json();
    const courses: Array<ICourse>= await getData();

    return (
        <section className={styles.Education}>
            
            <Heading title='Educación' />
            <div className={styles.Education__Info}>
               

                <div className={styles.Education__Courses}>
                    <div className={styles.Education__SubtitleContainer}>
                        <h4 className={styles.Education__Subtitle}>Cursos</h4>
                    </div>
                    <div className={styles.Education__CoursesContainer}>
                    {
                        courses.map((course, index) => {
                            return (
                                        <Image 
                                            className={styles.Education__Image}
                                            key={course.id}
                                            src={course.img} 
                                            alt={course.imgAlt}
                                            width={400} 
                                            height={300}
                                            quality={15}
                                            priority={false}
                                        />
                                    )
                                })
                    }
                    </div>
                </div>
            </div>
        </section>
    );
}