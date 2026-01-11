import Project, {StackComponent} from "@/app/_projects/project";

const testProject: Project = {
    timePeriod: "Now to Now",
    description: "A test project as a template.",
    designGoals: ["Test this template", "Make sure that this works", "Third design goal"],
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
        }
    ]
}

export default testProject;