export enum StackComponent {
    Row,
    Header,
    FullImage,
    Video,
    Break
}

export interface Row {
    type: StackComponent.Row;
    imageSrc: string;
    title: string;
    text: string;
}

export interface Header {
    type: StackComponent.Header;
    title: string;
    subtitle?: string;
}

export interface FullImage {
    type: StackComponent.FullImage;
    title?: string;
    imageSrc: string;
    subtitle?: string;
}

export interface Video {
    type: StackComponent.Video;
    title?: string;
    videoSrc: string;
    subtitle?: string;
}

export interface Break {
    type: StackComponent.Break
}

export default interface Project {
    title: string
    featured: boolean
    timePeriod: string
    link: string
    featureImgSrc: string
    description: string
    designGoals: string[]
    body: (Row | Header | FullImage | Video | Break)[]
}