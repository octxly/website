export enum StackComponentType {
    ImageRow,
    Header,
    FullImage,
    Video,
    Break,
    TextRow
}

export interface ImageRow {
    type: StackComponentType.ImageRow;
    imageSrc: string;
    imgAlt: string;
    title: string;
    text: string;
    reverse: boolean;
}

export interface TextRow {
    type: StackComponentType.TextRow;
    title: string;
    text: string;
}

export interface Header {
    type: StackComponentType.Header;
    title: string;
    subtitle?: string;
}

export interface FullImage {
    type: StackComponentType.FullImage;
    title?: string;
    subtitle?: string;
    imageSrc: string;
    imageAlt: string;
}

export interface Video {
    type: StackComponentType.Video;
    title?: string;
    videoSrc: string;
    subtitle?: string;
}

export interface Break {
    type: StackComponentType.Break
}

export type StackComponent = ImageRow | Header | FullImage | Video | Break | TextRow

export default interface Project {
    title: string
    timePeriod: string
    link: string
    featureImgSrc: string
    featureImgAlt: string
    description: string
    techUsed: string[]
    body: StackComponent[]
}