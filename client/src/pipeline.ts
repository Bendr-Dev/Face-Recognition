import * as face from "face-api.js";
import type {
    FaceDetection,
    FaceLandmarks68,
    FaceMatch,
    IDimensions,
    LabeledFaceDescriptors,
    TNetInput,
    WithFaceDescriptor,
    WithFaceLandmarks,
} from "face-api.js";

export type VideoFeed = HTMLElement & TNetInput & HTMLMediaElement;
export type Canvas = Element & IDimensions & HTMLCanvasElement;
export type FaceDescriptor = WithFaceDescriptor<WithFaceLandmarks<{ detection: FaceDetection }, FaceLandmarks68>>;

interface PipelineData {
    video: VideoFeed;
    canvas: Canvas;
    facesDetected: FaceDescriptor[];
    labeledDescriptors: LabeledFaceDescriptors[];
    updateFacesDetected: (facesDetected: FaceDescriptor[]) => void;
    updateLabelDescriptors: (labeledFaceDescriptors: LabeledFaceDescriptors[]) => void;
}

