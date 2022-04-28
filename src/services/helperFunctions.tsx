import { useState, useEffect } from "react";
import { Task, ViewMode } from "gantt-task-react";
import { getTaskList } from "./helperData";
import { clearTimeout } from "timers";
import { useWindowDimensions } from "./windowData";

const getProjectOrTask = (task: Task, taskList: Task[]): Task => {
  return taskList[taskList.findIndex((t) => t.id === task.project)];
};

const getUpdatedStartEndTaskList = (
  modifiedTask: Task,
  updatedTaskList: Task[]
) => {
  if (modifiedTask.project) {
    const [start, end] = getStartAndEndDatesOfProjectOrTask(
      updatedTaskList,
      modifiedTask.project
    );
    const parent = getProjectOrTask(modifiedTask, updatedTaskList);
    if (parent.start.getTime() !== end.getTime() || parent.end.getTime()) {
      const newParent = { ...parent, start, end };
      updatedTaskList = updatedTaskList.map((task) =>
        task.id === modifiedTask.project ? newParent : task
      );
      if (newParent.project) {
        updatedTaskList = getUpdatedStartEndTaskList(
          newParent,
          updatedTaskList
        );
      }
    }
  }
  return updatedTaskList;
};

export const getStartAndEndDatesOfProjectOrTask = (
  tasks: Task[],
  projectId: string
): [start: Date, end: Date] => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let taskIndex = 0; taskIndex < projectTasks.length; taskIndex++) {
    const task = projectTasks[taskIndex];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};

interface UseUiDataType {
  view: ViewMode;
  setView: Function;
  tasks: Task[];
  setTasks: Function;
  loading: Boolean;
  setLoading: Function;
  columnWidth: number;
  ganttHeight: number;
  ganttWidth: number;
}

export const useUiData = (): UseUiDataType => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(getTaskList());
  const [loading, setLoading] = useState<Boolean>(true);
  const { ganttHeight, ganttWidth } = useWindowDimensions();
  const columnWidth = 60;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return {
    view,
    setView,
    tasks,
    setTasks,
    loading,
    setLoading,
    columnWidth,
    ganttHeight,
    ganttWidth,
  };
};

export const handleTaskChange = (
  modifiedTask: Task,
  tasks: Task[],
  setTasks: Function
): void => {
  let updatedTaskList = tasks.map((task) =>
    task.id === modifiedTask.id ? modifiedTask : task
  );
  updatedTaskList = getUpdatedStartEndTaskList(modifiedTask, updatedTaskList);
  setTasks(updatedTaskList);
};

export const handleTaskProgressChange = (
  modifiedTask: Task,
  taskList: Task[],
  setTasks: Function
): void => {
  setTasks(
    taskList.map((task) => (task.id === modifiedTask.id ? modifiedTask : task))
  );
};

export const handleExpanderClick = (
  modifiedTask: Task,
  taskList: Task[],
  setTasks: Function
): void => {
  setTasks(taskList.map((t) => (t.id === modifiedTask.id ? modifiedTask : t)));
};
