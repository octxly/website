import Project, {StackComponentType} from "@/app/_projects/project";

const testProject: Project = {
    timePeriod: "Now to Now",
    description: "A test project as a template.",
    techUsed: ["ReactJS", "NextJS", "TailwindCSS"],
    featureImgSrc: "/projects/test/now.jpg",
    featureImgAlt: "Featured image",
    link: "test",
    title: "Test Project",
    body: [
        {
            type: StackComponentType.Header,
            title: "Test Project",
            subtitle: "This is a test project for development."
        },
        {
            type: StackComponentType.Break
        },
        {
            type: StackComponentType.ImageRow,
            title: "Text Section",
            text: "This is a selection of example text to test formatting and stuff. Idk why you would be seeing this since this project shouldn't be linked anywhere, but hi, I guess...",
            imageSrc: "/projects/test/now.jpg",
            imgAlt: "An image",
            reverse: false
        },
        {
            type: StackComponentType.TextRow,
            title: "Text Section",
            text: "This is a selection of example text to test formatting and stuff. Idk why you would be seeing this since this project shouldn't be linked anywhere, but hi, I guess...",
        },
        {
            type: StackComponentType.FullImage,
            title: "Full Image",
            subtitle: "This is a subtitle.",
            imageSrc: "/projects/test/now.jpg",
            imageAlt: "This is a test image."
        },
        {
            type: StackComponentType.Video,
            title: "Video Title",
            subtitle: "Video subtitle.",
            videoSrc: "/projects/test/driving.mp4"
        }
    ]
}

export default testProject;