import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Active, DataRef, Over } from '@dnd-kit/core';
import { ColumnDragData } from '@/components/kanban/board-column';
import { TaskDragData } from '@/components/kanban/task-card';

type DraggableData = ColumnDragData | TaskDragData;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasDraggableData<T extends Active | Over>(
  entry: T | null | undefined
): entry is T & {
  data: DataRef<DraggableData>;
} {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data?.type === 'Column' || data?.type === 'Task') {
    return true;
  }

  return false;
}

export const getUrbanistFont = async () => {
  const response = await fetch(
    new URL('@/config/urbanist/Medium.ttf', import.meta.url)
  );
  const font = await response.arrayBuffer();
  return font;
};

export const getUrbanistSemiBoldFont = async () => {
  const response = await fetch(
    new URL('@/config/urbanist/SemiBold.ttf', import.meta.url)
  );
  const font = await response.arrayBuffer();
  return font;
};

export const getSourceCodeProFont = async () => {
  const response = await fetch(
    new URL('@/config/SourceCodePro/SourceCodePro.ttf', import.meta.url)
  );
  const font = await response.arrayBuffer();
  return font;
};
