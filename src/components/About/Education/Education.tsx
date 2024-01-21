import { Heading } from '@/components/Shared/Heading';
import styles from './Education.module.sass';
import  Image  from 'next/image';

export const Education = async () => {

    const response = await fetch('http://localhost:3000/api/education');
    const courses: Array<ICourse>= await response.json();


    return (
        <section className={styles.Education}>
            
            <Heading title='Educación' />
            <div className={styles.Education__Info}>
                {/* University */}
                
                {/* <div className={styles.Education__Courses}>
                    <div className={styles.Education__SubtitleContainer}>
                        <h4 className={styles.Education__Subtitle}>Universidad</h4>
                    </div>
                    <div className={styles.Education__UniversityContainer}>
                        <span>Universidad:</span>
                        <br/>
                        <span>Univeridad Politecnica de Gomez Palacio</span>
                    </div>
                </div> */}
                
                {/* courses */}
                <div className={styles.Education__Courses}>
                    <div className={styles.Education__SubtitleContainer}>
                        <h4 className={styles.Education__Subtitle}>Cursos</h4>
                    </div>
                    <div className={styles.Education__CoursesContainer}>
                    {
                        courses.map((course, index) => {
                            return (
                                        <Image 
                                            key={index}
                                            className={styles.Education__Image}
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