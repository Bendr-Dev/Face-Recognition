import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { LabeledFaceDescriptors } from 'face-api.js';

/**
 * Keeps state of known users that have been in the video feed
 * Each face descriptor utilizes a random color hex combination
 * as it's label
 */
export const labeledDescriptors: Writable<LabeledFaceDescriptors[]> = writable([]);