import Project, {StackComponentType} from "@/app/_projects/project";

const tank: Project = {
    title: "Remote-Controlled Tank",
    description: "A 3D-printed, remote control tank, made from scratch.",
    featureImgAlt: "",
    featureImgSrc: "/projects/tank/now.jpg",
    link: "tank",
    techUsed: ["Onshape", "Arduino", "LittleFS", "WebSocket"],
    timePeriod: "May 2024 - January 2025",
    body: [
        {
            type: StackComponentType.Header,
            title: "Current Status",
        },
        {
            type: StackComponentType.FullImage,
            title: "What's Working",
            subtitle: "The tank currently has functional movement and suspension, so the hull is complete. The turret is currently inoperable, as I've stopped working on this project",
            imageSrc: "/projects/tank/components.jpg",
            imageAlt: "Components of the tank laid-out to display.",
        },
        {
            type: StackComponentType.Video,
            title: "Video Demonstration",
            videoSrc: "/projects/tank/driving.mp4"
        },
        {
            type: StackComponentType.Break
        },
        {
            type: StackComponentType.ImageRow,
            title: "Project Origins",
            imageSrc: "/projects/tank/leopard1.jpg",
            imageAlt: "A Leopard 1 tank driving around.",
            text: "Ever since my parents bought me a 3D printer years ago, I've always wanted to build some kind of vehicle. I was eating dinner one evening in May when an idea popped into my head - I would build a tank. Since I was interested in Cold War miliary history at the time, I quickly decided to model mine off of the German Leopard 1 Main Battle Tank.",
            reverse: false
        },
        {
            type: StackComponentType.ImageRow,
            title: "Prototype Design",
            reverse: false,
            imageSrc: "/projects/tank/initial.png",
            imageAlt: "Image of Onshape design.",
            text: "All of the project "
        }
    ]
}

export default tank;