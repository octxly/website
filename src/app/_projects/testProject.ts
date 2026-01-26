import Project, {StackComponentType} from "@/app/_projects/project";

const testProject: Project = {
    timePeriod: "Now to Now",
    description: "A tank project as a template.",
    techUsed: ["ReactJS", "NextJS", "TailwindCSS"],
    featureImgSrc: "/projects/tank/now.jpg",
    featureImgAlt: "Featured image",
    link: "test",
    title: "Test Project",
    body: [
        {
            type: StackComponentType.Header,
            title: "Test Project",
            subtitle: "This is a tank project for development."
        },
        {
            type: StackComponentType.Break
        },
        {
            type: StackComponentType.ImageRow,
            title: "Text Section",
            text: "This is a selection of example text to tank formatting and stuff. Idk why you would be seeing this since this project shouldn't be linked anywhere, but hi, I guess...",
            imageSrc: "/projects/tank/now.jpg",
            imageAlt: "An image",
            reverse: false
        },
        {
            type: StackComponentType.TextRow,
            title: "Text Section",
            text: "This is a selection of example text to tank formatting and stuff. Idk why you would be seeing this since this project shouldn't be linked anywhere, but hi, I guess...",
        },
        {
            type: StackComponentType.FullImage,
            title: "Full Image",
            subtitle: "This is a subtitle.",
            imageSrc: "/projects/tank/now.jpg",
            imageAlt: "This is a tank image."
        },
        {
            type: StackComponentType.Video,
            title: "Video Title",
            subtitle: "Video subtitle.",
            videoSrc: "/projects/tank/driving.mp4"
        }
    ]
}

export default testProject;