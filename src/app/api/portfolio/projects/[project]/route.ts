export async function GET(request: Request, {params}: {params:{ project: string}}) {
    const response = await fetch('http://127.0.0.1:3000/api/portfolio/projects',{
        method: 'GET'
    });
    const projects: Array<IProject> = await response.json();
    const project  = projects.find((projectFind) => projectFind.slug == params.project);
    console.log('request a', params.project);
    
    return Response.json(project);
}