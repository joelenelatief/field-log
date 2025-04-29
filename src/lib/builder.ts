import { Builder } from '@builder.io/react';

// Replace with your Public API Key
export const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;
Builder.register('init', BUILDER_API_KEY);

export const isEditing = () => Boolean(Builder.isEditing);
export const isPreview = () => Boolean(Builder.isPreviewing);
