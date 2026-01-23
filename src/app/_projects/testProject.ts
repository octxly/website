import Project, {StackComponent} from "@/app/_projects/project";

const testProject: Project = {
    timePeriod: "Now to Now",
    description: "A test project as a template.",
    techUsed: ["ReactJS", "NextJS", "TailwindCSS"],
    featureImgSrc: "/projects/test/now.jpg",
    featured: false,
    link: "test",
    title: "Test Project",
    body: [
        {
            type: StackComponent.Header,
            title: "Test Project",
            subtitle: "This is a test project for development."
        },
        {
            type: StackComponent.Break
        },
        {
            type: StackComponent.Row,
            title: "Text Section",
            text: "This is a selection of example text to test formatting and stuff. Idk why you would be seeing this since this project shouldn't be linked anywhere, but hi, I guess...",
            imageSrc: ""
        }
    ]
}

export default testProject;