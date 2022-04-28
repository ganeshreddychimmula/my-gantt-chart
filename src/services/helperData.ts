import { Task } from "gantt-task-react";

export const getTaskList = () => {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 4, 2),
      name: "Sample Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
    },
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 3, 2, 9, 0),
      name: "Project Management Activities",
      id: "Task 0",
      progress: 90,
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 3, 1, 9, 0),
      name: "Project Charter",
      id: "Task 0.1",
      progress: 90,
      type: "task",
      dependencies: ["Task 0"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 3, 1, 9, 0),
      name: "Project Management plan",
      id: "Task 0.2",
      progress: 90,
      type: "task",
      dependencies: ["Task 0.1"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 2),
      end: new Date(2022, 3, 2, 9, 0),
      name: "Monitoring Activities",
      id: "Task 0.3",
      progress: 90,
      type: "task",
      dependencies: ["Task 0.2"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 2),
      end: new Date(2022, 3, 2, 9, 0),
      name: "Controlling Activities",
      id: "Task 0.4",
      progress: 90,
      type: "task",
      dependencies: ["Task 0.3"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 2),
      end: new Date(2022, 3, 2, 9, 0),
      name: "UP Management Activities completed",
      id: "Task 0.5",
      progress: 90,
      type: "milestone",
      dependencies: ["Task 0.4"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 3),
      end: new Date(2022, 3, 6, 9, 0),
      name: "Intiation/Planning",
      id: "Task 1",
      progress: 40,
      dependencies: ["Task 0.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 3),
      end: new Date(2022, 3, 3, 9, 0),
      name: "Feasibility Study",
      id: "Task 1.1",
      progress: 40,
      dependencies: ["Task 1"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 3),
      end: new Date(2022, 3, 3, 9, 0),
      name: "Buisiness Case",
      id: "Task 1.2",
      progress: 40,
      dependencies: ["Task 1.1"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 4),
      end: new Date(2022, 3, 4, 9, 0),
      name: "Project Planning",
      id: "Task 1.3",
      progress: 40,
      dependencies: ["Task 1.2"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 5),
      end: new Date(2022, 3, 5, 9, 0),
      name: "Initiation",
      id: "Task 1.4",
      progress: 40,
      dependencies: ["Task 1.3"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 5),
      end: new Date(2022, 3, 5, 9, 0),
      name: "Planning Activities Completed",
      id: "Task 1.5",
      progress: 40,
      dependencies: ["Task 1.4"],
      type: "milestone",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 3),
      end: new Date(2022, 3, 6, 9, 0),
      name: "Research",
      id: "Task 14",
      progress: 40,
      dependencies: ["Task 1.5"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6, 0, 0),
      name: "Requirement Analysis",
      id: "Task 15",
      progress: 25,
      dependencies: ["Task 14"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 16",
      progress: 10,
      dependencies: ["Task 15"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Defining Requirements",
      id: "Task 17",
      progress: 15,
      dependencies: ["Task 16"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        12,
        0,
        0
      ),
      name: "Designing Architecture",
      id: "Task 18",
      progress: 10,
      dependencies: ["Task 16", "Task 17"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 13),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        0,
        0
      ),
      name: "Prototype Development",
      id: "Task 19",
      progress: 2,
      dependencies: ["Task 18"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        18,
        0,
        0
      ),
      name: "Prototype Review",
      id: "Task 20",
      progress: 2,
      dependencies: ["Task 19"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 17),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        18,
        0,
        0
      ),
      name: "Team Discussion and planning",
      id: "Task 21",
      progress: 2,
      dependencies: ["Task 20"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        27,
        0,
        0
      ),
      name: "Development",
      id: "Task 22",
      progress: 2,
      dependencies: ["Task 21"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        18,
        0,
        0
      ),
      name: "Development - Server Setup and Configuration",
      id: "Task 22.1",
      progress: 2,
      dependencies: ["Task 22"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        20,
        0,
        0
      ),
      name: "Development - Creating Rpcs",
      id: "Task 22.2",
      progress: 2,
      dependencies: ["Task 22.1"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        21,
        0,
        0
      ),
      name: "Development - Creating UI",
      id: "Task 22.3",
      progress: 2,
      dependencies: ["Task 22.1"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 22),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        24,
        0,
        0
      ),
      name: "Development - Getting data from server",
      id: "Task 22.4",
      progress: 2,
      dependencies: ["Task 22.2", "Task 22.3"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 26),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        27,
        0,
        0
      ),
      name: "Development - Load Testing",
      id: "Task 22.5",
      progress: 2,
      dependencies: ["Task 22.4"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 28),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 30),
      name: "Review",
      id: "Task 23",
      type: "task",
      progress: 70,
      dependencies: ["Task 22.5"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 2),
      name: "Release",
      id: "Task 24",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Task 23"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 7),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 7),
      name: "Celebration",
      id: "Task 25",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];
  return tasks;
};
