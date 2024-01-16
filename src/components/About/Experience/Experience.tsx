import { Chip } from '@/components/Shared/Chip';
import styles from './Experience.module.sass';
import { Heading } from '@/components/Shared/Heading';


export const Experience = async () => {
    const brace = '<';
    const title = 'Experiencia';
    const closeBrace = ' />';

    // fetch('http://localhost:3000')
    //     .then((response) => response.json())
    //     .then((data) => console.log('data',data))
    
    const response = await fetch('http://localhost:3000/api/experience');
    const jobs: Array<IJob> = await response.json()
    console.log("🚀 ~ Experience ~ skills:", jobs)

    return (
        <section className={styles.Experience}>

            <Heading title='Experiencia'/>

            <div className={styles.Experience__Tabs}>
                {
                    jobs.map((job) => {
                        const skills = job.skills;
                        return (
                            <div className={styles.Experience__Tab}>
                                <input 
                                    className={styles.Experience__Input}
                                    type="checkbox" 
                                    id={styles[`chck${job.id}`]}
                                />

                                <label 
                                    className={styles.Experience__TabLabel} 
                                    htmlFor={styles[`chck${job.id}`]}
                                >{job.title} <span>{job.duration}</span></label>

                                <div 
                                    id={styles[`tabContent${job.id}`]} 
                                    className={styles.Experience__TabContent}
                                >
                                    <div className={styles.Experience__PositionContainer}>
                                        {/* <img className={styles.Experiencie__LocationIcon} src="/icons/location.svg" /> */}
                                        <div className={styles.Experiencie__LocationIconContainer}>
                                            <svg className={styles.Experiencie__LocationIcon} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                                width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                                                <path className={styles.Experiencie__LocationIcon} fill="#f3e2e7" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
                                                C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
                                                C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
                                            </svg>
                                        </div>
                                        <h4 className={styles.Experience__Position}>{job.position}</h4>
                                    </div>

                                    <p>
                                        {job.description}
                                    </p>

                                    <div className={styles.Experience__ToolingContainer}>
                                            
                                        {
                                            skills.map((skill) => {
                                                return <Chip key={skill.id} description={skill.title} />
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
}